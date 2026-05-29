// ============================================================
//  Capture d'écran full-page pour okamilink
//  Génère 3 vues par site : page entière, haut de page, mobile
//  Usage :  node capture-screenshots.mjs <url> [nom]
//  Ex   :   node capture-screenshots.mjs https://www.mysteria-ingenium.fr mysteria
// ============================================================

import puppeteer from "puppeteer";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

// ---- Réglages (modifiables) -------------------------------
const DESKTOP_WIDTH = 1440;   // largeur desktop (mets 1920 pour du Full HD)
const SCALE = 2;              // 2 = rendu net "rétina" pour écrans modernes
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 3 }; // ~iPhone
// -----------------------------------------------------------

const url = process.argv[2];
const name =
  process.argv[3] ||
  new URL(url).hostname.replace(/^www\./, "").split(".")[0];

if (!url) {
  console.error("Usage : node capture-screenshots.mjs <url> [nom]");
  process.exit(1);
}

const OUT_DIR = path.dirname(fileURLToPath(import.meta.url));

// Fait défiler toute la page pour déclencher le chargement différé (footer, images…)
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1000));
}

// Masque les bandeaux cookies / popups fixes pour des captures propres
async function dismissOverlays(page) {
  await page.evaluate(() => {
    document.querySelectorAll("body *").forEach((el) => {
      const s = getComputedStyle(el);
      if (s.position === "fixed" || s.position === "sticky") {
        const t = (el.innerText || "").toLowerCase();
        const c = (el.className || "").toString().toLowerCase();
        if (
          t.includes("cookie") ||
          t.includes("consent") ||
          t.includes("rgpd") ||
          t.includes("accepter") ||
          c.includes("popup") ||
          c.includes("modal") ||
          c.includes("cookie")
        ) {
          el.style.display = "none";
        }
      }
    });
  });
}

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  console.log(`\n▶  ${url}  (préfixe : ${name})`);

  // ---------- DESKTOP ----------
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
  );
  await page.setViewport({
    width: DESKTOP_WIDTH,
    height: 900,
    deviceScaleFactor: SCALE,
  });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await dismissOverlays(page);

  // Haut de page (zone visible)
  await page.screenshot({ path: path.join(OUT_DIR, `${name}-hero.png`) });

  // Page entière (après défilement pour tout charger, footer inclus)
  await autoScroll(page);
  await dismissOverlays(page);
  await page.screenshot({
    path: path.join(OUT_DIR, `${name}-fullpage.png`),
    fullPage: true,
  });
  console.log(`   ✓ ${name}-hero.png`);
  console.log(`   ✓ ${name}-fullpage.png`);

  // ---------- MOBILE ----------
  const m = await browser.newPage();
  await m.setUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
  );
  await m.setViewport({ ...MOBILE, isMobile: true, hasTouch: true });
  await m.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1500));
  await dismissOverlays(m);
  await autoScroll(m);
  await dismissOverlays(m);
  await m.screenshot({
    path: path.join(OUT_DIR, `${name}-mobile.png`),
    fullPage: true,
  });
  console.log(`   ✓ ${name}-mobile.png`);

  await browser.close();
  console.log(`\nTerminé → ${OUT_DIR}\n`);
})().catch((e) => {
  console.error("Erreur :", e.message);
  process.exit(1);
});
