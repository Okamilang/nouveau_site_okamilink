# Photos des 3 sites vitrines : prompts pour ChatGPT

Sites démo de la section « Vitrines » d'okamilink.com :

| Site | Métier | Dossier des images |
|---|---|---|
| **Mie & Lumière** | Boulangerie-pâtisserie | `src\assets\vitrines\boulangerie\` |
| **Osteria del Fumaiolo** | Restaurant italien (cuisine au feu de bois) | `src\assets\vitrines\restaurant\` |
| **Lame & Laiton** | Barbier | `src\assets\vitrines\barbier\` |

Chemin complet sur ton PC :
`D:\Travail\Okamilink\Site Web\Nouveau Site\okamilink\src\assets\vitrines\<dossier>\`

---

## Méthode

1. **Une conversation ChatGPT par site.** Le style reste cohérent d'une image à l'autre.
2. Envoie d'abord le **message de démarrage** du site. Il fixe le style et les règles de réalisme pour toute la conversation.
3. Envoie ensuite les prompts **un par un**, dans l'ordre.
4. Télécharge chaque image et **renomme-la exactement** comme indiqué (`hero.png`, `produit-flan.png`…).
5. Dépose-la dans le dossier du site. Elle **remplace** l'image provisoire du même nom.

À savoir :
- `.png`, `.jpg` ou `.webp` : les trois extensions marchent. Seul le **nom** compte.
- Pas besoin d'optimiser le poids : Astro convertit en WebP et redimensionne au build.
- Formats ChatGPT : **paysage 3:2** = 1536×1024, **portrait 2:3** = 1024×1536, **carré 1:1** = 1024×1024.

### Contrôle avant d'enregistrer

- Mains : **5 doigts par main**, articulations dans le bon sens, prise cohérente avec l'objet tenu.
- Aucun texte, logo ni filigrane dans l'image.
- Restaurant : aucun visage reconnaissable.
- Boulangerie : `croissant-cru` et `croissant-cuit` doivent avoir **exactement le même cadrage**. Les deux images se fondent l'une dans l'autre au défilement.

### Si le résultat ne va pas

| Problème | Message à envoyer à ChatGPT |
|---|---|
| Ça fait trop IA | `Too AI-looking. Make it indistinguishable from a real photograph: more natural texture and fine grain, less sharpening, less saturation, slightly more imperfect and real. Keep the same composition.` |
| Doigts ou membres bizarres | `The [left/right] hand has [six fingers / a twisted thumb]. Regenerate the same image with anatomically correct hands: exactly five fingers per hand, natural knuckles.` |
| Trop sombre ou trop clair | `Same image, but [brighter / darker] overall while keeping the same light direction and mood.` |
| Le style dérive au fil des images | Renvoie le message de démarrage, puis le prompt. |

---

## 1. Boulangerie : Mie & Lumière

Dossier : `src\assets\vitrines\boulangerie\`

### Message de démarrage (à envoyer en premier)

```
You are going to create a series of photographs for the website of "Mie & Lumière", a small artisan bakery-pâtisserie in a town in the Val-d'Oise, France. All images must look like they were shot the same morning by the same professional food photographer, for the bakery's own website.

Visual identity: warm, bright, honest morning light. Palette: flour white, cream, warm oak, wheat gold, deep caramelized crust brown, small touches of terracotta. No cold blue tones, no dark moody look.

Rules for every image in this conversation:
- Ultra-realistic professional photograph, indistinguishable from a real photo. Shot on a Fujifilm GFX 100S medium-format camera with prime lenses, natural light only.
- Real materials with honest wear: scarred wood, flour dust, crumbs, parchment with grease spots, handmade irregularities (uneven scoring, slightly different sizes and shapes).
- One main light source (window daylight) with physically coherent fall-off and real shadows. No studio flash look, no glow.
- True-to-life color, gentle contrast, natural blacks, fine grain, sharp focus on the subject with natural optical depth of field.
- Hands, when present: anatomically correct, exactly five fingers per hand, natural knuckles, short clean nails, flour on the skin, grip coherent with the object.
- Avoid: CGI or 3D render look, plastic or waxy food, glossy fake glaze, oversaturation, HDR, halos, over-sharpening, fake bokeh balls, perfect symmetry, text, letters, logos, watermarks, anything that looks AI-generated.

