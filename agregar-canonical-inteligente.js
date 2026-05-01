const fs = require("fs");
const path = require("path");

const BASE_URL = "https://calculadora-conductor.pages.dev";

const TARGET_DIRS = ["guias", "comparativas", "hubs"];
const CALCULADORAS_DIR = "calculadoras";

// limpiar slug → versión comparable
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/calculadora|guia|comparativa|hub|mexico|por|de|para/g, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// score de similitud simple
function similarity(a, b) {
  const aWords = a.split(" ");
  const bWords = b.split(" ");

  let match = 0;

  aWords.forEach((word) => {
    if (bWords.includes(word)) match++;
  });

  return match / Math.max(aWords.length, bWords.length);
}

// obtener slugs de calculadoras
function getCalculadoras() {
  const base = path.join(__dirname, CALCULADORAS_DIR);
  const dirs = fs.readdirSync(base);

  return dirs.map((dir) => {
    return {
      slug: dir,
      normalized: normalize(dir),
    };
  });
}

const calculadoras = getCalculadoras();

function findBestMatch(fileName) {
  const clean = normalize(fileName.replace(".html", ""));

  let best = null;
  let bestScore = 0;

  calculadoras.forEach((calc) => {
    const score = similarity(clean, calc.normalized);

    if (score > bestScore) {
      bestScore = score;
      best = calc.slug;
    }
  });

  return { best, bestScore };
}

function processFile(filePath, fileName) {
  let html = fs.readFileSync(filePath, "utf8");

  if (html.includes('rel="canonical"')) return;

  const { best, bestScore } = findBestMatch(fileName);

  if (!best || bestScore < 0.4) {
    console.log("⚠ sin match claro:", fileName);
    return;
  }

  const canonicalURL = `${BASE_URL}/calculadoras/${best}/`;

  const tag = `<link rel="canonical" href="${canonicalURL}">\n`;

  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>\n${tag}`);
    fs.writeFileSync(filePath, html, "utf8");

    console.log(`✔ ${fileName} → ${best} (${bestScore.toFixed(2)})`);
  }
}

function processDir(dir) {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) return;

  const files = fs.readdirSync(full);

  files.forEach((file) => {
    if (file.endsWith(".html")) {
      processFile(path.join(full, file), file);
    }
  });
}

// ejecutar
TARGET_DIRS.forEach(processDir);

console.log("🚀 canonical inteligente terminado");