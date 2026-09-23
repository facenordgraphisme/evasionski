# 🔍 Audit Complet de l'Architecture Sanity

## 📊 État Actuel

### ✅ Schémas UTILISÉS (13)

| Schéma | Usage | Pages concernées | Status |
|--------|-------|-----------------|--------|
| **home** | Configuration page d'accueil | `/` (page d'accueil) | ✅ Complet |
| **sejour** | Catalogue des séjours | `/ski-randonnee-hautes-alpes-journee`, `/ski-hors-piste-station-hautes-alpes`, etc. | ✅ Complet |
| **sejourDate** | Prochaines sorties/départs | `/prochaines-sorties`, `/calendrier` | ✅ Complet |
| **post** | Articles de blog | `/blog-explorez-les-hautes-alpes-a-ski/[slug]` | ✅ Complet |
| **guide** | Page À propos | `/a-propos-moniteur-de-ski-de-randonnee` | ✅ Complet |
| **contact** | Page Contact | `/evasion-ski-hautes-alpes-contact` | ✅ Complet |
| **settings** | Paramètres globaux | Footer, navbar, SEO global | ✅ Complet |
| **testimonial** | Témoignages clients | Section témoignages homepage | ✅ Complet |
| **faq** | Questions fréquentes | Page contact, séjours | ✅ Complet |
| **tag** | Tags pour blog | Filtres blog (catégories/massifs) | ✅ Complet |
| **massif** | Massifs montagneux | Références dans séjours/sorties | ✅ Complet |
| **aLaCarte** | Page engagement privé | `/ski-de-randonnee-engagement-prive` | ✅ Complet |
| **niveauSki** | Page niveau en ski | `/niveau-en-ski` | ✅ Complet |

---

### ❌ Fichiers ARCHIVÉS à SUPPRIMER (3)

| Fichier | Raison | Impact suppression |
|---------|--------|-------------------|
| `_archive_activity.ts` | Ancien système d'activités (non utilisé) | ✅ Aucun |
| `_archive_sortie.ts` | Ancien système de sorties (remplacé par sejourDate) | ✅ Aucun |
| `_archive_univers.ts` | Ancien système d'univers (non utilisé) | ✅ Aucun |

---

## ⚠️ PROBLÈMES IDENTIFIÉS

### 1. **Page `/activites` - Données HARDCODÉES**

**Problème** : La page `/activites` n'utilise PAS de schéma Sanity dédié. Les données sont hardcodées dans `queries.ts` (lignes 337-366).

**Query actuelle** :
```typescript
export const activitiesQuery = groq`[
  {
    "title": "Engagement Privé / À la carte",
    "slug": "ski-de-randonnee-engagement-prive",
    "description": "Sortie privée sur mesure...",
    "price": "À partir de 400€/jour",
    "image": "/images/hero.jpg"
  },
  // ... 3 autres activités hardcodées
]`
```

