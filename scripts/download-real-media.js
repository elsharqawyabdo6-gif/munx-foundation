const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);

const baseDir = path.join(__dirname, '..', 'public');

const folders = [
  'images/hero',
  'images/services',
  'images/portfolio',
  'images/case-studies',
  'images/blog',
  'images/about',
  'images/contact',
  'images/backgrounds',
  'videos',
  'assets'
];

const assets = [
  {
    url: "https://assets.mixkit.co/videos/preview/mixkit-network-of-glowing-dots-and-lines-48995-large.mp4",
    dest: "videos/hero-background.mp4"
  },
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    dest: "images/hero/hero-poster.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    dest: "images/portfolio/aurora.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    dest: "images/portfolio/lumen.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    dest: "images/portfolio/velora.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    dest: "images/case-studies/nova.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    dest: "images/blog/future.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    dest: "images/about/team.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    dest: "images/contact/office.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80",
    dest: "images/contact/illustration.jpg"
  }
];

const assetMap = {
  "images/hero/hero-poster.jpg": "assets/hero-poster.jpg",
  "images/portfolio/aurora.jpg": "assets/portfolio-aurora.jpg",
  "images/portfolio/lumen.jpg": "assets/portfolio-lumen.jpg",
  "images/portfolio/velora.jpg": "assets/portfolio-velora.jpg",
  "images/case-studies/nova.jpg": "assets/case-nova.jpg",
  "images/blog/future.jpg": "assets/blog-future.jpg",
  "images/about/team.jpg": "assets/about-team.jpg",
  "images/contact/illustration.jpg": "assets/contact-illustration.jpg"
};

async function download(url, dest) {
  console.log(`Downloading ${url} -> ${dest}`);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  await streamPipeline(res.body, fs.createWriteStream(dest));
}

(async () => {
  for (const f of folders) {
    const dir = path.join(baseDir, f);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  for (const item of assets) {
    const destPath = path.join(baseDir, item.dest);
    try {
      await download(item.url, destPath);
    } catch (err) {
      console.error(`Error downloading ${item.url}:`, err.message);
    }
  }

  for (const [src, dest] of Object.entries(assetMap)) {
    const srcPath = path.join(baseDir, src);
    const destPath = path.join(baseDir, dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied fallback: ${src} -> ${dest}`);
    }
  }

  console.log("All brand assets successfully downloaded and organized.");
})();