Confirm you understood, then wait for my first image request.
```

### Images

**1. `hero.png`** (paysage 3:2), plein écran en haut de la page
```
Image 1 — landscape 3:2 (1536×1024). Inside the working bakery at sunrise: rustic sourdough loaves and long tradition baguettes cooling on a worn oak rack and on a floured linen couche, a black steel deck oven softly out of focus in the background. A low golden window light comes from the left, with visible flour particles floating in the beam. Crackled crusts with deep caramelized "ears". Composition: bread fills the right two-thirds, calmer and darker negative space on the left third for a headline. 35mm lens, f/4, eye level.
```

**2. `croissant-cru.png`** (paysage 3:2), animation « Du pâton au four », état avant cuisson
```
Image 2 — landscape 3:2 (1536×1024). Three-quarter top view (about 60° from above) of a black, slightly warped baking tray on a floured marble counter, lined with parchment paper, holding 9 raw hand-rolled croissants after proofing: pale ivory dough, visible laminated layers, glossy with egg wash, slightly irregular shapes. A pastry brush and a small bowl of egg wash at the edge of the frame. Soft window light from the left. Keep the framing simple and centered: the next image must be identical except for the baking.
```

**3. `croissant-cuit.png`** (paysage 3:2), même animation, état après cuisson
```
Image 3 — keep EXACTLY the same framing, camera angle, tray, parchment, counter, props and light as image 2. Only change: the 9 croissants are now baked — deep golden-brown, puffed and flaky, crisp layers, a few flakes fallen on the parchment, slightly darker tips, natural irregular browning. Nothing else moves.
```

**4. `mains-boulanger.png`** (portrait 2:3), section savoir-faire
```
Image 4 — portrait 2:3 (1024×1536). Close-up of a baker's hands shaping a ball of sourdough on a floured wooden bench. Forearms in a rolled-up linen shirt, real skin with fine hairs, a small old burn mark and flour in the creases, exactly five fingers per hand, natural grip pressing into the dough. Side window light, shallow depth of field, background a soft blur of shelves and rattan proofing baskets. 85mm lens, f/2.8.
```

**Série produits (images 5 à 8)** : cartes du click & collect. Envoie d'abord cette consigne commune :
```
Images 5 to 8 are a product series with the same setup: square 1:1 (1024×1024), each product alone on the same raw linen cloth over an old oak table, seen at 45°, same soft window light from the left, plenty of space around the product, warm cream background falling slightly into shadow.
```

**5. `produit-tradition.png`** (carré 1:1)
```
Image 5 — three tradition baguettes, crusty, with open irregular scoring, one torn in half showing an airy cream crumb with irregular holes.
```

**6. `produit-levain.png`** (carré 1:1)
```
Image 6 — a round sourdough loaf, dark flour-dusted crust with a scored pattern, a thick slice cut and lying in front showing an open, glossy, irregular crumb, a few crumbs on the cloth.
```

**7. `produit-flan.png`** (carré 1:1)
```
Image 7 — a slice of tall Parisian flan pâtissier on a small ceramic plate: deeply caramelized, almost black top with natural spots, creamy yellow custard with tiny vanilla seeds, crisp pastry edge; the rest of the flan in its pan softly blurred behind.
```

**8. `produit-buche.png`** (carré 1:1), produit de saison (précommande de Noël)
```
Image 8 — a handmade Christmas yule log (bûche de Noël): chocolate ganache with a fork-textured bark pattern, a light dusting of icing sugar like snow, one end cut showing the sponge layers and cream, a small sprig of real rosemary. Slightly imperfect, clearly made by hand, not industrial.
```

---

## 2. Restaurant : Osteria del Fumaiolo

Dossier : `src\assets\vitrines\restaurant\`

### Message de démarrage (à envoyer en premier)

```
You are going to create a series of photographs for the website of "Osteria del Fumaiolo", a small Italian osteria with a wood-fired grill, in a town in the Val-d'Oise, France. All images must look like they were shot the same evening by the same professional food and interior photographer, for the restaurant's own website.

