# Guide de Contribution 🤝

Ce document décrit les règles et processus à suivre pour contribuer au projet To-Do List.

---

## 🟦 Cycle de vie d'un ticket

Nous utilisons **GitHub Projects** (Kanban) pour suivre l'avancement des tickets.

### États du ticket

```
Backlog → Ready → In Progress → In Review → Done → Released
```

| État | Description |
|------|-------------|
| **Backlog** | Ticket rédigé, champs obligatoires remplis, prêt à être pris en sprint |
| **Ready** | Ticket sélectionné pendant le planning, assigné à quelqu'un |
| **In Progress** | Travail en cours, une seule personne responsable |
| **In Review** | Code terminé, PR ouverte, relecture / test fonctionnel en cours |
| **Done** | Validé, fonctionnel, potentiellement livrable |
| **Released** | Ticket déployé en production |

### Champs obligatoires d'un ticket

| Champ | Description |
|-------|-------------|
| **Titre** | Court, actionnable (ex: *"Implémenter la page de login"*) |
| **Description** | Contexte + Besoin + Résultat attendu |
| **Type fonctionnel** | Front / Back / Fullstack |
| **Estimation** | En points : 1, 2, 3 ou 5 |
| **Priorité** | Basse / Moyenne / Haute / Critique |
| **Rapporteur** | Qui a créé le ticket |
| **Assigné** | Responsable du ticket (1 seul) |

---

## 📋 Definition of Ready (DoR)

### ✅ DoR Générale (socle commun)

Un ticket **ne peut entrer en sprint** que s'il respecte **tous** ces critères :

- [ ] Titre clair et actionnable
- [ ] Description compréhensible (contexte + besoin + résultat)
- [ ] Type fonctionnel renseigné (Front / Back / Fullstack)
- [ ] Estimation définie (1, 2, 3 ou 5 points)
- [ ] Priorité définie
- [ ] Rapporteur identifié
- [ ] Assigné défini
- [ ] Ticket compréhensible **sans explication orale**

> ⛔ Sans ça : ticket **refusé** du sprint.

### 🟣 DoR — Epic

| Critère | Obligatoire |
|---------|:-----------:|
| Objectif métier clairement défini | ✅ |
| Valeur apportée identifiée | ✅ |
| Découpage prévu (stories ou tâches) | ✅ |
| Estimation | ❌ |
| Assigné | ❌ |

> ⚠️ Un Epic **n'entre pas dans un sprint**. Il sert de conteneur pour regrouper des User Stories et des Tâches.

### 🔵 DoR — User Story

- [ ] Formulée du point de vue utilisateur (*En tant que... Je veux... Afin de...*)
- [ ] Critères d'acceptation présents
- [ ] Valeur métier explicite
- [ ] Dépendances identifiées
- [ ] Taille raisonnable (sprint-compatible)

### 🟡 DoR — Tâche

- [ ] Objectif technique clair
- [ ] Périmètre bien défini
- [ ] Pas de dépendance bloquante
- [ ] Résultat attendu explicite

### 🔴 DoR — Bugfix

- [ ] Bug reproductible
- [ ] Étapes de reproduction décrites
- [ ] Comportement attendu vs observé
- [ ] Environnement concerné précisé
- [ ] Gravité identifiée

### 🔥 DoR — Hotfix (allégé mais strict)

- [ ] Impact critique identifié
- [ ] Justification de l'urgence
- [ ] Description minimale mais claire
- [ ] Assigné immédiat

> ⚡ Peut entrer dans le sprint sans toutes les infos, mais avec **obligation de compléter après**.

---

## ✅ Definition of Done (DoD)

### DoD Générale (socle qualité)

Un ticket est considéré comme **terminé** si :

- [ ] Code implémenté
- [ ] Fonctionnel testé
- [ ] Aucun bug bloquant connu
- [ ] Ticket relu / validé (Code Review)
- [ ] Branche fusionnée
- [ ] Ticket déplacé en "Done"

### 🟣 DoD — Epic

- [ ] Toutes les stories associées terminées
- [ ] Objectif initial atteint
- [ ] Valeur livrée démontrable

### 🔵 DoD — User Story

- [ ] Tous les critères d'acceptation validés
- [ ] Fonction utilisable par un utilisateur
- [ ] Test fonctionnel réalisé
- [ ] Conforme à la maquette / besoin

### 🟡 DoD — Tâche

- [ ] Travail technique terminé
- [ ] Aucun impact négatif sur l'existant
- [ ] Documentation mise à jour si nécessaire

### 🔴 DoD — Bugfix

- [ ] Bug non reproductible
- [ ] Cas de test ajouté si pertinent
- [ ] Aucune régression détectée

### 🔥 DoD — Hotfix

- [ ] Problème critique résolu
- [ ] Service rétabli
- [ ] Ticket de suivi ou documentation créée

---

## 🔀 Processus de Pull Request

1. **Créer sa branche** depuis `develop` (automatique via GitHub Projects ou manuellement)
2. **Développer** en respectant les [conventions techniques](./GUIDELINES.md)
3. **Ouvrir une Pull Request** vers `develop`
   - Remplir le template de PR
   - Lier l'issue avec `Closes #XX`
   - S'assurer que la checklist est cochée
4. **Code Review** par au moins 1 membre de l'équipe
5. **Corrections** si demandées
6. **Merge** une fois la review validée

### Convention de nommage des PR

```
type(Scope): TICKET-ID Description
```

**Exemples :**
- `feat(Listing): TICKET-01 Ajout d'un tableau pour lister les tâches`
- `fix(API): TICKET-04 Correction du format de date`

---

## 🏷️ Labels utilisés

| Label | Description |
|-------|-------------|
| `epic` | Epic — objectif métier haut niveau |
| `user-story` | User Story — besoin utilisateur |
| `task` | Tâche technique |
| `bug` | Correction de bug |
| `hotfix` | Correction urgente |
| `front` | Concerne le front-end |
| `back` | Concerne le back-end |
| `fullstack` | Concerne front et back |
| `priority:critical` | Priorité critique |
| `priority:high` | Priorité haute |
| `priority:medium` | Priorité moyenne |
| `priority:low` | Priorité basse |
