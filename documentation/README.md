# Documentation Projet

Cette documentation complète le README racine avec les artefacts attendus pour le TD Road to MVP.

## Index

- [Onboarding](./ONBOARDING.md)
- [Pilotage Projet](./PROJECT_MANAGEMENT.md)
- [Stratégie Error Management](./ERROR_MANAGEMENT.md)
- [Documentation des Features](./FEATURES.md)
- [Retour de Stage](./STAGE_FEEDBACK.md)

## Documentation front

- Storybook: `cd front && npm run storybook`
- Build statique Storybook: `cd front && npm run build-storybook`

## Documentation back

- Swagger UI: `http://localhost:3000/docs`
- Healthcheck: `http://localhost:3000/api/health`

## Orchestration

- Mode local simple: `make dev`
- Mode orchestré: `docker compose up --build`
