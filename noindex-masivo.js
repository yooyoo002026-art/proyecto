const fs = require("fs");
const path = require("path");

const TARGET_DIRS = ["guias", "comparativas", "hubs"];

function processHTML(filePath) {
  let html = fs.readFileSync(filePath, "utf8");

  if (html.includes('noindex')) {
    console.log("⏭ ya tiene:", filePath);
    return;
  }

  if (!html.includes("<head>")) {
    console.log("⚠ sin head:", filePath);
    return;
  }

  const tag = '<meta name="robots" content="noindex, follow">\n';

  html = html.replace("<head>", `<head>\n${tag}`);

  fs.writeFileSync(filePath, html, "utf8");

  console.log("✔ modificado:", filePath);
}

function walk(dir) {
  if (!fs.existsSync(dir)) {
    console.log("❌ no existe:", dir);
    return;
  }

  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
    } else if (item.endsWith(".html")) {
      processHTML(full);
    }
  });
}

TARGET_DIRS.forEach(dir => {
  walk(path.join(__dirname, dir));
});

console.log("🚀 terminado");