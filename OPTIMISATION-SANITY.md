# 🚀 Optimisations Sanity - Réduction des requêtes API

## ⚠️ Problème rencontré
Le quota gratuit Sanity (250k requêtes/mois) a été dépassé, rendant le site inaccessible.

## ✅ Solutions appliquées

### 1. **Activation du CDN Sanity** (GRATUIT et ILLIMITÉ)
- ✨ Fichier: `src/sanity/lib/client.ts`
- Changement: `useCdn: false` → `useCdn: true`
- Impact: Les requêtes passent par le CDN au lieu de l'API directe
- Économie: ~90% des requêtes API en moins

### 2. **Cache Next.js (ISR - Incremental Static Regeneration)**
- ✨ Fichiers modifiés:
  - `src/app/page.tsx` - Cache 60 secondes
  - `src/app/[slug]/page.tsx` - Cache 60 secondes
- Impact: Les pages sont régénérées toutes les 60 secondes max au lieu de chaque visite
- Économie: ~95% des requêtes en moins

## 📊 Résultat attendu
Avant: **251k+ requêtes/mois** (quota dépassé)
Après: **~5-10k requêtes/mois** (bien en dessous du quota gratuit)

## 🚀 Déploiement

### Option 1: Déploiement automatique (Vercel/Netlify)
```bash
git add .
git commit -m "Optimisation Sanity: activation CDN + cache ISR"
git push origin main
```

Le site se redéploiera automatiquement avec les optimisations.

### Option 2: Build local
```bash
npm run build
npm run start
```

## 🔧 Configuration avancée

### Ajuster le temps de cache
Dans `src/app/page.tsx` et `src/app/[slug]/page.tsx`, modifier:
```typescript
export const revalidate = 60; // secondes
```

Valeurs recommandées:
- **60** = Bon équilibre (contenu frais + peu de requêtes)
- **300** = Très économe (5 min de cache)
- **3600** = Maximum économe (1h de cache)

### Désactiver le cache temporairement
Pour forcer le rechargement immédiat du contenu:
```typescript
export const revalidate = 0; // Pas de cache
```

## ⏰ Quota mensuel Sanity

Le quota se réinitialise automatiquement le **1er de chaque mois**.

En attendant la réinitialisation, le site fonctionnera quand même grâce au CDN qui sert les données en cache.

## 🆘 Solution d'urgence

Si le site est toujours inaccessible, activer temporairement les données mock:

1. Créer un fichier `.env.local`:
```bash
NEXT_PUBLIC_USE_MOCK_DATA=true
```

2. Redémarrer le serveur:
```bash
npm run dev
```

Le site utilisera alors des données de démonstration au lieu de Sanity.

## 📈 Monitoring

Pour suivre l'utilisation Sanity:
👉 https://sanity.io/organizations/o7yPekav/project/igo7jhte/api#requests
