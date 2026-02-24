# Guidelines Techniques 📏

Ce document définit les conventions techniques à respecter par tous les contributeurs du projet.

---

## 🌿 Branching Strategy

### Branches principales

| Branche | Rôle | Protection |
|---------|------|-----------|
| `main` | Production — toujours stable et déployable | ✅ Protégée (pas de push direct) |
| `develop` | Intégration — reçoit les features terminées | ✅ Protégée (merge via PR uniquement) |

### Branches de travail

Toutes les branches de travail partent de `develop` (sauf les hotfixes qui partent de `main`).

| Type | Préfixe | Base | Merge vers | Exemple |
|------|---------|------|------------|---------|
| Fonctionnalité | `feat/` | `develop` | `develop` | `feat/TICKET-12` |
| Correction de bug | `fix/` | `develop` | `develop` | `fix/TICKET-25` |
| Hotfix (urgence) | `hotfix/` | `main` | `main` + `develop` | `hotfix/TICKET-30` |

### Règles

- ❌ **Jamais** de push direct sur `main` ou `develop`
- ✅ Toujours passer par une **Pull Request**
- ✅ Au moins **1 review** avant le merge
- ✅ La branche est **supprimée** après le merge

### Flux visuel

```
main ─────────────────●────────────────────●─── (releases)
                     ↑                      ↑
develop ──●──●──●──●──●──●──●──●──●──●──●──●── (intégration)
          ↑     ↑        ↑        ↑
          feat/  fix/     feat/    feat/
          T-01   T-04     T-07     T-12
```

---

## 🏷️ Semantic Versioning

Les releases suivent le format **[SemVer](https://semver.org/)** : `vMAJOR.MINOR.PATCH`

| Incrément | Quand ? | Exemple |
|-----------|---------|---------|
| **MAJOR** | Changement cassant (breaking change) | `v1.0.0` → `v2.0.0` |
| **MINOR** | Nouvelle fonctionnalité rétrocompatible | `v1.0.0` → `v1.1.0` |
| **PATCH** | Correction de bug | `v1.0.0` → `v1.0.1` |

---

## 💬 Convention de Commits

Nous suivons la convention **[Conventional Commits](https://www.conventionalcommits.org/)**.

### Format

```
type(scope): TICKET-ID description
```

### Types autorisés

| Type | Description |
|------|-------------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Modification de la documentation uniquement |
| `style` | Changements de formatage (espaces, virgules, etc.) |
| `refactor` | Refactorisation sans changement fonctionnel |
| `test` | Ajout ou modification de tests |
| `chore` | Maintenance (dépendances, config, CI...) |

### Exemples

```bash
# Bons exemples ✅
feat(Listing): TICKET-01 Ajout d'un tableau pour lister les tâches
fix(API): TICKET-04 Correction du format de date dans la réponse
docs(README): Mise à jour des instructions d'installation
chore(deps): Mise à jour des dépendances npm
refactor(TodoService): TICKET-08 Extraction de la logique de validation

# Mauvais exemples ❌
update stuff
fix bug
wip
```

### Règles

- Le message doit être en **français** (description) avec un **type en anglais**
- La première lettre de la description est en **majuscule**
- Pas de point `.` à la fin
- Le scope correspond au **module ou composant** concerné
- Le TICKET-ID est **obligatoire** pour `feat` et `fix`

---

## 📏 Standards de Code

### Général

- **TypeScript** obligatoire (front et back)
- **ESLint** + **Prettier** configurés et respectés
- Pas de `console.log` en production (utiliser un logger côté back)
- Pas de `any` sauf cas exceptionnel justifié
- Nommage en **camelCase** pour les variables/fonctions, **PascalCase** pour les classes/composants

### Front-end (Vue.js 3)

- Utiliser la **Composition API** (`<script setup lang="ts">`)
- Un composant = un fichier `.vue`
- Les stores Pinia dans `stores/`
- Les pages dans `views/`, les composants réutilisables dans `components/`
- Routing dans `router/`

### Back-end (Express)

- Architecture en couches : `routes/` → `controllers/` → `services/`
- Les routes définissent les endpoints
- Les controllers gèrent la logique HTTP (req/res)
- Les services contiennent la logique métier
- Réponses API au format JSON standardisé :

```json
{
  "success": true,
  "data": { ... }
}
```

```json
{
  "success": false,
  "error": "Message d'erreur"
}
```

---

## 📁 Organisation des fichiers

### Front (`/front`)

```
src/
├── assets/          # Fichiers statiques (CSS, images)
├── components/      # Composants Vue réutilisables
├── views/           # Pages (liées au router)
├── router/          # Configuration Vue Router
├── stores/          # Stores Pinia (state management)
├── App.vue          # Composant racine
└── main.ts          # Point d'entrée
```

### Back (`/back`)

```
src/
├── routes/          # Définition des routes Express
├── controllers/     # Logique HTTP
├── services/        # Logique métier
├── types/           # Types TypeScript partagés
└── index.ts         # Point d'entrée serveur
```
