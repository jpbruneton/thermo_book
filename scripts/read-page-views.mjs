// Lists the silent view counters recorded by /api/views (see docs/page-views.md).
// Usage: node --env-file=.env.local scripts/read-page-views.mjs [chapters|exercises]
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.error(
    "Missing UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.\n" +
      "Run `vercel env pull .env.local` once to sync them from the Vercel project."
  );
  process.exit(1);
}

const redis = new Redis({ url, token });
const filter = process.argv[2]; // optional: "chapters" or "exercises"
const pattern = filter ? `views:${filter}:*` : "views:*";

const rows = [];
let cursor = 0;
do {
  const [nextCursor, keys] = await redis.scan(cursor, { match: pattern, count: 200 });
  cursor = Number(nextCursor);
  if (keys.length > 0) {
    const counts = await Promise.all(keys.map((key) => redis.get(key)));
    keys.forEach((key, i) => rows.push({ key, count: Number(counts[i]) || 0 }));
  }
} while (cursor !== 0);

rows.sort((a, b) => b.count - a.count);

if (rows.length === 0) {
  console.log("No view counters recorded yet.");
} else {
  const width = Math.max(...rows.map((r) => r.key.length));
  for (const { key, count } of rows) {
    console.log(`${key.padEnd(width)}  ${count}`);
  }
  console.log(`\n${rows.length} page(s), ${rows.reduce((sum, r) => sum + r.count, 0)} total view(s).`);
}
