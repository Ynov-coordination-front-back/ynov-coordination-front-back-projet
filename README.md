# ✅ To-Do List Project

> Application fullstack de gestion de tâches — Proof of Concept (POC)

---

## 📝 Contexte du projet

Ce projet est réalisé dans le cadre du module **"Coordination Front/Back"** chez **Ynov Campus**.

L'objectif est de construire une **application de To-Do List** complète avec une architecture découplée front/back, tout en mettant en place un **workflow de développement professionnel** :
- Méthodologie **Agile** (Kanban, sprints)
- Gestion de projet structurée (Epics, User Stories, Tasks)
- Automations GitHub (CI/CD, création automatique de branches)
- Conventions de code et de collaboration strictes

### 🎯 Fonctionnalité principale

Permettre à un utilisateur de **créer, lire, modifier et supprimer des tâches** (CRUD) via une interface web moderne connectée à une API REST.

---

## 🛠 Stack Technique

| Couche | Technologie |
|--------|------------|
| **Front-end** | Vue.js 3 + Vite + TypeScript + Pinia + Vue Router |
| **Back-end** | Node.js + Express + TypeScript |
| **Gestion de projet** | GitHub Projects (Kanban) |
| **CI/CD** | GitHub Actions |

---

## 🚀 Prérequis

- **Node.js** `>= 20.19.0` ou `>= 22.12.0`
- **npm** `>= 10`
- **Make** (pour les commandes centralisées)
- **Git**

---

## 📦 Installation & Lancement

### Méthode rapide (recommandée)

Le projet utilise un **Makefile** pour centraliser toutes les commandes.

```bash
# 1. Cloner le projet
git clone git@github.com:Ynov-coordination-front-back/ynov-coordination-front-back-projet.git
cd ynov-coordination-front-back-projet

# 2. Copier le fichier d'environnement
cp .env.example .env

# 3. Installer toutes les dépendances (front + back)
make install

# 4. Lancer le projet en mode développement
make dev
```

### Méthode manuelle

<details>
<summary>📂 Front-end uniquement</summary>

```bash
cd front
npm install
npm run dev
```

Le front sera accessible sur `http://localhost:5173`

</details>

<details>
<summary>📂 Back-end uniquement</summary>

```bash
cd back
npm install
npm run dev
```

L'API sera accessible sur `http://localhost:3000`

</details>

### Commandes Make disponibles

| Commande | Description |
|----------|-------------|
| `make install` | Installe les dépendances front et back |
| `make dev` | Lance front et back en mode développement |
| `make dev-front` | Lance uniquement le front |
| `make dev-back` | Lance uniquement le back |
| `make build` | Build le front et le back |
| `make lint` | Lint le front et le back |
| `make clean` | Supprime les `node_modules` |

### 🧰 Scripts Git — `./run`

Les commandes Git avec arguments positionnels passent par le wrapper `./run` (Make ne supporte pas les arguments positionnels).

#### 🌿 `./run branch` — Créer une branche

Crée et checkout une branche au format `type/T-id` depuis `develop` (ou `main` pour les hotfixes).

```bash
# Syntaxe
./run branch <type> <id>

# Exemples
./run branch feat 01      # → feat/T-01 (depuis develop)
./run branch fix 12       # → fix/T-12  (depuis develop)
./run branch hotfix 03    # → hotfix/T-03 (depuis main)
```

| Type | Branche de base | Usage |
|------|----------------|-------|
| `feat` | `develop` | Nouvelle fonctionnalité |
| `fix` | `develop` | Correction de bug |
| `hotfix` | `main` | Correction urgente en production |

#### 📝 `./run commit` — Créer un commit formaté

Parse automatiquement la branche courante pour générer un message de commit conforme aux [conventions](./GUIDELINES.md).

```bash
# Syntaxe
./run commit <theme> "<description>"

# Exemple : si on est sur la branche feat/T-01
./run commit Config "Mise en place de la configuration"
# → feat(Config): T-01 Mise en place de la configuration

# Exemple : si on est sur la branche fix/T-12
./run commit API "Correction du format de date"
# → fix(API): T-12 Correction du format de date
```

> 💡 Les scripts sources se trouvent dans `scripts/branch.sh` et `scripts/commit.sh`.

---

## 📚 Documentation livrable TD

Les documents de pilotage et d'execution complementaires sont centralises dans [`documentation/`](./documentation/README.md).

| Sujet | Document |
|------|----------|
| Onboarding nouvel arrivant | [documentation/ONBOARDING.md](./documentation/ONBOARDING.md) |
| Pilotage projet / US | [documentation/PROJECT_MANAGEMENT.md](./documentation/PROJECT_MANAGEMENT.md) |
| Error management | [documentation/ERROR_MANAGEMENT.md](./documentation/ERROR_MANAGEMENT.md) |
| Features | [documentation/FEATURES.md](./documentation/FEATURES.md) |
| Retour de stage | [documentation/STAGE_FEEDBACK.md](./documentation/STAGE_FEEDBACK.md) |

