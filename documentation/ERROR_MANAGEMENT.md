# Strategie Error Management

## Objectifs

- Aider l'utilisateur a comprendre l'erreur et la prochaine action.
- Aider le developpeur a identifier rapidement la source du probleme.
- Garder un contrat coherent entre front, back, Swagger et tests.

## Contrat d'erreur cible

```json
{
  "success": false,
  "error": {
    "code": "TODO_TITLE_REQUIRED",
    "message": "Le titre est obligatoire",
    "details": {},
    "requestId": "optional-correlation-id"
  }
}
```

## Regles UX

- Un message utilisateur doit etre actionnable.
- Les erreurs techniques ne doivent pas etre affichees brutes dans l'interface.
- Les erreurs de validation restent pres du champ concerne.
- Les erreurs globales bloquantes apparaissent dans une zone visible.
- Les erreurs reseau doivent proposer une action de retry.

## Taxonomie retenue

- `400`: validation ou payload invalide.
- `404`: ressource introuvable.
- `409`: conflit metier.
- `422`: payload syntaxiquement valide mais semantiquement incoherent.
- `500`: erreur technique non prevue.
- `503`: service indisponible.

## Cas a couvrir en priorite sur le MVP

- Creation d'un todo sans titre.
- Consultation ou suppression d'un todo inexistant.
- Erreur reseau entre front et back.
- Reponse backend inattendue.

## Implementation cible

### Back

- Centraliser les erreurs dans un middleware Express.
- Utiliser des codes metier stables.
- Logger les erreurs techniques avec contexte.
- Documenter dans Swagger les principales reponses d'erreur.

### Front

- Mapper les `error.code` du back vers des messages UX.
- Distinguer validation, erreur reseau et erreur inconnue.
- Reutiliser un composant commun de feedback.

### Tests

- Unitaire: generation des erreurs standardisees.
- E2E: verification du code HTTP et du body d'erreur.

## Done pour la contrainte TD

- Strategie documentee dans le repo.
- Ticket fullstack dedie cree dans l'outil projet.
- Cas d'erreur critiques couverts par des tests.
