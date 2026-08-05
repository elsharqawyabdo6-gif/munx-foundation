/*
  Simple asset downloader: reads public/assets/asset-manifest.json and downloads each URL
  Usage:
    node ./scripts/download-assets.js

  Requirements:
    - Node 18+ (global fetch available) or run with node-fetch installed
    - Optional: install sharp for image optimization (npm i sharp)
*/

const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);

const manifestPath = path.join(__dirname, '..', 'public', 'assets', 'asset-manifest.json');
const assetsDir = path.join(__dirname, '..', 'public', 'assets');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function download(url, dest) {
  console.log(`Downloading ${url} -> ${dest}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  await streamPipeline(res.body, fs.createWriteStream(dest));
}

async function optimizeImage(filePath) {
  try {
    const sharp = require('sharp');
    const tmp = `${filePath}.tmp.jpg`;
    await sharp(filePath).resize({ width: 2000 }).jpeg({ quality: 84 }).toFile(tmp);
    fs.renameSync(tmp, filePath);
    console.log(`Optimized ${path.basename(filePath)}`);
  } catch (err) {
    // sharp not installed or failed; skip optimization
    // console.log('Skipping optimize (sharp missing)');
  }
}

(async () => {
  await ensureDir(assetsDir);

  if (!fs.existsSync(manifestPath)) {
    console.error('Manifest not found:', manifestPath);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  for (const entry of manifest.assets || []) {
    const dest = path.join(assetsDir, entry.dest);
    try {
      await download(entry.url, dest);
      if (/\.(jpe?g|png)$/i.test(entry.dest)) {
        await optimizeImage(dest);
      }
    } catch (err) {
      console.error(`Error downloading ${entry.url}:`, err.message);
    }
  }

  console.log('Download complete. Review files in public/assets and run your build.');
})();
