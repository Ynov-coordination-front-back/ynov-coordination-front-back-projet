# Documentation des Features

## Feature actuelle: gestion de todos

### Valeur

Permettre de creer, consulter, modifier et supprimer des taches simples depuis une API REST.

### Endpoints disponibles

- `GET /api/health`
- `GET /api/todos`
- `GET /api/todos/:id`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`

### Regles metier MVP

- Le titre est obligatoire a la creation.
- Un todo cree est `completed: false` par defaut.
- Un todo absent retourne `404`.

### Documentation associee

- Swagger: `/docs`
- Storybook: composants UI reutilisables documentes dans `front/src/stories`

## Feature transverse: qualite de livraison

### Valeur

Rendre le projet delegable a un stagiaire et reproductible pour l'equipe.

### Composants

- Workflow GitHub avec templates d'issues et PR.
- Documentation d'onboarding.
- Tests unitaires et E2E.
- CI de build et de test.
- Orchestration docker compose.
