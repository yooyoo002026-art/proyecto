const fs = require("fs");
const path = require("path");

const data = require("../src/data/calculadoras.json");

const template = fs.readFileSync(
  path.join(__dirname, "../src/templates/base.html"),
  "utf8"
);

const outputDir = path.join(__dirname, "../public");

// ===== LIMPIAR SLUG =====
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ===== CREAR DIR BASE =====
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let sitemapUrls = [];

// ===== GENERAR PAGINAS =====
data.forEach(page => {

  const slug = slugify(page.slug || page.title);

  const url =
    `https://calculadora-conductor.pages.dev/calculadoras/${slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": page.title,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web"
  };

  let html = template
    .replace(/{{title}}/g, page.title)
    .replace(/{{description}}/g, page.description)
    .replace(/{{url}}/g, url)
    .replace(/{{h1}}/g, page.h1)
    .replace(/{{intro}}/g, page.intro)
    .replace(/{{schema}}/g, JSON.stringify(schema))
    .replace(
      /{{calculadora}}/g,
`
<div class="calculadora">

<label>Viajes</label>
<input type="number" id="viajes" value="10">

<label>Tarifa promedio</label>
<input type="number" id="tarifa" value="55">

<label>Comisión %</label>
<input type="number" id="comision" value="25">

<label>Gasolina</label>
<input type="number" id="gasolina" value="120">

</div>
`
    );

  // ===== RUTA =====
  const pageDir = path.join(
    outputDir,
    "calculadoras",
    slug
  );

  fs.mkdirSync(pageDir, { recursive: true });

  fs.writeFileSync(
    path.join(pageDir, "index.html"),
    html
  );

  // ===== SITEMAP =====
  sitemapUrls.push(`
<url>
  <loc>${url}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <priority>0.8</priority>
</url>
`);
});

// ===== GENERAR SITEMAP =====
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>
`;

fs.writeFileSync(
  path.join(outputDir, "sitemap.xml"),
  sitemap
);

// ===== ROBOTS =====
const robots = `User-agent: *
Allow: /

Sitemap: https://calculadora-conductor.pages.dev/sitemap.xml
`;

fs.writeFileSync(
  path.join(outputDir, "robots.txt"),
  robots
);

console.log("✔ páginas generadas");
console.log("✔ sitemap generado");
console.log("✔ robots generado");