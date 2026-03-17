# Onboarding

## Objectif

Permettre a un nouvel arrivant de contribuer sans explication orale et de produire une PR conforme au workflow du projet.

## Parcours de demarrage

1. Lire le [README](../README.md), puis [CONTRIBUTING](../CONTRIBUTING.md) et [GUIDELINES](../GUIDELINES.md).
2. Verifier les prerequis: Node.js, npm, Make, Git.
3. Cloner le repo et copier `.env.example` vers `.env`.
4. Installer les dependances avec `make install`.
5. Lancer le projet avec `make dev`.
6. Verifier le front sur `http://localhost:5173`.
7. Verifier le back sur `http://localhost:3000/api/health`.
8. Verifier la doc API sur `http://localhost:3000/docs`.
9. Lancer la documentation front avec `cd front && npm run storybook`.
10. Lancer les controles qualite:
    - `make lint`
    - `cd back && npm test`
11. Creer ou prendre un ticket dans GitHub Projects seulement s'il respecte la DoR.
12. Creer une branche via `./run branch <type> <id>`.
13. Developper la tache en respectant le design system Storybook et la strategie d'error management.
14. Ouvrir une PR vers `develop` avec `Closes #XX`.

## Check-list nouvel arrivant

- Je sais ou trouver les conventions de code.
- Je sais lancer front, back, Storybook et Swagger.
- Je connais le cycle de vie d'un ticket.
- Je sais comment creer une branche et nommer mes commits.
- Je sais quels tests executer avant ma PR.

## Definition of Ready avant de commencer

- Le ticket est comprehensible sans oral.
- Les cas d'erreur sont explicitement decrits.
- Les impacts front, back et tests sont identifies.
- Les composants UI existants ont ete verifies dans Storybook.

## Livrable attendu d'un nouvel arrivant

- Une PR liee a une issue.
- Des tests adaptes au changement.
- Une mise a jour de la documentation si le comportement change.
