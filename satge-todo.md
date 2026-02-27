# Planning Stagiaire - Vendredi 27 fevrier 2026

## Objectif de la journee

- Onboarder le stagiaire sur le projet
- Lui faire decouvrir l architecture et le workflow equipe
- Lui faire realiser ses premiers tickets front autour des composants de base et de Storybook

## Agenda detaille (journee type)

| Heure | Activite | Resultat attendu |
|---|---|---|
| 09:00-09:30 | Accueil + contexte projet + outils | Le stagiaire comprend le produit et le cadre de travail |
| 09:30-10:15 | Setup local (`make install`, `make dev`) | Front/back demarrent en local |
| 10:15-10:45 | Lecture guide (`README`, `CONTRIBUTING`, `GUIDELINES`, `ONBOARDING`) | Workflow tickets/PR compris |
| 10:45-11:00 | Pause + Q/R | Blocages leves |
| 11:00-12:30 | Realisation tickets coeur (epic ci-dessous) | 2 a 3 tickets termines |
| 12:30-13:30 | Pause dejeuner | - |
| 13:30-15:30 | Realisation tickets coeur | 2 a 3 tickets termines |
| 15:30-15:45 | Pause | - |
| 15:45-17:00 | Tickets stretch si avance | 1 a 3 tickets bonus |
| 17:00-17:30 | Debrief + revue code + plan du lendemain | PR ouverte et feedback formule |

## Epic

- **Titre**: Composants de base
- **Type**: epic, front
- **Objectif metier**: poser un socle UI reutilisable et documente dans Storybook pour accelerer les futures user stories front.

## User Stories (coeur de journee)

### US-BASE-01 - Creer les composants UI fondamentaux

En tant que developpeur front, je veux disposer de composants de base reutilisables afin de construire rapidement les ecrans metier.

Critere d acceptation:
- Composants `BaseButton`, `BaseInput`, `BaseBadge` crees
- API de props simple et coherente
- Styles conformes au design actuel du projet

### US-BASE-02 - Documenter chaque composant dans Storybook

En tant que developpeur front, je veux voir les variantes des composants dans Storybook afin de comprendre rapidement leur usage.

Critere d acceptation:
- Chaque composant de base a une story `.stories.ts`
- Les variants principaux sont visibles (taille/etat/variant)
- La documentation auto (`autodocs`) est active

### US-BASE-03 - Integrer les composants de base dans un ecran existant

En tant qu utilisateur, je veux voir les composants de base utilises dans une vue afin de valider leur rendu en contexte reel.

Critere d acceptation:
- Au moins une vue existante utilise les nouveaux composants
- Aucun comportement regressif evident
- Build front OK

## Tickets - Capacite cible (1 journee)

| ID | Type | Titre | Estimation | Depends on |
|---|---|---|---|---|
| T-STG-01 | task | Initialiser dossier `components/base` + conventions de nommage | 1 pt | - |
| T-STG-02 | task | Creer `BaseButton` (props: variant, size, disabled) | 2 pts | T-STG-01 |
| T-STG-03 | task | Creer `BaseInput` (label, placeholder, erreur) | 2 pts | T-STG-01 |
| T-STG-04 | task | Creer `BaseBadge` (success, warning, danger) | 1 pt | T-STG-01 |
| T-STG-05 | task | Ajouter les stories Storybook pour `BaseButton`, `BaseInput`, `BaseBadge` | 2 pts | T-STG-02, T-STG-03, T-STG-04 |
| T-STG-06 | task | Integrer les composants sur une vue de demo (Home ou About) | 2 pts | T-STG-05 |

Total cible: **10 points** (coeur de journee)

## Tickets Stretch (+50% si tres productif)

| ID | Type | Titre | Estimation | Depends on |
|---|---|---|---|---|
| T-STG-07 | task | Creer `BaseCard` et sa story (header/body/actions) | 2 pts | T-STG-05 |
| T-STG-08 | task | Creer `BaseModal` et sa story (ouverture/fermeture) | 2 pts | T-STG-07 |
| T-STG-09 | task | Passer un check accessibilite de base (focus/aria) sur stories | 1 pt | T-STG-05 |

Total stretch: **5 points** (environ +50%)

## Definition of Done (rappel pour chaque ticket)

- [ ] Code implemente
- [ ] Storybook mis a jour si composant UI
- [ ] Lint OK
- [ ] Test manuel local OK
- [ ] PR ouverte avec `Closes #<issue>`