Visual identity: evening, intimate, warm and cinematic. Palette: deep bottle green, dark walnut wood, ivory linen, terracotta, glowing ember orange, candlelight. Low-key images with rich but readable shadows, never murky.

Rules for every image in this conversation:
- Ultra-realistic professional photograph, indistinguishable from a real photo. Shot on a Sony A7R V with prime lenses.
- Light: warm candle, tungsten or ember light as the main source, from one clear direction, with physically coherent fall-off and deep natural shadows. No flat studio light, no glow, no halos.
- Food must look freshly plated and real: light steam, sauces with a natural sheen, irregular handmade pasta, herbs slightly wilted by the heat, a few crumbs and drops on the table. Handmade off-white ceramic plates with irregular rims.
- People: only hands, or guests blurred in the background seen from behind or in profile. No recognizable faces.
- Hands, when present: anatomically correct, exactly five fingers per hand, natural knuckles, short nails, real skin texture.
- True-to-life color, natural blacks, fine low-light grain, sharp focus on the subject with natural optical depth of field.
- Avoid: CGI or 3D render look, plastic or glossy fake food, oversaturation, HDR, over-sharpening, fake bokeh balls, perfect symmetry, text, letters, logos, watermarks, anything that looks AI-generated.

Confirm you understood, then wait for my first image request.
```

### Images

**1. `hero.png`** (paysage 3:2), plein écran en haut de la page
```
Image 1 — landscape 3:2 (1536×1024). A wide, shallow ceramic bowl of fresh hand-cut tagliatelle al ragù on a dark walnut table: slow-cooked meat sauce clinging to the irregular ribbons, freshly grated Parmigiano falling like snow, a thin wisp of steam. Beside it: a glass of red wine catching the candlelight, a torn piece of bread, an ivory linen napkin. Low-key light from a candle and a warm lamp on the right, the background falling into deep green darkness with a few warm out-of-focus lights. Composition: dish on the right third, dark negative space on the left for a headline. 50mm lens, f/2.2, slightly above table height.
```

**2. `salle.png`** (paysage 3:2), section « La maison »
```
Image 2 — landscape 3:2 (1536×1024). The dining room in the evening, seen from the back of the room: about ten small walnut tables with ivory linen and candles in glass holders, bottle-green painted walls with old framed photographs, a wall of wine bottles, and an open kitchen at the back where the glow of the wood-fired grill and a chef's silhouette are visible. A few guests seated, blurred, seen from behind or in profile, no recognizable faces. Warm, lively but calm atmosphere. 24mm lens, f/2.8, real low-light grain.
```

**3. `chef-pasta.png`** (portrait 2:3), section savoir-faire (pâtes fraîches)
```
Image 3 — portrait 2:3 (1024×1536). Close-up of a chef's hands kneading a smooth yellow egg-pasta dough on a floured wooden board, a broken eggshell and a fork beside the flour well, the edge of a dark green apron visible. Exactly five fingers per hand, natural knuckles, short nails, real skin texture with flour in the creases and a small old kitchen burn scar. Side light from a window at dusk mixed with warm kitchen light. 85mm lens, f/2.8.
```

**Série plats (images 4 à 7)** : photos qui s'affichent au survol de la carte. Envoie d'abord cette consigne commune :
```
Images 4 to 7 are a dish series with the same setup: square 1:1 (1024×1024), each dish alone on the same dark walnut table, seen at 45°, warm side light from the left, dark green background falling into shadow, same handmade off-white ceramic plates.
```

**4. `plat-burrata.png`** (carré 1:1), antipasti
```
Image 4 — a burrata just opened, creamy stracciatella spilling out, heirloom tomatoes of different colors cut in wedges, torn basil, a thread of green olive oil, flakes of salt, and a slice of grilled bread with char marks.
```

**5. `plat-cacio-pepe.png`** (carré 1:1), primi
```
Image 5 — a twisted nest of tonnarelli cacio e pepe in a creamy, glossy pecorino emulsion, coarse cracked black pepper, a few pecorino shavings, a light wisp of steam.
```

**6. `plat-tagliata.png`** (carré 1:1), secondi au feu de bois
```
Image 6 — a tagliata di manzo straight from the wood-fired grill: sliced sirloin pink in the center with a dark charred crust and grill marks, on a worn wooden board, with rocket leaves, parmesan shavings, coarse salt and a few drops of balsamic. A faint glow of embers and a little smoke softly visible behind.
```

**7. `plat-tiramisu.png`** (carré 1:1), dolci
```
Image 7 — a generous portion of tiramisu on a plate: unevenly dusted cocoa powder, distinct layers of mascarpone cream and coffee-soaked savoiardi, a spoon resting with one bite taken, a few cocoa specks on the table, an espresso cup blurred behind.
```

---

## 3. Barbier : Lame & Laiton

Dossier : `src\assets\vitrines\barbier\`

### Message de démarrage (à envoyer en premier)

```
You are going to create a series of photographs for the website of "Lame & Laiton", a modern barbershop in a town in the Val-d'Oise, France. All images must look like they were shot the same day by the same professional portrait and lifestyle photographer, for the barbershop's own website.

