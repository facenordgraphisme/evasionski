export function textToBlocks(text: string): any[] {
  if (!text) return [];
  return text.split('\n\n').map((paragraph, index) => {
    const isHeading = paragraph.startsWith('### ') || 
                      paragraph.startsWith('## ') ||
                      paragraph.startsWith('• ') ||
                      paragraph.startsWith('Où ') || 
                      paragraph.startsWith('Quelles ') || 
                      paragraph.startsWith('Quels ') || 
                      paragraph.startsWith('Tarif') || 
                      paragraph.startsWith('Matériel') || 
                      paragraph.startsWith('Tenue') || 
                      paragraph.startsWith('Assurance') || 
                      paragraph.startsWith('Mon conseil') || 
                      paragraph.startsWith('Une journée type');
    
    if (isHeading) {
      const cleanText = paragraph.replace('### ', '').replace('## ', '').replace('• ', '');
      let style = 'h3';
      if (paragraph.startsWith('## ')) {
        style = 'h2';
      } else if (paragraph.startsWith('• ')) {
        style = 'normal'; // bullet styling
      }
      return {
        _key: `p-${index}`,
        _type: 'block',
        style: style,
        children: [{ _type: 'span', _key: `s-${index}`, text: cleanText }]
      };
    }
    
    return {
      _key: `p-${index}`,
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', _key: `s-${index}`, text: paragraph }]
    };
  });
}

