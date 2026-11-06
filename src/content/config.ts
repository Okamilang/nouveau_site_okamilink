import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    coverImage: image().optional(),
    featured: z.boolean().default(false),
    url: z.string().optional(),
    osIcon: z.string().optional(),
    category: z.enum(['website', 'program']).default('website'),
    // Points clés factuels affichés sur l'accueil et l'étude de cas (valeur courte + libellé)
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    // Libellé du seuil final des pages programme (sinon « Besoin d'un outil sur-mesure ? »)
    ctaLabel: z.string().optional(),
    // Couleur de marque d'une application (programmes) : une seule teinte, utilisée avec parcimonie
    accent: z.string().optional(),
    // Résultat réel (chiffre mesuré ou mot du client) — affiché seulement s'il est renseigné
    outcome: z.object({ text: z.string(), source: z.string().optional() }).optional(),
    // Capture pleine page, affichée dans une fenêtre défilante en tête d'étude de cas
    fullpage: image().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
