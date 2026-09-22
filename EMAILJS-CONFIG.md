# 📧 Configuration EmailJS - Formulaire de Contact

## ✅ Configuration actuelle

### Credentials EmailJS
- **Service ID** : `service_2jmxcno`
- **Template ID** : `template_z39qtuk`
- **Public Key** : `6suPwshlNbgtyRocG`

Ces identifiants sont stockés dans `.env.local` (non versionné).

## 🎯 Fonctionnalités

### Formulaire de contact avec :
- ✨ Validation des champs (nom, email, message)
- ⏳ Indicateur de chargement pendant l'envoi
- ✅ Message de succès après envoi
- ❌ Message d'erreur en cas de problème
- 🔄 Auto-reset des messages après 5 secondes
- 🎨 Design adaptatif (light/dark mode)
- 🔒 Désactivation des champs pendant l'envoi

### Champs du formulaire :
1. **Nom complet** (`from_name`) - Requis
2. **Email** (`from_email`) - Requis + validation email
3. **Message** (`message`) - Requis

## 📝 Template EmailJS

Ton template EmailJS doit contenir ces variables :
```
{{from_name}} - Nom de l'expéditeur
{{from_email}} - Email de l'expéditeur
{{message}} - Message envoyé
```

Exemple de template :
```
Nouveau message de contact depuis ÉvasionSki

De : {{from_name}}
Email : {{from_email}}

Message :
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact d'ÉvasionSki.
```

## 🚀 Déploiement

### Variables d'environnement à configurer sur Vercel/Netlify :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_2jmxcno
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_z39qtuk
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=6suPwshlNbgtyRocG
```

**Important** : Ces variables doivent être préfixées par `NEXT_PUBLIC_` pour être accessibles côté client.

## 🧪 Test en local

1. Le fichier `.env.local` contient déjà les variables
2. Redémarrer le serveur de dev : `npm run dev`
3. Aller sur la page contact : http://localhost:3000/evasion-ski-hautes-alpes-contact
4. Remplir et envoyer le formulaire
5. Vérifier l'email de réception configuré dans EmailJS

## 📊 Dashboard EmailJS

Pour consulter les emails envoyés et configurer ton template :
👉 https://dashboard.emailjs.com/admin

## 🔧 Troubleshooting

### Le formulaire ne s'envoie pas
- Vérifier que les variables d'environnement sont bien définies
- Vérifier que le template existe dans EmailJS
- Vérifier la console du navigateur pour les erreurs
- Vérifier que l'email de destination est configuré dans EmailJS

### Les emails n'arrivent pas
- Vérifier le dossier spam
- Vérifier l'email de destination dans le service EmailJS
- Vérifier le quota EmailJS (200 emails/mois sur le plan gratuit)

### Variables d'environnement non chargées
- Redémarrer le serveur de dev après modification du `.env.local`
- Vérifier que les variables commencent bien par `NEXT_PUBLIC_`

## 📈 Limites du plan gratuit EmailJS

- **200 emails/mois**
- Si dépassement, passer au plan payant ou créer un nouveau compte
