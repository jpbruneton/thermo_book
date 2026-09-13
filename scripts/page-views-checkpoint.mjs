// Snapshot or diff the silent view/share counters recorded in Redis (see
// docs/page-views.md). Usage:
//   node --env-file=.env.local scripts/page-views-checkpoint.mjs save
//   node --env-file=.env.local scripts/page-views-checkpoint.mjs diff
import { Redis } from "@upstash/redis";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.error(
    "Missing UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.\n" +
      "Run `vercel env pull .env.local` once to sync them from the Vercel project."
  );
  process.exit(1);
}

const mode = process.argv[2];
if (mode !== "save" && mode !== "diff") {
  console.error("Usage: node --env-file=.env.local scripts/page-views-checkpoint.mjs <save|diff>");
  process.exit(1);
}

const checkpointPath = fileURLToPath(new URL("../page-views-checkpoint.json", import.meta.url));
const redis = new Redis({ url, token });

async function fetchAllCounters() {
  const counters = {};
  for (const pattern of ["views:*", "shares:*"]) {
    let cursor = 0;
    do {
      const [nextCursor, keys] = await redis.scan(cursor, { match: pattern, count: 200 });
      cursor = Number(nextCursor);
      if (keys.length > 0) {
        const counts = await Promise.all(keys.map((key) => redis.get(key)));
        keys.forEach((key, i) => (counters[key] = Number(counts[i]) || 0));
      }
    } while (cursor !== 0);
  }
  return counters;
}

const current = await fetchAllCounters();

if (mode === "save") {
  const payload = { savedAt: new Date().toISOString(), counters: current };
  writeFileSync(checkpointPath, JSON.stringify(payload, null, 2));
  const total = Object.values(current).reduce((sum, n) => sum + n, 0);
  console.log(`Checkpoint saved: ${Object.keys(current).length} key(s), ${total} total count(s).`);
  console.log(`-> ${checkpointPath}`);
} else {
  if (!existsSync(checkpointPath)) {
    console.error(`No checkpoint found at ${checkpointPath}. Run "save" first.`);
    process.exit(1);
  }
  const { savedAt, counters: baseline } = JSON.parse(readFileSync(checkpointPath, "utf8"));
  const rows = [];
  for (const [key, count] of Object.entries(current)) {
    const before = baseline[key] ?? 0;
    const delta = count - before;
    if (delta > 0) rows.push({ key, delta, before, count });
  }
  rows.sort((a, b) => b.delta - a.delta);

  console.log(`Since checkpoint (${savedAt}):\n`);
  if (rows.length === 0) {
    console.log("No new views/shares recorded.");
  } else {
    const width = Math.max(...rows.map((r) => r.key.length));
    for (const { key, delta, before, count } of rows) {
      console.log(`${key.padEnd(width)}  +${delta}  (${before} -> ${count})`);
    }
    const totalDelta = rows.reduce((sum, r) => sum + r.delta, 0);
    console.log(`\n${rows.length} key(s) with new activity, ${totalDelta} new count(s) total.`);
  }
}
