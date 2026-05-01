const fs = require("fs");
const path = require("path");

const BASE_URL = "https://calculadora-conductor.pages.dev";
const ROOT_DIR = ".";

const clusters = [
  { folder: "", file: "sitemap-principal.xml" },
  { folder: "/calculadoras", file: "sitemap-calculadoras.xml" },
  { folder: "/guias", file: "sitemap-guias.xml" },
  { folder: "/comparativas", file: "sitemap-comparativas.xml" }
];

function getHtmlFiles(dir) {
  let results = [];

  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  });

  return results;
}

function generateSitemap(files, outputFile) {

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  files.forEach(file => {

    let url = file
      .replace(ROOT_DIR, "")
      .replace("index.html", "")
      .replace(".html", "")
      .replace(/\\/g, "/");

    xml += `<url>\n<loc>${BASE_URL}${url}</loc>\n</url>\n`;

  });

  xml += `</urlset>`;

  fs.writeFileSync(`${outputFile}`, xml, "utf8");

  console.log(`✔ ${outputFile} generado`);
}

clusters.forEach(cluster => {

  const dir = `${ROOT_DIR}${cluster.folder}`;
  const files = getHtmlFiles(dir);

  generateSitemap(files, cluster.file);

});


/* sitemap índice principal */

let indexXML = `<?xml version="1.0" encoding="UTF-8"?>\n`;

indexXML += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

clusters.forEach(cluster => {

  indexXML += `<sitemap>\n<loc>${BASE_URL}/${cluster.file}</loc>\n</sitemap>\n`;

});

indexXML += `</sitemapindex>`;

fs.writeFileSync(`sitemap.xml`, indexXML, "utf8");

console.log("✔ sitemap.xml índice generado correctamente");