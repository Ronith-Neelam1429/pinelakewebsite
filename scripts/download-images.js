#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { images } from '../src/data/images.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.resolve(__dirname, '../public/images');
await fs.promises.mkdir(outDir, { recursive: true });

function collectUrls(obj, parts = []) {
  const results = [];
  if (typeof obj === 'string') {
    if (/^https?:\/\//i.test(obj)) results.push({ url: obj, parts });
    return results;
  }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      results.push(...collectUrls(obj[i], parts.concat(String(i))));
    }
    return results;
  }
  if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      results.push(...collectUrls(obj[key], parts.concat(key)));
    }
  }
  return results;
}

function sanitizeName(s) {
  return s.replace(/[^a-z0-9_.-]/gi, '-');
}

const entries = collectUrls(images);
if (entries.length === 0) {
  console.log('No image URLs found in src/data/images.js');
  process.exit(0);
}

console.log(`Found ${entries.length} image(s). Saving to ${outDir}`);

let saved = 0;
let skipped = 0;
let failed = 0;

for (const [idx, entry] of entries.entries()) {
  try {
    const { url, parts } = entry;
    const parsed = new URL(url);
    const base = path.basename(parsed.pathname) || `image-${idx}`;
    const prefix = parts.length ? parts.join('-') : '';
    const filename = sanitizeName((prefix ? prefix + '-' : '') + base);
    const filepath = path.join(outDir, filename);

    if (fs.existsSync(filepath)) {
      skipped++;
      console.log(`Skipping (exists): ${filename}`);
      continue;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    const stream = res.body;
    await pipeline(stream, fs.createWriteStream(filepath));
    saved++;
    console.log(`Saved: ${filename}`);
  } catch (err) {
    failed++;
    console.error(`Failed to fetch ${entry?.url || 'unknown'}: ${err.message}`);
  }
}

console.log(`Done. saved=${saved}, skipped=${skipped}, failed=${failed}`);
