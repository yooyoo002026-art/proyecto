const fs = require("fs");
const path = require("path");

const BASE_URL = "https://calculadora-conductor.pages.dev";
const CALCULADORAS_DIR = "calculadoras";

function generarSitemap() {
  const basePath = path.join(__dirname, CALCULADORAS_DIR);

  if (!fs.existsSync(basePath)) {
    console.error("❌ No existe /calculadoras");
    return;
  }

  const slugs = fs.readdirSync(basePath);

  const urls = slugs.map(slug => {
    return `
  <url>
    <loc>${BASE_URL}/calculadoras/${slug}/</loc>
  </url>`;
  }).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");

  console.log(`✅ sitemap generado con ${slugs.length} URLs`);
}

generarSitemap();