# 🍋 Little Lemon App

Une application web moderne pour le restaurant Little Lemon, développée avec React. Cette application offre une expérience utilisateur fluide avec navigation, menu interactif, réservations en ligne, avis clients et bien plus encore.

## 📋 Table des matières

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Dépannage](#dépannage)

## 📝 Description

Little Lemon App est une plateforme Web pour un restaurant proposant :

- **Accueil** : Page d'accueil avec présentation du restaurant
- **Menu** : Consultation du menu des plats disponibles
- **Réservation** : Système de réservation en ligne pour les clients
- **Avis** : Section témoignages et avis clients
- **Authentification** : Connexion pour les utilisateurs
- **Navigation** : Interface utilisateur intuitive avec barre de navigation et pied de page

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 14.0.0 ou supérieure) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (version 6.0.0 ou supérieure) : généralement inclus avec Node.js

Pour vérifier vos versions :

```bash
node --version
npm --version
```

## 💻 Installation

### 1. Cloner ou télécharger le projet

```bash
# Si vous avez git installé
git clone <URL_DU_DEPOT>
cd little-lemon-app
```

### 2. Installer les dépendances

Dans le répertoire du projet, exécutez :

```bash
npm install
```

Cette commande télécharge et installe toutes les dépendances listées dans `package.json`.

### 3. Configuration (optionnel)

Vérifiez que le fichier `.env` est bien configuré si nécessaire. Par défaut, l'application s'exécutera sur `http://localhost:3000`.

## 🚀 Démarrage

### Mode développement

Pour lancer l'application en mode développement :

```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur par défaut à l'adresse [http://localhost:3000](http://localhost:3000).

**Caractéristiques du mode développement :**
- Rechargement en direct : les modifications apportées au code sont automatiquement visibles
- Console d'erreurs : les erreurs de compilation et d'ESLint s'affichent dans la console
- DevTools React : inspection des composants React simplifiée

### Mode production

Pour générer une version optimisée pour la production :

```bash
npm run build
```

Cela crée un dossier `build` avec les fichiers optimisés prêts pour le déploiement.

## 📦 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance l'application en mode développement sur le port 3000 |
| `npm run build` | Crée une version de production optimisée dans le dossier `build` |
| `npm test` | Lance les tests unitaires en mode interactif |
| `npm run eject` | Éjecte la configuration (irreversible - déconseillé) |

## 📁 Structure du projet

```
little-lemon-app/
├── public/                    # Fichiers publics statiques
│   ├── index.html            # Page HTML principale
│   ├── manifest.json         # Configuration PWA
│   └── robots.txt            # Instructions pour les moteurs de recherche
│
├── src/                       # Code source principal
│   ├── App.js                # Composant principal de l'application
│   ├── App.css               # Styles globaux
│   ├── index.js              # Point d'entrée React
│   ├── index.css             # Styles du point d'entrée
│   │
│   ├── Components/           # Composants React
│   │   ├── Navbar.js         # Barre de navigation
│   │   ├── Footer.js         # Pied de page
│   │   ├── Main.js           # Composant principal
│   │   ├── Testimonials.js   # Section avis clients
│   │   ├── orderOnline.js    # Commande en ligne
│   │   │
│   │   └── pages/            # Pages de l'application
│   │       ├── Home.js       # Page d'accueil
│   │       ├── Menu.js       # Page du menu
│   │       ├── BookingPage.js # Page de réservation
│   │       ├── BookingForm.js # Formulaire de réservation
│   │       ├── ConfirmBooking.js # Confirmation de réservation
│   │       ├── Login.js      # Page de connexion
│   │       ├── About.js      # Page À propos
│   │       ├── Header.js     # En-tête
│   │       └── reservation.js # Logique de réservation
│   │
│   ├── images/               # Images du projet
│   │   └── food1.avif        # Images alimentaires
│   │
│   ├── recipes.js            # Données de recettes
│   ├── testimony.js          # Données de témoignages
│   └── __mocks__/            # Mocks pour les tests
│       └── react-router-dom.js # Mock de React Router
│
├── package.json              # Dépendances du projet
├── README.md                 # Ce fichier
└── .gitignore               # Fichiers à ignorer dans Git
```

## 🔧 Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| **React** | 19.1.0 | Bibliothèque JavaScript pour les interfaces utilisateur |
| **React DOM** | 19.1.0 | Rendu React dans le navigateur |
| **React Router** | 7.13.0 | Navigation multi-pages |
| **React Icons** | 5.5.0 | Bibliothèque d'icônes |
| **SweetAlert2** | 11.22.3 | Modales et alertes stylisées |
| **Testing Library** | Dernière version | Tests unitaires pour React |
| **Babel** | 7.x | Compilateur JavaScript |

## 🐛 Dépannage

### Problème : "npm: commande non trouvée"

**Solution :** Installez Node.js depuis [nodejs.org](https://nodejs.org/). npm est inclus avec Node.js.

### Problème : "Port 3000 déjà utilisé"

**Solution :** Le port 3000 est occupé par une autre application. Vous pouvez :
- Terminer le processus utilisant le port 3000
- Ou lancer l'application sur un port différent :

```bash
PORT=3001 npm start
```

### Problème : "Module not found" après `npm install`

**Solution :** Supprimez le dossier `node_modules` et `package-lock.json`, puis réinstallez :

```bash
rm -r node_modules package-lock.json
npm install
```

### Problème : Les changements ne se mettent pas à jour en temps réel

**Solution :** Vérifiez que vous êtes bien en mode développement (`npm start`). Si cela persiste, redémarrez le serveur :
- Arrêtez le serveur avec `Ctrl+C`
- Relancez avec `npm start`

## 📧 Support

Pour toute question ou problème, veuillez consulter la documentation officielle :
- [Documentation React](https://react.dev/)
- [Documentation Create React App](https://create-react-app.dev/)
- [Documentation React Router](https://reactrouter.com/)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
