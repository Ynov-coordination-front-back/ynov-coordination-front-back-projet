# Retour de Stage

## Retour du maitre de stage

Le stagiaire a pu prendre en charge une US fullstack grace a la documentation initiale, mais plusieurs points ont montre que la delegation depend fortement de la qualite du cadrage des erreurs.

## Points positifs

- L'installation du projet est simple avec `make install` et `make dev`.
- Les templates d'issues guident correctement la redaction.
- Swagger facilite la comprehension des endpoints.
- Le workflow PR avec issue liee impose une discipline utile.

## Points a ameliorer

- Les cas d'erreur doivent etre decrits des le ticket, pas decouverts pendant le dev.
- Le front doit exposer davantage de composants documentes dans Storybook.
- Les conventions de tests doivent etre visibles plus tot dans l'onboarding.
- Il faut expliciter qui met a jour la doc lorsqu'un contrat API change.

## Actions concretes retenues

- Ajouter une strategie d'error management versionnee.
- Ajouter un parcours d'onboarding plus prescriptif.
- Exiger au minimum un test de non regression sur toute PR fullstack.
- Garder une US stagiaire de taille limitee avec dependances explicites.