Visual identity: urban, contrasted, premium but street. Palette: deep black, charcoal, matte black tiles, aged brass, bone-white towels, warm skin tones. Hard but controlled light: one strong tungsten or window source creating sculpted shadows (chiaroscuro), with small warm brass reflections.

Rules for every image in this conversation:
- Ultra-realistic professional photograph, indistinguishable from a real photo. Shot on a Canon EOS R5 with prime lenses.
- People: real men of different ages and backgrounds. Real skin with visible pores, stubble, fine lines, natural asymmetry and uneven tone; light professional retouching at most. Hair in individual strands, clean and believable fade transitions and hairlines. Tattoos look like real, slightly aged ink. Neither idealized nor uglified.
- Hands, when present: anatomically correct, exactly five fingers per hand, natural knuckles, grip coherent with the clippers, razor, comb or scissors.
- Real materials with wear: scratched leather and chrome, cut hair on capes and floor, used tools.
- True-to-life color, deep natural blacks, fine grain, sharp focus on the subject with natural optical depth of field.
- Avoid: CGI or 3D render look, plastic or waxy skin, airbrushing, beauty filter, magazine over-retouching, enlarged eyes, oversaturation, HDR, glow, halos, over-sharpening, fake bokeh balls, perfect symmetry, text, letters, logos, watermarks, anything that looks AI-generated.

