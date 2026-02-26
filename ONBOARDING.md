# Onboarding Developpeur

Ce guide sert d'entrée rapide pour tout nouveau developpeur sur le projet.

## 1. Objectif du projet

- Construire une application To-Do fullstack (CRUD)
- Architecture decouplee `front` (Vue 3) / `back` (Express)
- Respecter un workflow equipe: ticketing, conventions Git, CI/CD

## 2. Prerequis

- Node.js `>= 20.19.0` ou `>= 22.12.0`
- npm `>= 10`
- Make
- Git

## 3. Setup local (30 min)

```bash
git clone git@github.com:Ynov-coordination-front-back/ynov-coordination-front-back-projet.git
cd ynov-coordination-front-back-projet
cp .env.example .env
make install
make dev
```

Acces:
- Front: `http://localhost:5173`
- Back: `http://localhost:3000`
- Storybook: `http://localhost:6006` (via `cd front && npm run storybook`)

## 4. Architecture rapide

- `front/src/components`: composants reutilisables
- `front/src/views`: pages routees
- `front/src/router`: routing Vue Router
- `front/src/stores`: stores Pinia
- `back/src/routes`: endpoints API
- `back/src/controllers`: logique HTTP
- `back/src/services`: logique metier
- `back/src/errors` + `back/src/middleware`: gestion d erreurs centralisee

## 5. Workflow ticket

Statuts:

`Backlog -> Ready -> In Progress -> In Review -> Done -> Released`

Regles:
- 1 ticket = 1 assignee
- Un ticket doit etre complet (DoR) avant d'entrer en sprint
- Un ticket n est Done qu apres review + merge + validation fonctionnelle

## 6. Workflow Git

- Branches protegees: `main`, `develop`
- Branches de travail:
  - `feat/T-XX` depuis `develop`
  - `fix/T-XX` depuis `develop`
  - `hotfix/T-XX` depuis `main`
- PR obligatoire vers `develop` (ou `main` pour hotfix)
- PR doit contenir `Closes #<numero>`

Commandes utiles:

```bash
./run branch feat 01
./run commit UI "Ajout du composant bouton"
```

## 7. Conventions techniques

- TypeScript obligatoire front/back
- Front: Composition API (`<script setup lang="ts">`)
- Lint avant PR:

```bash
make lint
```

- Tests avant PR:

```bash
cd back && npm run test
cd front && npm run test
```

## 8. Storybook

Storybook sert a documenter les composants UI et leurs variantes.

- Stories a placer dans `front/src/**` avec le suffixe `.stories.ts`
- Toute creation/modification de composant reutilisable doit inclure ou mettre a jour une story
- Build Storybook:

```bash
cd front
npm run build-storybook
```

## 9. CI/CD (resume)

- `tests.yml`: lint + tests back/front + e2e front
- `deploy.yml`: verification puis builds front/back sur `main`
- `release.yml`: build + publication sur tag `v*`
- Les jobs sont relies avec `needs` pour garantir l ordre d execution

## 10. Checklist premier jour

- [ ] Lancer le projet en local
- [ ] Lancer les tests front/back
- [ ] Ouvrir Storybook et lire les stories existantes
- [ ] Prendre un premier ticket `task` front
- [ ] Ouvrir une PR conforme au template

## 11. Liens de reference

- [README.md](./README.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [GUIDELINES.md](./GUIDELINES.md)
