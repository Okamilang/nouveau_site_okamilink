/**
 * Les trois sites vitrines de démonstration (entreprises fictives).
 * Utilisé par la page /vitrines, la section de l'accueil et le formulaire de contact.
 */
import type { ImageMetadata } from 'astro';

export interface Vitrine {
  slug: 'boulangerie' | 'restaurant' | 'barbier';
  name: string;
  trade: string;
  pitch: string;
  /** Ce que le site sait faire pour ce commerce (affiché en puces). */
  features: string[];
  /** Couleurs de la carte d'aperçu, pour annoncer l'identité de chaque démo. */
  tone: { bg: string; ink: string; accent: string };
}

export const vitrines: Vitrine[] = [
  {
    slug: 'boulangerie',
    name: 'Mie & Lumière',
    trade: 'Boulangerie-pâtisserie',
    pitch: 'Un site lumineux qui donne faim dès le matin, et qui fait commander pour le lendemain.',
    features: ['Ouvert / fermé en direct', 'Prochaine fournée annoncée', 'Click & collect', 'Carte de saison automatique'],
    tone: { bg: '#f6efe3', ink: '#2a1d14', accent: '#b5523a' },
  },
  {
    slug: 'restaurant',
    name: 'Osteria del Fumaiolo',
    trade: 'Restaurant italien',
    pitch: 'Une ambiance de soirée dès l’écran d’accueil, une carte qui met l’eau à la bouche, et la réservation sur plan de salle.',
    features: ['Réservation sur plan de salle', 'Carte illustrée', 'Plat du jour selon le jour', 'Places restantes ce soir'],
    tone: { bg: '#10201a', ink: '#f3ede2', accent: '#e2793a' },
  },
  {
    slug: 'barbier',
    name: 'Lame & Laiton',
    trade: 'Barbier',
    pitch: 'Un site au style affirmé, pensé pour le mobile : on choisit sa coupe, son barbier et son créneau en trois gestes.',
    features: ['Réservation en 3 étapes', 'Choix du barbier', 'Attente sans RDV en direct', 'Lookbook des coupes'],
    tone: { bg: '#0d0d0d', ink: '#ede6da', accent: '#c9a26a' },
  },
];

export const getVitrine = (slug: string) => vitrines.find((v) => v.slug === slug);

/* ─────────────────────────────────────────────
   Photos : src/assets/vitrines/<site>/<nom>.(png|jpg|jpeg|webp)
   Seul le nom compte : l'extension est libre. Une photo .webp/.jpg
   l'emporte sur l'image provisoire .png du même nom.
   ───────────────────────────────────────────── */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/vitrines/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true },
);

const priority = ['webp', 'jpg', 'jpeg', 'png'];

export function photo(site: Vitrine['slug'], name: string): ImageMetadata {
  const candidates = Object.keys(files)
    .filter((path) => {
      const file = path.split('/').pop() ?? '';
      return path.includes(`/vitrines/${site}/`) && file.replace(/\.[^.]+$/, '') === name;
    })
    .sort((a, b) => {
      const ext = (p: string) => priority.indexOf((p.split('.').pop() ?? '').toLowerCase());
      return ext(a) - ext(b);
    });
  if (!candidates.length) {
    throw new Error(`Photo manquante : src/assets/vitrines/${site}/${name}.png`);
  }
  return files[candidates[0]].default;
}