// 1. Core Services & Trips Fallbacks
export const fallbackSejours: Record<string, any> = {
  "ski-de-randonnee-engagement-prive": {
    title: "Ski de randonnée en engagement privé",
    slug: "ski-de-randonnee-engagement-prive",
    activityType: "ski-de-randonnee-engagement-prive",
    massif: "Hautes-Alpes / Ubaye / Queyras / Écrins / Norvège",
    level: "debutant",
    season: "hiver",
    duration: "À la carte",
    basePrice: "400€/jour",
    priceEncadrement: "400€/jour",
    priceFraisSejour: "450€ à 480€/jour selon groupe",
    image: "/images/rebranded/ski-de-randonnee-engagement-prive/img_0.webp",
    intro: textToBlocks(`## Ski de randonnée à la carte - Votre expérience 100% sur mesure

L’ aventure à ski de randonnée en formule privée aussi appelé « engagement » c’est le top pour partir en toute sérénité. Avec un moniteur rien que pour vous, tout devient simple et fluide : on défini ensemble vos envies, vos dates et votre destination, et on crée une expérience sur mesure sans aucune contrainte.`),
    description: `## Ski de randonnée à la carte - Votre expérience 100% sur mesure`,
    essentiel: textToBlocks(`• **de 1 à 4 personnes : 400€/jour (À diviser entre tous les participants)pour 5 personnes : 450€/jour (À diviser)pour 6 à 8 personnes : 480€/jour (À diviser)**

• **Embrunais, clarée, écrins, ubaye ainsi que le queyras et la Norvège**

• **Skieurs : débrouillés à expertseffort : accessible à intensetout est possible, laissez libre cours à vos envies**

• **minibus 9 places avec porte skis à disposition pour une logistique simplifiée**

• **gîte en vallée, refuge d'altitude, cabane de montagne, bivouac sous tente, hôtel de luxe, pension complète ou autogestion... on défini ensemble vos besoins et les options**

Pour profiter pleinement de votre engagement privé ski de randonnée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    programme: textToBlocks(``),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent). Une 4ème couche de secours peut être utile (ex : doudoune sans manches). Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### Prêt pour une sortie ou un séjour sur mesure ? Dites-moi ce qui vous fait rêver et on construit votre aventure ensemble.

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_1.webp",
                  "alt": "Ski de randonnée en engagement privé"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_2.jpg",
                  "alt": "Ski de randonnée en engagement privé"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_3.jpg",
                  "alt": "Ski de randonnée en engagement privé"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_4.jpg",
                  "alt": "Ski de randonnée en engagement privé"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_5.png",
                  "alt": "Ski de randonnée en engagement privé"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_6.jpg",
                  "alt": "Ski de randonnée en engagement privé"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-engagement-prive/img_7.jpg",
                  "alt": "Ski de randonnée en engagement privé"
          }
  ],
    faqs: [
    {
        "question": "Où peut on organiser une sortie ou un raid à ski ?",
        "answer": "Je connais parfaitement les massifs des Hautes-Alpes, de l’Ubaye, du Queyras, des Écrins, et je peux aussi vous emmener plus loin si vous le souhaitez, y compris à l’étranger. On discute ensemble de vos envies, et je vous propose les meilleures options pour profiter de la poudreuse et des plus beaux paysages."
    },
    {
        "question": "Quelles sont les possibilités de sorties avec ce type de formule ?",
        "answer": "Elles sont illimitées, on est complètement libre :Une journée en ski de rando ou freerando pour débuter en ski de randonnée ou concrétiser un objectif de sommet que vous avez en tête.Un raid en étoile pour la facilité de logisitique, ou en itinérance de plusieurs jours pour une aventure plus engagée,Un séjour freerando ou ski de rando avec un camp de base en fond de vallée pour plus de mobilité et d’exploration.Ou même un programme entièrement personnalisé sur mesure."
    },
    {
        "question": "Quels sont les avantages de l'engagement par rapport à une sortie collective ?",
        "answer": "L’ exclusivité! En privé, vous choisissez les dates, la destination et le type de sortie. Je vous accompagne uniquement vous et votre groupe, ce qui permet d’être flexible, de progresser plus vite grâce aux conseils personnalisés, et de vivre une expérience plus personnalisée et conviviale, en famille, entre amis ou en couple.\n\nJe connais parfaitement les massifs des Hautes-Alpes, de l’Ubaye, du Queyras, des Écrins, et je peux aussi vous emmener plus loin si vous le souhaitez, y compris à l’étranger. On discute ensemble de vos envies, et je vous propose les meilleures options pour profiter de la poudreuse et des plus beaux paysages."
    }
]
  },
  "ski-randonnee-hautes-alpes-journee": {
    title: "Ski de randonnée",
    slug: "ski-randonnee-hautes-alpes-journee",
    activityType: "ski-randonnee-hautes-alpes-journee",
    massif: "Queyras / Ubaye / Embrunais / Écrins",
    level: "intermediaire",
    season: "hiver",
    duration: "1 jour",
    basePrice: "95€",
    priceEncadrement: "95€/pers",
    priceFraisSejour: "",
    image: "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_0.webp",
    intro: textToBlocks(`## Ski de randonnée dans les Alpes - Une aventure à la journée

La journée encadrée en ski de randonnée est l’aventure accessible par excellence car elle permet s’immerger pleinement en montagne, sans contrainte logistique. Pas besoin de refuge ni de sac trop lourd : une bonne volonté suffit pour vivre un moment unique en ski dans la poudreuse.`),
    description: `## Ski de randonnée dans les Alpes - Une aventure à la journée`,
    essentiel: textToBlocks(`• **Tarif : 95€ / persen formule collective**

• **skieurs : débrouillés-intermédiaireseffort : modéréUn rythme équilibré, entre 700 et 1 000 m de dénivelé, pour allier effort et plaisir de la glisse**

• **Terrains préservés des Hautes-Alpes : sorties dans le Queyras, l’Ubaye ou l’Embrunais, loin des domaines skiables, dans un cadre exceptionnel**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptionlogistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et une journée sans contraintes.**

• **Une journée accessible, Parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montées...).**`),
    programme: textToBlocks(`### Une journée type en ski de randonnée encadrée

Envie de vivre une vraie journée d’aventure en montagne ? Voici comment se déroule une sortie encadrée en ski de randonnée dans les Hautes-Alpes, entre apprentissage, paysages grandioses et plaisir de la glisse.8h30 – Rendez-vous à Baratier : Le départ se fait depuis l’aire de covoiturage, au rond point des Orres. Facile d’accès et pratique pour tous. (Point GPS ci-dessous). Vous arrivez en train ? On vient vous récupérer à la gare. Il suffit de réserver votre sortie et de nous prévenir par e-mail — on s’occupe du reste.Transport sur le lieu de départ : À bord de notre minibus, on vous emmène au départ de l’itinéraire du jour, choisi en fonction des conditions météo et nivologiques.Brief matériel & sécurité : Avant de chausser les skis, on vérifie ensemble l’équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.Montée en peaux : En route pour l’ascension ! On progresse à votre rythme, avec des conseils techniques pour mieux gérer l’effort, les conversions et la lecture du terrain.Pique-nique en altitude : Une pause bien méritée au sommet ou sur une crête avec vue panoramique. Le moment parfait pour souffler… et s’émerveiller.Descente plaisir : On vous accompagne aussi dans la descente avec des astuces pour améliorer votre ski en neige naturelle, en toute sécurité.Retour entre 16h et 17h : Retour en vallée, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.Cette sortie est idéale pour découvrir le ski de randonnée dans les Alpes du Sud, progresser techniquement, tester son matériel, et vivre une immersion en montagne loin des pistes. Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux..

Pour profiter pleinement de votre journée de ski de randonnée encadrée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent). Une 4ème couche de secours peut être utile (ex : doudoune sans manches). Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### rÉserver une date

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_1.webp",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_2.webp",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_3.jpg",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_4.jpg",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_5.webp",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_6.jpg",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_7.jpg",
                  "alt": "Ski de randonnée"
          }
  ],
    faqs: [
    {
        "question": "Quel est l’intérêt du ski de randonnée à la journée ?",
        "answer": "C’est le format idéal pour progresser techniquement et passer un moment fort en nature.Vous partez léger, vous revenez dans la journée, avec des images plein la tête."
    },
    {
        "question": "Où se déroulent les sorties à la journée ?",
        "answer": "Les itinéraires se situent au sud des Alpes françaises dans les Hautes-Alpes, au cœur de massifs exceptionnels comme le Queyras, l’ Ubaye, l’ Embrunais mais encore les Écrins et la Clarée.Des lieux sauvages, peu fréquentés, parfaits pour la randonnée à ski."
    },
    {
        "question": "À qui s’adressent ces sorties ?",
        "answer": "À tout le monde : débutant curieux, skieur occasionnel ou pratiquant confirmé. Toni adapte l’itinéraire à votre niveau et à votre forme du moment (évaluer votre niveau)."
    },
    {
        "question": "Qu’est-ce qu’on apprend pendant une journée de ski de rando ?",
        "answer": "Vous découvrez comment utiliser le matériel, les différentes techniques de montées ainsi que la gestion de l’effort en lisant le terrain .Vous progressez aussi sur la sécurité en montagne, l’utilisation du matériel, et bien sûr… vous profitez de conseils techniques pour de belles descentes en neige fraiche."
    },
    {
        "question": "Comment est l' ambiance pendant la sortie ?",
        "answer": "Une ambiance conviviale et détendue.Avec Toni, on partage l’effort, la neige et les sourires. Le groupe avance ensemble, en confiance, entre échanges techniques et plaisir de la montagne."
    },
    {
        "question": "Et pour se loger ?",
        "answer": "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres ou encore le gîte l’Edelweiss à Abriès, tout près des départs de course.Des lieux simples, accueillants, et bien placés pour profiter pleinement du séjour."
    }
]
  },
  "ski-hors-piste-station-hautes-alpes": {
    title: "Freerando et ski hors-piste",
    slug: "ski-hors-piste-station-hautes-alpes",
    activityType: "ski-hors-piste-station-hautes-alpes",
    massif: "Les Orres / Crévoux / Vars",
    level: "confirme",
    season: "hiver",
    duration: "1 jour",
    basePrice: "95€",
    priceEncadrement: "95€/pers",
    priceFraisSejour: "",
    image: "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_0.webp",
    intro: textToBlocks(`## Freerando dans les Alpes - Une aventure à la journée

La freerando est la fusion du freeride et du ski de randonnée. Au départ des remontées mécaniques et avec seulement 400 à 700 m de dénivelé positif en peaux de phoque, on accède à des zones hors-piste éloignées et peu fréquentées, peu ou pas tracées et souvent en neige poudreuse. Les secteurs des Orres, de Crévoux sont particulièrement bien fournis en itinéraires de ski de rando et freerando de quaité et souvent peu tracés.`),
    description: `## Freerando dans les Alpes - Une aventure à la journée`,
    essentiel: textToBlocks(`• **tarif : 95€ / persen formule collective**

• **skieurs : confirmés effort : accessibleUn rythme équilibré, entre 400 et 700 m de dénivelé, pour 1600m de descente loin des itinéraires classiques surfréquentés**

• **Terrains préservés des Hautes-Alpes : les stations de crevoux, vars et les orres regorgent de spots sauvages**

• **Accès rapide à la poudreuse via les remontées mécaniques et de courtes approches Parfait pour les skieurs confirmés à experts, que ce soit pour apprendre, progresser ou simplement en profiter à fond.**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptionlogistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et une journée sans contraintes.**`),
    programme: textToBlocks(`### Une jounée type en ski hors piste et freerando

Envie de vivre une vraie journée d’aventure en montagne ? Voici comment se déroule une sortie encadrée en ski hors piste et freerando dans les Hautes-Alpes, entre apprentissage, paysages grandioses et plaisir de la glisse.8h30 – Rendez-vous à Baratier : Le départ se fait depuis l’aire de covoiturage, au rond point des Orres. Facile d’accès et pratique pour tous. (Point GPS ci-dessous). Vous arrivez en train ? On vient vous récupérer à la gare. Il suffit de réserver votre sortie et de nous prévenir par e-mail — on s’occupe du reste.Transport sur le lieu de départ : À bord de notre minibus, on vous emmène au départ de la station du jour selon les conditions nivo et météo du moment.Brief matériel & sécurité : Avant de chausser les skis, on vérifie ensemble l’équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables (freerando)… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.Premier run : Depuis le sommet des remontées mécaniques on fait une première descente en hors piste.Second run : Après une « courte » montée en peau de phoque (~500/700m D+) on pique nique au sommet avec vue imprenable. Et on fini par une descente plaisir de 1000m D- ponctuée de quelques conseils pour améliorer votre ski en toute neige tout terrain.Retour entre 16h et 17h : Retour en vallée, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.Cette sortie est idéale pour découvrir le ski hors piste et freerando dans les Alpes du Sud, progresser techniquement, tester son matériel, et vivre une immersion en montagne . Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux..

Pour profiter pleinement de votre journée de freerando et hors-piste encadrée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_1.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_2.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_3.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_4.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_5.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_6.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_7.webp",
                  "alt": "Freerando et ski hors-piste"
          }
  ],
    faqs: [
    {
        "question": "A qui s'adresse la freerando ?",
        "answer": "C’est l’idéal pour les skieurs confirmés en quête de sensations fortes mais n’ayant pas les capacités ou l’envie de faire de longues ascensions. C’est aussi une belle porte d’entrée vers la pratique du ski de randonnée classique en terrain naturel."
    },
    {
        "question": "Quels sont les avantages ?",
        "answer": "Accès rapide aux pentes viergesMoins d’effort en montée, plus de descentesEncadrement professionnel pour skier en sécuritéTransport en minibus  Format parfait pour une journée intense ou un week-end entre passionnés"
    },
    {
        "question": "Où se déroulent ces sorties ?",
        "answer": "Dans les stations des Hautes-Alpes : Les Orres, Vars, Crévoux  ou encore Ceillac ainsi qu’ Abriès. Toni vous guide vers les meilleurs itinéraires de ski hors piste et freerando selon les conditions, votre niveau et votre forme…"
    },
    {
        "question": "Et pour se loger ?",
        "answer": "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres ou encore le gîte l’Edelweiss à Abriès, tout près des départs de course.Des lieux simples, accueillants, et bien placés pour profiter pleinement du séjour."
    }
]
  },
  "stage-de-ski-freerando-les-orres-crevoux": {
    title: "Stage ski de rando / freerando - Les Orres -Crévoux",
    slug: "stage-de-ski-freerando-les-orres-crevoux",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Embrunais / Parpaillon",
    level: "intermediaire",
    season: "hiver",
    duration: "3 jours",
    basePrice: "380€",
    priceEncadrement: "240€/pers",
    priceFraisSejour: "140€/pers",
    image: "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_0.webp",
    intro: textToBlocks(`## Stage ski de randonnée et freerando - Exploration des Orres et de Crévoux

La freerando est la fusion du freeride et du ski de randonnée. Au départ des remontées mécaniques et avec seulement 400 à 700 m de dénivelé positif en peaux de phoque, on accède à des zones hors-piste éloignées et peu fréquentées, peu ou pas tracées et souvent en neige poudreuse. Les secteurs des Orres, de Crévoux sont particulièrement bien fournis en itinéraires de ski de rando et freerando de qualité et souvent peu tracés. L’aupillon, Costa Ruenda ou encore Le Méale (pour ne citer qu’eux) n’ont jamais été aussi proches de vos spatules.`),
    description: `## Stage ski de randonnée et freerando - Exploration des Orres et de Crévoux`,
    essentiel: textToBlocks(`• **tarif : 295€ / persen formule collectivedépart assuré à 3 inscrits**

• **skieurs : intermédiaires /  confirmés effort : accessible / modéréUn rythme équilibré, entre 400 et 700 m de dénivelé, pour 1600m de descente loin des itinéraires classiques surfréquentés**

• **Terrains préservés des Hautes-Alpes : les stations de crevoux et les orres regorgent de spots sauvages et d'itinéraires grand ski.**

• **Accès rapide à la poudreuse via les remontées mécaniques (forfait "rando") et de courtes approches Parfait pour les skieurs confirmés à experts, que ce soit pour apprendre, progresser ou simplement en profiter à fond.**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptionlogistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et des journées sans contraintes.**`),
    programme: textToBlocks(`### Une jounée type en ski hors piste et freerando

Envie de découvrir les meilleurs spots de ski de rando et freerando des Orres et de Crévoux dans les Hautes-Alpes, voici comment se déroule les stage « ski de randonnée et freerando » de 3 jours.8h45 – Rendez-vous aux Orres :  directement sur le front de neige 1650 devant les caisses de forfait.Brief matériel & sécurité : Avant de chausser les skis, on vérifie ensemble l’équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables (freerando)… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.Premier run : Depuis le sommet des remontées mécaniques on fait une première descente en hors piste.Second run : Après une « courte » montée en peau de phoque (~500/700m D+) on pique nique au sommet avec vue imprenable. Et on fini par une descente plaisir de 1000m D- ponctuée de quelques conseils pour améliorer votre ski en toute neige tout terrain.Retour entre 15h30 et 17h : Retour en station, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.Ce stage est idéal pour découvrir le ski de randonnée et la freerando dans les stations des Alpes du Sud : Crévoux et Les Orres, progresser techniquement, tester son matériel, et vivre une immersion en montagne . Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux.

Pour profiter pleinement de votre stage ski de rando et freerando, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixations (IMPÉRATIFS)Chaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_1.jpg",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_2.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_3.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_4.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_5.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_6.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_7.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          }
  ],
    faqs: [
    {
        "question": "A qui s'adresse la freerando ?",
        "answer": "C’est l’idéal pour les skieurs confirmés et freerideurs en quête de sensations fortes mais n’ayant pas les capacités ou l’envie de faire de longues ascensions. C’est aussi une belle porte d’entrée vers la pratique du ski de randonnée classique en terrain naturel."
    },
    {
        "question": "Quels sont les avantages ?",
        "answer": "Accès rapide aux pentes viergesMoins d’effort en montée, plus de descentesEncadrement professionnel pour skier en sécuritéTransport en minibus  Format de 3 jours de ski et d’exploration pour plus de plaisir"
    },
    {
        "question": "Où se déroulent ces sorties ?",
        "answer": "Dans les stations des Hautes-Alpes : Crévoux et Les Orres. Toni vous guide vers les meilleurs itinéraires de ski hors piste et freerando selon les conditions, votre niveau et votre forme…"
    },
    {
        "question": "Et pour se loger ?",
        "answer": "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres .Des lieux simples, accueillants, et bien placés pour profiter pleinement du séjour."
    }
]
  },
  "ski-de-randonnee-queyras-decouverte": {
    title: "Queyras en ski de randonnée",
    slug: "ski-de-randonnee-queyras-decouverte",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Queyras",
    level: "intermediaire",
    season: "hiver",
    duration: "5 jours",
    basePrice: "620€",
    priceEncadrement: "400€/pers",
    priceFraisSejour: "220€/pers",
    image: "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_0.jpg",
    intro: textToBlocks(`## Le Queyras en ski de randonnée - Vue sur le Viso

Le Queyras est l’un des massifs les plus sauvages, préservés et ensoleillé des Alpes françaises. C’est un terrain parfait pour un séjour de ski de randonnée authentique et dépaysant. A l’aide de nos peaux de phoques nous partirons explorer les moindres recoins de ce massif exceptionnel.`),
    description: `## Le Queyras en ski de randonnée - Vue sur le Viso`,
    essentiel: textToBlocks(`• **tarif : 870€ / pers ( encadrement + hébergement  pension complète)**

• **Parc Naturel Régional du Queyras, hautes-alpes**

• **skieurs : intermédiaires & confirméseffort : modéréUn rythme équilibré, entre 800 et 1 400 m de dénivelé, pour allier effort, plaisir de la glisse et temps de récupération**

• **Hébergement en pension complète à abriès au gîte l'edelweiss : confort, convivialité et repas montagnards**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) logistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et un séjour sans contraintes**`),
    programme: textToBlocks(`### Programme type Séjour Queyras en Ski de Randonnée

Le Queyras à ski de rando : sauvage, lumineux, inoubliable. 5 jours de ski au cœur du massif.Accueil et installation : Arrivée au gîte L’ Edelweiss à Abriès à partir de 16h30 le dimanche .Soirée libre au gîte, dîner inclus, nuit en chambre partagée.Jour 1 à 5 (lundi > vendredi) : Ski de randonnée dans le massif du QueyrasDes sorties à la journée dans des vallées emblématiques du Queyras : vallée d’Agnel, Valpreveyre , Arvieux, ou encore Soulier.Une progression technique encadrée :Techniques de montée (conversion, rythme, choix de trace)Techniques de descente hors-pisteGestion de l’effort et lecture du terrainDes ateliers pédagogiques intégrés aux journées :Lecture de carte, utilisation de la boussole et orientation GPSAnalyse du BERA, lecture du manteau neigeuxExercices de recherche DVA et de mise en situation de secours avalancheDes briefings et débriefings quotidiens, dans une ambiance conviviale, avec des retours personnalisés et des échanges collectifs.Vie au gîte :Chaque soir, retour au gîte L’edelweiss pour une douche chaude, un repas maison partagé, et un bon moment d’échange.Ambiance simple, chaleureuse, idéale pour se reposer et profiter du groupe.Les sorties sont adaptées chaque jour en fonction des conditions nivo-météo, du groupe, et des objectifs pédagogiques.L’objectif : progresser à son rythme dans un cadre sécurisé, tout en profitant pleinement de la beauté du massif du Queyras.Dispersion du groupe le vendredi en début d’après-midi, après une belle semaine partagée, les jambes sollicitées… et l’envie de revenir déjà bien présente.

Pour profiter pleinement de votre séjour dans le Queyras en ski de randonnée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Minimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L’ hébergement en pension complète au gîte l’ Edelweiss (p’tit déj, pique nique et dîner)Le transport en minibus sur le départ des itinéraires et durant tout le séjourMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le transport jusqu’au gîte depuis votre domicile (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_1.webp",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_2.webp",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_3.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_4.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_5.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_6.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_7.jpg",
                  "alt": "Queyras en ski de randonnée"
          }
  ],
    faqs: [
    {
        "question": "Quel est le point de départ du séjour Queyras en ski de randonnée ?",
        "answer": "Le Gîte l’Edelweiss dans le village d’Abriès, niché au fond de la vallée du Guil, est notre camp de base. Chaque jour, nous partons explorer de nouveaux itinéraires, selon les conditions et l’inspiration du jour. Un minibus 9 places est à disposition pour les déplacements durant tout le séjour."
    },
    {
        "question": "À qui s’adresse ce séjour découverte du Queyras en ski ?",
        "answer": "Ce séjour s’adresse aux skieurs ayant déjà une petite expérience en ski de randonnée et une bonne forme physique. L’objectif : découvrir le Queyras en ski de randonnée par des itinéraires variés, dans une ambiance conviviale."
    }
]
  },
  "ski-de-randonnee-en-claree": {
    title: "Raid à ski en Clarée",
    slug: "ski-de-randonnee-en-claree",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Cerces / Clarée",
    level: "intermediaire",
    season: "hiver",
    duration: "3 jours",
    basePrice: "390€",
    priceEncadrement: "260€/pers",
    priceFraisSejour: "130€/pers",
    image: "/images/rebranded/ski-de-randonnee-en-claree/img_0.jpg",
    intro: textToBlocks(`## Les Cerces – Raid à ski de randonnée dans la Clarée

La vallée de la Clarée offre un terrain parfait pour un  raid à ski de randonnée. Sauvage et préservée, elle permet d’évoluer sur des itinéraires alpins variés et propres à cette vallée. Pointes rocheuses acérées, combe surplombées de crêtes minérales et vallons vierges de toutes traces.`),
    description: `## Les Cerces – Raid à ski de randonnée dans la Clarée`,
    essentiel: textToBlocks(`• **tairf : 486€/pers en pension complète3 jours complets de ski, en étoile (au départ du même refuge)**

• **MAssif des cerces, vallée de la clarée**

• **skieurs : confirmés  effort : soutenudénivelés compris entre 1000 et 1 500 m, avec passages obligatoires et points de non-retour.**

• **Hébergement en pension complète au refuge de laval : confort, convivialité et repas montagnards**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) si nécessaire.**`),
    programme: textToBlocks(`### Programme type raid à ski en Clarée (3 jours)

La Claréé à ski, entre Cerces et Mont Thabor l’idéal pour un raid en ski de randonnée.Jour 1 – Rendez-vous et montée au refuge :Accueuil des participants au Pont de l’Alpe (Monêtier-les-Bains) vers 8h00.Présentation du séjour,briefing sécurité et vérification du matériel personnel et de secours.Montée au refuge de Laval par le Crête de la Ponsonnière, le col du Chardonnet ou le col des Béraudes selon les conditions.Installation au refuge, repas chaud et nuit en dortoir.Jour 2 – Journée de ski en étoileSki de randonnée à la journée dans les environs du refuge :Possibles sommets : Roche de chardonnet, Roche Château, ou le trou de la Crête de Moutouze selon conditions et l’état de forme du groupe.Travail technique : rythme, conversions, lecture de terrain et recherche DVA.Pédagogie sur la nivologie, orientation et sécurité en montagne.Retour au refuge en fin d’après-midi, temps calme, dîner et nuitée.Jour 3 – Dernier sommet et retour au parkingDépart matinal pour une dernière sortie, par exemple vers le col du Chardonnet ou la Crête de la Ponsonnière.Derniers conseils techniques et descente vers le Pont de l’Alpe.Fin du raid et dispersion du groupe en début d’après-midi, après trois jours d’aventure au cœur du massif des Cerces, avec de beaux sommets, du ski, de la neige… et de chouettes souvenirs en tête.

Pour profiter pleinement de votre raid en ski de randonnée en Clarée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Minimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pour le refuge :

Boules Quies fortement conseilléesPetit nécessaire de toilettes (un bout de savon, une brosse à dent, une petite serviette microfibre ect…)Batterie externe si pas d’électricité disponible sur placeLampe frontale avec lumière rouge (dérangement des autres fortement réduit)

### 5 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 6 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 7 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L’ hébergement en pension complète en refuge (p’tit déj, pique nique et dîner)Matériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le pique nique du premier jourLe transport jusqu’au départ du raid depuis votre domicile (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_1.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_2.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_3.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_4.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_5.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_6.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_7.jpg",
                  "alt": "Raid à ski en Clarée"
          }
  ],
    faqs: [
    {
        "question": "Quel est le niveau requis pour ce raid à ski en Clarée ?",
        "answer": "Ce raid en ski de rando s’adresse à des skieurs confirmés et en très bonne forme physique. Les étapes sont peu modulables et les itinéraires de replis difficilement envisageables."
    },
    {
        "question": "Comment se déroule l’hébergement pendant le raid à ski  en Claréé?",
        "answer": "Les nuits se font en refuge gardé confortable, en pension complète. Pas de portage lourd : vous évoluez sans autonomie, avec tout le confort nécessaire en altitude. Du grand ski de rando avec un sac léger.\n\nCe raid en ski de rando s’adresse à des skieurs confirmés et en très bonne forme physique. Les étapes sont peu modulables et les itinéraires de replis difficilement envisageables."
    }
]
  },
  "raid-ski-randonnee-ubaye": {
    title: "Ski de randonnée en Ubaye",
    slug: "raid-ski-randonnee-ubaye",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Ubaye",
    level: "confirme",
    season: "hiver",
    duration: "3 jours",
    basePrice: "410€",
    priceEncadrement: "270€/pers",
    priceFraisSejour: "140€/pers",
    image: "/images/rebranded/raid-ski-randonnee-ubaye/img_0.jpg",
    intro: textToBlocks(`## Raid à ski en Ubaye  – Glissade dans les Alpes du Sud

L’Ubaye est un massif sauvage et peu fréquenté, idéal pour un raid à ski de randonnée de 3 jours. Ses vallées isolées et ses cols d’altitude offrent une expérience alpine authentique, loin des foules et au cœur des Alpes du Sud.`),
    description: `## Raid à ski en Ubaye  – Glissade dans les Alpes du Sud`,
    essentiel: textToBlocks(`• **tarif : 330€ / pers (hors hébergement)3 jours complet de ski de rando**

• **Vallée de l' Ubaye à la frontière des Hautes-Alpes et de l'Italie**

• **skieurs : intermédiaires & confirmés effort : modéréDénivelés compris entre 800 et 1200m, pour un effort maitrisé  et du ski plaisir**

• **hébergement en pension complète au refuge de Maljasset (ou autre selon conditions)**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptiontransport en minibus depuis guillestre**`),
    programme: textToBlocks(`### Programme type Raid à ski en Ubaye

Ski de rando en Ubaye : 3 jours de déconnection dans les Alpes du Sud.Jour 1 : Direction le refuge de MaljassetRendez-vous à 8h00 au parking Intermarché Hall 2 de Guillestre Présentation du séjour, vérification du matériel de ski et de secoursBrief sécurité et rappel des consignes pour la progression en groupe Première rando au Col de Vars, par le Vallon du Crachet Ou par la Grande CombeInstallation au refuge en fin d’après midiJour 2 – Sommets autour du refugePetit-déjeuner matinal et départ pour une journée en étoile autour du refugeSommets ou cols envisagés selon les conditions :L’AlpetPointe de Basse Mary Col Girardin selon les conditionsEn chemin :Ateliers techniques en montée (conversion, rythme) et en descenteLecture du terrain et gestion du risqueÉventuellement, exercices de recherche DVARetour et deuxième nuit au refugeJour 3 – Rando et retour au parkingDernières randonnée dans un itinéraire et décor sauvageArrivée au parking en début ou milieu d’après-midiDispersion du groupe après trois jours d’aventure partagée, de belles traces en montagne et des images plein la tête.

Pour profiter pleinement de votre raid dans l’Ubaye en ski de rando, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Minimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pour le refuge :

Boules Quies fortement conseilléesPetit nécessaire de toilettes (un bout de savon, une brosse à dent, une petite serviette microfibre ect…)Batterie externe si pas d’électricité disponible sur placeLampe frontale avec lumière rouge (dérangement des autres fortement réduit)

### 5 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 6 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 7 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L’ hébergement en pension complète en refuge (p’tit déj, pique nique et dîner)Matériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le pique nique du premier jourLe transport jusqu’au départ du raid depuis votre domicile (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_1.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_2.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_3.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_4.webp",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_5.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_6.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_7.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          }
  ],
    faqs: [
    {
        "question": "À qui s’adresse ce raid de 3 jours ?",
        "answer": "Ce raid à ski en Ubaye s’adresse aux skieurs débrouillés et confirmés, à l’aise en montée comme en descente, avec une bonne condition physique. Pour vivre l’aventure pleinement une première expérience en ski de rando est recommandée."
    },
    {
        "question": "Comment se déroule le raid à ski ?",
        "answer": "Vous évoluez en petit groupe, accompagné par un professionnel diplômé. L’itinéraire s’adapte aux conditions météo et nivologiques, avec des étapes d’environ 800 à 1300 m de dénivelé par jour, selon votre état de forme du moment"
    },
    {
        "question": "Où dort-on pendant le raid à ski en Ubaye ?",
        "answer": "Les nuits se font en refuges gardés confortables, en pension complète. Pas d’autonomie à porter : on monte léger pour profiter pleinement des journées."
    }
]
  },
  "ski-randonnee-norvege-alpes-lyngen": {
    title: "Ski de randonnée en Norvège",
    slug: "ski-randonnee-norvege-alpes-lyngen",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Alpes de Lyngen (Norvège)",
    level: "intermediaire",
    season: "hiver",
    duration: "8 jours",
    basePrice: "1690€",
    priceEncadrement: "1290€/pers",
    priceFraisSejour: "400€/pers",
    image: "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_0.jpg",
    intro: textToBlocks(`## Ski de randonnée dans les Alpes de Lyngen — Expérience premium, budget accessible

Rejoignez nous pour vivre une aventure alpine unique au nord du cercle polaire à bas prix! Ce séjour pas cher dans les Alpes de Lyngen vous plonge entre fjords enneigés, sommets isolés et lumière arctique. Loin du tourisme de masse, c’est le paradis des amoureux de ski de randonnée en Norvège.`),
    description: `## Ski de randonnée dans les Alpes de Lyngen — Expérience premium, budget accessible`,
    essentiel: textToBlocks(`• **6 jours complet de ski pour profiter à fond et s'en mettre plein les yeux...et les jambes tarif : 1990€ / pers (hors billets d'avions) - départ assuré à partir de 4 personnes**

• **Norvège, alpes de lyngen**

• **skieurs : confirmés effort : soutenuUn rythme équilibré Des sorties variées, entre 900 et 1 700 m de dénivelé, pour allier effort, plaisir de la glisse et temps de récupération.**

• **location d'un minibus 9 places sur place pour une gestion des déplacements sans contraintes**

• **hébergement en maison partagée dans une ambiance chaleureuse, conviviale et pour plus de flexibilité. nous cuisinerons et partagerons nos repas nous-même**

• **ambiance grand nord avec les montagnes enneigées qui surgissent des fjords et teintées par les lumières arctiques. du grand ski qui marque à vie**`),
    programme: textToBlocks(`### Programme type Séjour Ski de Randonnée en Norvège

Une aventure nordique entre fjords majestueux et sommets sauvages, avec départ et retour à Tromsø.Jour 1 : Arrivée à Tromsø le samedi 4 avril 2026Accueil à l’aéroport de Tromsø, au nord du cercle polaire.Transfert vers votre hébergement en ville pour une première nuit.Rencontre avec Toni, présentation du programme, vérification du matériel et dîner libre en ville.Jour 2 : Rando sur la route de notre camp de baseAprès le petit-déjeuner, départ en minibus vers notre maison partagée située dans la région de Lyngen.Première sortie ski de rando en cours de route, sur un itinéraire adapté à la mise en jambe.Installation en fin d’après-midi dans la maison partagée, dîner convivial et préparation du programme des jours suivants.Jours 3 à 6 : Ski, mange, dort, répète…Chaque jour, départ pour un nouveau sommet avec des itinéraires panoramiques sur les fjords norvégiens tels que Daltinden, Tafeltinden et autre Kravingtinden.Possibilité d’ajuster les sorties selon les niveaux et les conditions météo.Encadrement professionnel, sécurité, plaisir et immersion dans la nature arctique.Montées progressives, techniques de ski de randoDescente face aux fjords ou en forêt boréalePique-niques en pleine natureRetour en fin de journée au chalet pour une ambiance chaleureuseJour 7 : Rando sur la route de Tromsø Restitution de notre camp de base après le petit déjeuner.Dernière sortie ski de rando de notre aventure.Transfert vers notre hébergement en ville et dîner libre.Jour 8 : Fin du séjour le samedi 11 avril 2026Départ tôt le matin pour rejoindre l’aéroport de Tromsø.Séparation du groupe et fin du séjour, souvenirs plein la tête et jambes bien sollicitées !

Pour profiter pleinement de votre voyage en Norvège en ski de rando, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 3 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 4 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 5 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune.`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L hébergement des première et dernière nuit au Smarthotel Tromso (chambres doubles)L’ hébergement en maison partagée à Svensby, le reste du voyageLa location et le transport en minibus depuis l’ aéroport de Tromso et durant tout le voyageMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le billet d’avion pour se rendre à l’ aéroport de TromsoLes assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les piques niques et repas du voyageLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_1.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_2.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_3.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_4.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_5.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_6.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_7.jpg",
                  "alt": "Ski de randonnée en Norvège"
          }
  ],
    faqs: [
    {
        "question": "À qui s’adresse ce voyage en Norvège à ski ?",
        "answer": "Aux skieurs en bonne condition physique ayant une certaine expérience du ski de rando et à l’aise techniquement . Les sorties sont adaptées chaque jour selon la météo et le niveau du groupe, pour profiter du voyage en toute sécurité"
    },
    {
        "question": "Comment se déroule l’organisation sur place et à quel coût ?",
        "answer": "Contrairement aux idées reçues, partir skier en Norvège ne rime pas forcément avec gros budget. Le séjour est conçu sans superflu, avec une logistique simple et partagée : hébergement chaleureux en maison commune, repas en commun et autonomes, et véhicule 9 places pour les déplacements. Résultat : vrai voyage à ski au nord du cercle polaire à un coût maîtrisé, souvent bien plus accessible que les séjours organisés classiques tout en gardant l’essentiel, du ski et du bonheur."
    }
]
  },
};

// 2. Activity Category Fallback
export const fallbackActivities: Record<string, any> = {
  "stages-et-raids-a-ski-de-randonnee-hautes-alpes": {
    title: "Stages et raids à ski de rando",
    slug: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subtitle: "Séjours itinérants de plusieurs jours",
    intro: "L'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d'exception.",
    description: "Vivez l'itinérance à ski à travers les plus beaux massifs alpins et internationaux.",
    image: "/images/stages_raids_hub.jpg",
    price: "À partir de 380€",
    period: "Janvier à Mai",
    location: "Queyras, Clarée, Ubaye, Norvège",
    keyPoints: [
      { title: "Itinérance", description: "Changer de gîte ou de refuge chaque jour." },
      { title: "Dépassement", description: "Une aventure sportive et humaine inoubliable." },
      { title: "Convivialité", description: "En petits groupes pour privilégier la sécurité et le partage." }
    ],
    faqs: [
    {
        "question": "Comment se déroule un raid à ski ?",
        "answer": "Accompagné par Toni, moniteur de ski diplômé, vous partez en petit groupe sur des itinéraires adaptés aux conditions météo et nivologiques et à l’état de forme du groupe. Chaque jour, une nouvelle découverte, du grand ski, et des paysages à couper le souffle."
    },
    {
        "question": "Quelles différences entre un séjour et un raid ?",
        "answer": "En séjour, l’hébergement est situé en vallée, ce qui permet des départs en étoile vers différents itinéraires, avec déplacements en minibus pour viser l’ itinéraire le plus prometteur selon les  conditions de neige.Le raid, c’est une immersion plus profonde en montagne. On séjourne en refuge d’altitude, déjà bien loin de la vallée. Les départs se font skis aux pieds, c’est une expérience plus coupée du monde, plus intense, et terriblement dépaysante."
    },
    {
        "question": "À qui sont destinés ces séjours et ces raids ?",
        "answer": "Ces séjours en ski de rando s’adressent aux skieurs ayant une bonne condition physique et une expérience du ski de rando hors des pistes. C’est le format idéal pour ceux qui veulent vivre une immersion totale en montagne découvrir un massif en ski."
    },
    {
        "question": "Comment s’organise la logistique ?",
        "answer": "Pas de panique, pas besoin d’être en autonomie totale ! Tous les refuges de montagne et gîtes de vallée sont confortables et vous accueillent en pension complète.Le transport  est assuré : un minibus est à disposition pour se déplacer. Vous n’avez qu’à profiter pleinement de votre raid à ski, l’organisation est clé en main !"
    }
]
  }
};