Confirm you understood, then wait for my first image request.
```

### Images

**1. `hero.png`** (paysage 3:2), plein écran en haut de la page
```
Image 1 — landscape 3:2 (1536×1024). A barber finishing a skin fade with a straight razor on the neckline of a client seated in a vintage black leather barber chair, seen from behind and slightly to the side so the client's face is not visible. The barber's tattooed forearm and hands are in sharp focus: exactly five fingers per hand, a natural grip on the razor, the other hand gently stretching the skin. Fine cut hair on the black cape, a brass-framed mirror and warm bulb reflections in the dark background. Single hard tungsten light from above left, deep black shadows. Composition: action on the right half, dark empty space on the left for a big title. 50mm lens, f/2.5.
```

**2. `salon.png`** (paysage 3:2), section « Le salon »
```
Image 2 — landscape 3:2 (1536×1024). The empty barbershop in the evening, just before opening: three vintage black-and-chrome barber chairs facing round brass-framed mirrors, matte black hexagonal floor tiles, a dark wood counter with straight razors, combs, glass jars and a brass hot-towel steamer, neatly folded white towels, warm Edison bulbs. Real wear: small scratches on the chairs, a little cut hair on the floor near one chair. 24mm lens, f/4, low angle.
```

**3. `barbier-sami.png`** (portrait 2:3), carte du barbier « Sami » dans la réservation
```
Image 3 — portrait 2:3 (1024×1536). Environmental portrait of a barber in his late twenties: short black hair with a sharp fade, a well-groomed beard, a black work apron over a dark T-shirt, tattooed forearms. He stands with arms crossed next to a barber chair, calm and confident half-smile, looking at the camera. Single soft window light from the left, dark shop background. 85mm lens, f/2.
```

**4. `barbier-hugo.png`** (portrait 2:3), carte du barbier « Hugo » dans la réservation
```
Image 4 — portrait 2:3 (1024×1536). Environmental portrait of a barber in his forties: salt-and-pepper short hair combed back, a full grey-flecked beard, rolled-up white shirt sleeves and a brown leather apron. He holds scissors and a comb (exactly five fingers per hand) and leans on the wooden counter, friendly but serious expression, looking slightly off-camera. Same light and setting as image 3, so the two portraits look like a pair.
```

**Série coupes (images 5 à 8)** : galerie filtrable. Envoie d'abord cette consigne commune :
```
Images 5 to 8 are a series with the same setup: portrait 2:3 (1024×1536), a client seated in the barber chair just after the cut, black cape still on, photographed in the shop against the dark background, same hard side light from the left, real hair texture and visible hairline details. Each image shows a different man (different age and background).
```

**5. `coupe-degrade.png`** (portrait 2:3), filtre « Dégradé »
```
Image 5 — profile view of a man in his twenties with a clean skin fade: bald at the bottom, a smooth gradient up to short textured hair on top, a crisp line-up at the temple and around the ear, slight redness of freshly shaved skin.
```

**6. `coupe-barbe.png`** (portrait 2:3), filtre « Barbe »
```
Image 6 — three-quarter view of a man in his thirties with a thick sculpted beard: sharp cheek line, faded sides blending into the beard, neat moustache, a few stray hairs. The barber's hand holding a comb at the edge of the frame (exactly five fingers).
```

**7. `coupe-classique.png`** (portrait 2:3), filtre « Classique »
```
Image 7 — three-quarter view of a man in his fifties with a classic side part: short tapered sides, hair combed with a matte pomade, clean-shaven cheeks, looking calmly toward a mirror that stays out of frame.
```

**8. `coupe-texture.png`** (portrait 2:3), filtre « Texturé »
```
Image 8 — front three-quarter view of a man in his twenties with a textured French crop: short choppy fringe, messy matte texture on top, low taper on the sides.
```

---

## Récapitulatif des fichiers

```
src\assets\vitrines\
├── boulangerie\
│   ├── hero.png              (3:2)
│   ├── croissant-cru.png     (3:2)
│   ├── croissant-cuit.png    (3:2, même cadrage que croissant-cru)
│   ├── mains-boulanger.png   (2:3)
│   ├── produit-tradition.png (1:1)
│   ├── produit-levain.png    (1:1)
│   ├── produit-flan.png      (1:1)
│   └── produit-buche.png     (1:1)
├── restaurant\
│   ├── hero.png              (3:2)
│   ├── salle.png             (3:2)
│   ├── chef-pasta.png        (2:3)
│   ├── plat-burrata.png      (1:1)
│   ├── plat-cacio-pepe.png   (1:1)
│   ├── plat-tagliata.png     (1:1)
│   └── plat-tiramisu.png     (1:1)
└── barbier\
    ├── hero.png              (3:2)
    ├── salon.png             (3:2)
    ├── barbier-sami.png      (2:3)
    ├── barbier-hugo.png      (2:3)
    ├── coupe-degrade.png     (2:3)
    ├── coupe-barbe.png       (2:3)
    ├── coupe-classique.png   (2:3)
    └── coupe-texture.png     (2:3)
```

23 images au total. Tant qu'une image manque, le site affiche une image provisoire au même nom.
