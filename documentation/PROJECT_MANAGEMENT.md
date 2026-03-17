# Pilotage Projet

Ce document sert de base de saisie dans GitHub Projects pour les elements demandes au barème.

## User Story stagiaire

### Titre

`[US] Afficher et traiter proprement les erreurs CRUD sur les todos`

### User Story

En tant qu'utilisateur, je veux recevoir un message clair quand une action CRUD echoue afin de comprendre quoi faire sans recharger l'application.

### Portee fullstack

- Front: afficher un feedback utilisateur contextualise.
- Back: retourner un format d'erreur standard.
- Tests: couvrir au moins un cas nominal et un cas en erreur.
- Documentation: mettre a jour Storybook et la doc Error Management.

### Critères d'acceptation

- Une creation sans titre retourne une erreur `400` standardisee.
- Le front affiche un message comprehensible et non technique.
- Une recherche d'item inexistant retourne une erreur `404` standardisee.
- Les erreurs reseau sont distinguees des erreurs metier.
- La PR du stagiaire inclut tests et mise a jour documentaire.

### Dependances

- Strategie Error Management validee.
- Onboarding disponible.
- Swagger accessible pour verifier les reponses.

### Taches conseillees

- Ajouter un middleware d'erreurs backend.
- Definir un contrat JSON d'erreur.
- Documenter les erreurs Swagger.
- Ajouter un composant ou pattern de feedback front.
- Ajouter tests unitaires et E2E des cas d'erreur.

## User Story personnalisee

### Titre

`[US] Fiabiliser le workflow MVP avec documentation, tests et CI`

### User Story

En tant que membre de l'equipe, je veux un socle qualite reproductible afin de livrer le MVP sans dependre d'une verification manuelle a chaque PR.

### Portee fullstack

- Front: Storybook buildable.
- Back: API documentee et testable.
- CI: installation, lint, build, tests.
- Orchestration: demarrage reproductible localement.

### Critères d'acceptation

- Le front build sans erreur de typage.
- Le back expose Swagger et un healthcheck.
- Une CI lance build et tests sur front et back.
- Le projet fournit un mode d'execution orchestre documente.
- Le README pointe vers les documents de pilotage.

### Taches conseillees

- Corriger les stories cassees.
- Ajouter tests unitaires et E2E back.
- Ajouter workflow GitHub Actions.
- Ajouter `compose.yml` et documenter les limites.

## Epic support

### Epic

`[EPIC] Road to MVP - Qualite et delegation`

### Sous-elements a creer dans le board

- US stagiaire: gestion des erreurs fullstack.
- US perso: fiabilisation du workflow MVP.
- Task: onboarding nouvel arrivant.
- Task: documentation des features.
- Task: orchestration locale et CI.
