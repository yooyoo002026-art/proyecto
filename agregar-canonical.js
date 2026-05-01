const fs = require("fs");
const path = require("path");

const BASE_URL = "https://calculadora-conductor.pages.dev";
const TARGET_DIRS = ["guias", "comparativas", "hubs"];

function processFile(filePath, fileName) {
  let html = fs.readFileSync(filePath, "utf8");

  // evitar duplicados
  if (html.includes('rel="canonical"')) return;

  // slug = nombre del archivo sin .html
  const slug = fileName.replace(".html", "");

  const canonicalURL = `${BASE_URL}/calculadoras/${slug}/`;

  const canonicalTag = `<link rel="canonical" href="${canonicalURL}">\n`;

  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>\n${canonicalTag}`);
    fs.writeFileSync(filePath, html, "utf8");
    console.log("✔", filePath);
  } else {
    console.log("⚠ sin <head>:", filePath);
  }
}

function processDirectory(dir) {
  const fullPath = path.join(__dirname, dir);

  if (!fs.existsSync(fullPath)) return;

  const files = fs.readdirSync(fullPath);

  files.forEach((file) => {
    const filePath = path.join(fullPath, file);

    // SOLO archivos .html
    if (file.endsWith(".html")) {
      processFile(filePath, file);
    }
  });
}

// ejecutar
TARGET_DIRS.forEach(processDirectory);

console.log("🚀 terminado");