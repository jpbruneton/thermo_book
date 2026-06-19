// Generates a dependency-free placeholder book cover at public/figs/front.png.
// Dark vertical gradient with a thin amber border, matching the site palette.
// Run: node scripts/make-placeholder-cover.mjs
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const W = 600;
const H = 800;

const top = [10, 11, 15]; // #0a0b0f
const bottom = [26, 18, 6]; // warm dark
const amber = [217, 160, 91]; // #d9a05b
const border = 6;

const lerp = (a, b, t) => Math.round(a + (b - a) * t);

// Raw image: each scanline prefixed by a filter byte (0 = none).
const raw = Buffer.alloc(H * (1 + W * 3));
let p = 0;
for (let y = 0; y < H; y += 1) {
  raw[p++] = 0;
  const t = y / (H - 1);
  for (let x = 0; x < W; x += 1) {
    const onBorder = x < border || x >= W - border || y < border || y >= H - border;
    if (onBorder) {
      raw[p++] = amber[0];
      raw[p++] = amber[1];
      raw[p++] = amber[2];
    } else {
      raw[p++] = lerp(top[0], bottom[0], t);
      raw[p++] = lerp(top[1], bottom[1], t);
      raw[p++] = lerp(top[2], bottom[2], t);
    }
  }
}

// CRC32 (PNG polynomial).
const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // color type: RGB
// 10,11,12 = compression/filter/interlace = 0

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw)),
  chunk("IEND", Buffer.alloc(0)),
]);

const outDir = join(process.cwd(), "public", "figs");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "front.png");
writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${W}x${H}, ${png.length} bytes)`);