**Conséquence** :
- ❌ Impossible de modifier le contenu via Sanity Studio
- ❌ Pas de traduction dynamique
- ❌ Images hardcodées (pas de gestion d'assets)

**Solution** : Créer un schéma `activity` (nouveau, pas l'ancien archivé) avec :
- title, titleEn
- description, descriptionEn
- slug
- price, priceEn
- image (asset)
- order (pour l'ordre d'affichage)
- featured (boolean)

---

### 2. **Fallback Data - Doublon avec Sanity**

**Fichiers concernés** :
- `src/utils/fallbackData.ts` (1500+ lignes)
- `src/sanity/lib/mockData.ts` (500+ lignes)

**Problème** :
- Ces fichiers contiennent des données de **fallback** utilisées quand Sanity ne répond pas
- Mais maintenant avec CDN + ISR, Sanity est toujours disponible
- Double maintenance : modifier dans Sanity ET dans les fallbacks

**Solution recommandée** :
1. **Garder** des fallbacks **minimalistes** pour éviter les pages blanches en cas de panne Sanity
2. **Supprimer** les données détaillées (contenu complet des séjours, etc.)
3. Garder seulement :
   - Structure vide des objets (pour éviter les erreurs de mapping)
   - Messages d'erreur gracieux ("Contenu temporairement indisponible")

---

### 3. **Contenus NON éditables via Sanity**

Voici ce qui est encore **hardcodé** dans le code :

#### Page `/activites` (mentionné ci-dessus)
- [ ] Titre de la page : "NOS ACTIVITÉS"
- [ ] Sous-titre : "Découvrez toutes les activités..."
- [ ] 4 cartes d'activités (contenu complet)

#### Composants globaux
- [ ] **PresentationSection** (`src/components/PresentationSection.tsx`)
  - Tout le contenu est hardcodé (badges, titres, descriptions)
  
#### Pages légales
- [ ] **Mentions Légales** (`src/app/[slug]/views/LegalView.tsx`)
- [ ] **Politique de Confidentialité**
- [ ] **CGV**
  
Contenu complètement hardcodé en dur dans le code.

---

## 🎯 PLAN D'ACTION COMPLET

### Phase 1 : Nettoyage (Immédiat - 15 min)

1. **Supprimer les fichiers archivés**
   ```bash
   rm src/sanity/schemaTypes/_archive_activity.ts
   rm src/sanity/schemaTypes/_archive_sortie.ts
   rm src/sanity/schemaTypes/_archive_univers.ts
   ```

2. **Nettoyer les queries deprecated**
   Dans `src/sanity/lib/queries.ts`, supprimer les lignes 299-304 (commentaires deprecated)

---

### Phase 2 : Rendre `/activites` éditable (30 min)

1. **Créer** `src/sanity/schemaTypes/activities.ts`
   - Schéma singleton (documentId fixe)
   - Champs : pageTitle, pageDescription, activities (array)

2. **Modifier** `src/sanity/lib/queries.ts`
   - Remplacer `activitiesQuery` hardcodé par vraie query Sanity

3. **Peupler** le schéma avec script de migration

4. **Mettre à jour** `src/app/activites/page.tsx`

---

### Phase 3 : Rendre les pages légales éditables (20 min)

1. **Créer** `src/sanity/schemaTypes/legalPages.ts`
   - Schéma singleton avec 3 sections :
     - mentionsLegales (portable text)
     - confidentialite (portable text)
     - cgv (portable text)

2. **Modifier** `src/app/[slug]/views/LegalView.tsx`
   - Fetch depuis Sanity au lieu de contenu hardcodé

---

### Phase 4 : Optimiser les fallbacks (20 min)

1. **Réduire** `fallbackData.ts` à un squelette minimal
2. **Réduire** `mockData.ts` à un squelette minimal
3. Garder seulement les structures d'objets vides

---

### Phase 5 : Rendre PresentationSection éditable (15 min)

1. **Ajouter** au schéma `home` :
   - presentationBadge
   - presentationTitle
   - presentationTitleAccent
   - presentationContent (portable text)
   - presentationStats (array d'objets : number + label)

2. **Modifier** `src/components/PresentationSection.tsx`

---

## 📈 Résultat Attendu

### Avant
- **13 schémas** utilisés
- **3 fichiers** archivés inutiles
- **~2000 lignes** de fallback data
- **5 sections** hardcodées non éditables

### Après
- **15-16 schémas** utilisés (+ activities, legalPages, presentationSection dans home)
- **0 fichier** archivé
- **~100 lignes** de fallback minimal
- **100%** du contenu éditable via Sanity Studio

---

## 🚀 Commandes Git

```bash
# Après chaque phase
git add .
git commit -m "Phase X: [description]"
```

---

## ⏱️ Temps Total Estimé

- **Phase 1** : 15 min (nettoyage)
- **Phase 2** : 30 min (page activités)
- **Phase 3** : 20 min (pages légales)
- **Phase 4** : 20 min (optimisation fallbacks)
- **Phase 5** : 15 min (PresentationSection)

**TOTAL** : ~1h40 de travail

---

## 🎉 Bénéfices

1. **Client autonome** : Peut modifier 100% du contenu sans toucher au code
2. **Maintenance simplifiée** : Plus de duplication de données
3. **SEO amélioré** : Contenu dynamique optimisable via Sanity
4. **Traductions facilitées** : Tout géré dans Sanity
5. **Codebase propre** : -2000 lignes de code obsolète
