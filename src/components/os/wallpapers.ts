/** Thèmes de fond d'écran de l'OS (rendus par Wallpaper.astro). */
export const WALLPAPERS = [
  { id: 'brass',   name: 'Laiton' },
  { id: 'circuit', name: 'Circuit' },
  { id: 'copper',  name: 'Cuivre' },
  { id: 'premium', name: 'Premium' },
  { id: 'holo',    name: 'Holo' },
  { id: 'teal',    name: 'Cyan' },
  { id: 'mono',    name: 'Mono' },
  { id: 'matrix',  name: 'Matrix' },
] as const;

export type WallpaperId = (typeof WALLPAPERS)[number]['id'];
export const DEFAULT_WALLPAPER: WallpaperId = 'brass';