### Documentation front

- Storybook: `cd front && npm run storybook`
- Build Storybook: `cd front && npm run build-storybook`

### Documentation back

- Swagger UI: `http://localhost:3000/docs`
- Healthcheck: `http://localhost:3000/api/health`

### Orchestration

- Local simple: `make dev`
- Mode orchestre: `docker compose up --build`

---

## 🌿 Branching Strategy

Nous utilisons une stratégie basée sur le **Semantic Versioning** et les types de tickets.

### Branches principales

| Branche | Rôle |
|---------|------|
| `main` | Branche stable, toujours déployable en production |
| `develop` | Branche d'intégration pour les fonctionnalités en cours |

### Branches de travail

Les branches sont nommées automatiquement à partir du type de ticket :

| Type de ticket | Préfixe de branche | Exemple |
|----------------|-------------------|---------|
| User Story / Task | `feat/` | `feat/TICKET-12` |
| Bugfix | `fix/` | `fix/TICKET-25` |
| Hotfix | `hotfix/` | `hotfix/TICKET-30` |

### Flux de travail Git

```
main ← develop ← feat/TICKET-XX
                ← fix/TICKET-XX
main ← hotfix/TICKET-XX (urgences uniquement)
```

1. Créer une branche depuis `develop` (auto via GitHub Projects)
2. Développer sur sa branche
3. Ouvrir une **Pull Request** vers `develop`
4. Code Review obligatoire
5. Merge après validation
6. `develop` → `main` lors des releases

### Semantic Versioning

Les releases suivent le format **`vMAJOR.MINOR.PATCH`** :

| Incrément | Quand ? | Exemple |
|-----------|---------|---------|
| **MAJOR** | Changement cassant / incompatible | `v2.0.0` |
| **MINOR** | Nouvelle fonctionnalité rétrocompatible | `v1.1.0` |
| **PATCH** | Correction de bug | `v1.0.1` |

---

## 🔄 Workflow — Cycle de vie des tickets

### États d'un ticket

```
Backlog → Ready → In Progress → In Review → Done → Released
```

| État | Description |
|------|-------------|
| **Backlog** | Ticket rédigé, tous les champs obligatoires remplis |
| **Ready** | Ticket validé (DoR ok), prêt à être pris en sprint |
| **In Progress** | Travail en cours, une seule personne assignée |
| **In Review** | Code terminé, PR ouverte, en attente de review |
| **Done** | Validé, fonctionnel, mergé |
| **Released** | Déployé en production |

### Champs obligatoires d'un ticket

- **Titre** — Court et actionnable (ex: *"Implémenter la page de login"*)
- **Description** — Contexte + Besoin + Résultat attendu
- **Type fonctionnel** — Front / Back / Fullstack
- **Estimation** — En points (1, 2, 3, 5)
- **Priorité** — Basse / Moyenne / Haute / Critique
- **Rapporteur** — Qui a créé le ticket
- **Assigné** — Responsable du ticket (1 seul)

> 📖 Pour plus de détails sur les DoR/DoD et les conventions, voir [CONTRIBUTING.md](./CONTRIBUTING.md) et [GUIDELINES.md](./GUIDELINES.md)

---

## 📁 Structure du projet

```
.
├── front/                  # Application Vue.js 3
│   ├── src/
│   │   ├── components/     # Composants réutilisables
│   │   ├── views/          # Pages de l'application
│   │   ├── router/         # Configuration des routes
│   │   ├── stores/         # State management (Pinia)
│   │   └── assets/         # CSS, images
│   └── package.json
├── back/                   # API Express
│   ├── src/
│   │   ├── routes/         # Définition des routes API
│   │   ├── controllers/    # Logique métier
│   │   └── index.ts        # Point d'entrée serveur
│   └── package.json
├── .github/                # Templates, workflows CI/CD
├── documentation/          # Documentation complémentaire
├── Makefile                # Commandes centralisées
├── CONTRIBUTING.md         # Guide de contribution
├── GUIDELINES.md           # Conventions techniques
└── README.md
```

---

## 🔗 Liens Utiles

| Ressource | Lien |
|-----------|------|
| 📋 Board de gestion de projet | [GitHub Projects](https://github.com/orgs/Ynov-coordination-front-back/projects/2) |
| 📖 Guide de contribution | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| 📏 Conventions techniques | [GUIDELINES.md](./GUIDELINES.md) |

---

## 👥 Équipe

Projet réalisé dans le cadre du module **Coordination Front/Back** — Ynov Campus 2025-2026.
