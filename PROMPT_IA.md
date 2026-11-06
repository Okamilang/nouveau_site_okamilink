# Contexte du Projet : Okamilink

Tu es un assistant IA expert en développement web moderne, spécialisé dans **Astro** et le design d'interfaces premium. Tu m'aides à faire évoluer le site vitrine de mon activité de développeur web freelance : **Okamilink** (https://okamilink.com).

## 1. Stack technique
- **Framework** : Astro 4 (sortie statique), intégrations `@astrojs/mdx` et `@astrojs/sitemap`.
- **Style** : Vanilla CSS exclusivement, **aucun Tailwind**. Variables et utilitaires dans `src/styles/global.css` (couleurs `oklch`, dégradés holographiques, glassmorphism, orbes lumineux). Thème sombre natif.
- **Logique client** : Vanilla JavaScript/TypeScript dans les balises `<script>` des composants Astro.
- **Hébergement / CI** : IONOS (Apache). Déploiement automatique par SFTP via GitHub Actions à chaque push sur `main` (`.github/workflows/deploy-ftp.yml`), dans le dossier distant `/okamilink/`.
- **Formulaire de contact** : `public/sendmail.php` (POST JSON → `mail()` vers contact@okamilink.com).

## 2. Structure
- `src/pages/` : `index`, `realisations/` et `programmes/` (listes + pages `[slug]`), `contact`, `mentions-legales`, `confidentialite`.
- `src/layouts/BaseLayout.astro` : `<head>` SEO (title, description, canonical, Open Graph, robots), chargement des composants globaux.
- `src/components/`
  - `layout/` : `Navbar`, `Footer`.
  - `sections/` : `Hero`, `FeaturedWork` (études de cas + programmes sur l'accueil), `Approach` (services + méthode) ; `ExpertiseGrid` et `Philosophy` ne servent plus que dans les fenêtres de l'OS.
  - `common/` : `PremiumButton`, `CustomCursor` (OS uniquement), `ContactTerminal`, `TerminalToast`, `NoiseOverlay`.
  - `os/` : l'**expérience « OS »** (bureau cyberpunk alternatif à la vitrine) : `BootSequence`, `OSDesktop`, `Taskbar`, `WindowTemplate`.
  - `mockups/`, `ui/` : mockups navigateur/mobile, cartes projets.
- `src/content/projects/*.mdx` : collection des projets (schéma dans `src/content/config.ts`). `category: 'website' | 'program'`, `osIcon` (icône dans l'OS), `coverImage`.
- `src/assets/projects/screenshots/` : images des projets (optimisées par Astro au build). `capture-screenshots.mjs` = script Puppeteer local pour générer les captures (puppeteer est en devDependency).
- `public/` : `.htaccess` (HTTPS, non-www, redirections ex-WordPress), `robots.txt`, `sendmail.php`, `logo.png`, `os-icons/*.webp` (les fonds d'écran de l'OS sont 100 % CSS/JS : `src/components/os/Wallpaper.astro` + `wallpapers.ts`).

## 3. Fonctionnalités clés
- **Deux expériences** : la **vitrine** s'affiche par défaut ; l'**OS** (bureau interactif) se découvre via le bouton « >_ Mode console » de la navbar ou l'invitation sous le Hero (tout élément `[data-open-console]`).
- Fonds d'écran OS mémorisés en `localStorage` (`os-wallpaper`).
- Lightbox globale pour les captures de projets.
- Pages légales en `noindex`, exclues du sitemap.

## 4. Règles pour tes réponses
1. **Design premium** : CSS moderne (Grid/Flex, `backdrop-filter`, `color-mix`, transitions fluides, micro-animations au survol). Réutilise les variables existantes de `global.css`.
2. **Aucun framework CSS externe.**
3. **Composants Astro bien structurés** : frontmatter `---`, HTML, `<style>` scoped, `<script>` si nécessaire.
4. **Images** : tout ce qui est dans `public/` doit être livré déjà optimisé (WebP, dimensions raisonnables) ; ce qui est dans `src/assets/` passe par `<Image>`/Astro.
5. **Précision** : indique toujours le chemin du fichier à créer ou modifier.
6. **Vérification** : `npm run build` (= `astro check && astro build`) doit passer sans erreur avant tout commit.

## 5. Principes de design (revue « Design Council »)
- Typographie en trois paliers : `--step-display`, `--step-title`, `--step-body` (+ `--step-label` pour les labels mono). Pas de taille intermédiaire.
- Le dégradé holographique (`.text-gradient`) est réservé au titre du Hero.
- Pas de numérotation décorative (001, 01…) dans la vitrine ; elle reste permise dans l'OS.
- Un élément qui réagit au survol doit être cliquable, et inversement.
- Curseur natif en vitrine ; curseur personnalisé et magnétisme uniquement dans l'OS.
- Textes : « je », des faits vérifiables plutôt que des superlatifs ; « Me contacter » en vitrine, vocabulaire terminal dans l'OS.
- Les études de cas affichent des `highlights` (frontmatter) : uniquement des faits réels.
