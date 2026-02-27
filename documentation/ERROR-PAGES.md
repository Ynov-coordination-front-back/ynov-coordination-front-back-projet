# Gestion des pages d'erreur (front)

Ce document explique comment les codes d'erreur HTTP sont gérés côté front, comment tester les pages d'erreur en navigation réelle et dans Storybook, et comment déclencher ces erreurs depuis le code applicatif.

---

## Sommaire

1. [Pages d'erreur disponibles](#1-pages-derreur-disponibles)
2. [Tester en navigation réelle](#2-tester-en-navigation-réelle)
3. [Visualiser dans Storybook](#3-visualiser-dans-storybook)
4. [Comment déclencher une erreur depuis le code](#4-comment-déclencher-une-erreur-depuis-le-code)
5. [Ajouter une nouvelle page d'erreur](#5-ajouter-une-nouvelle-page-derreur)

---

## 1. Pages d'erreur disponibles

| Code | Vue | Route | Déclenchement |
|------|-----|-------|---------------|
| **404** | `ErrorNotFoundView.vue` | toute URL inconnue | automatique (catch-all router) |
| **500** | `ErrorServerView.vue` | `/500` | manuel depuis le code |

### 404 — Page introuvable

Affichée automatiquement quand l'utilisateur navigue vers une URL qui n'existe pas dans le router Vue.

- **Bouton "Retour à l'accueil"** → redirige vers `/`
- **Bouton "Page précédente"** → équivalent du bouton retour du navigateur

### 500 — Erreur serveur

Affichée quand une requête API échoue de façon critique (erreur réseau, serveur down, réponse `5xx`).

- **Bouton "Retour à l'accueil"** → redirige vers `/`
- **Bouton "Réessayer"** → recharge la page courante

---

## 2. Tester en navigation réelle

Lance l'application :

```bash
cd front
npm run dev
```

### Tester le 404

Navigue vers n'importe quelle URL inexistante :

```
http://localhost:5173/cette-page-nexiste-pas
http://localhost:5173/todos/999
http://localhost:5173/admin
```

→ La page **404** s'affiche automatiquement grâce à la route catch-all `/:pathMatch(.*)*`.

### Tester le 500

Navigue directement vers la route dédiée :

```
http://localhost:5173/500
```

→ La page **500** s'affiche. En production, tu n'accèdes jamais à cette URL directement — c'est le code applicatif qui y redirige en cas d'erreur API.

---

## 3. Visualiser dans Storybook

Lance Storybook :

```bash
cd front
npm run storybook
```

Les deux pages sont documentées dans la section **Views** du menu :

- `Views / ErrorNotFoundView` → aperçu de la page 404
- `Views / ErrorServerView` → aperçu de la page 500

> Les stories intègrent un router mock et Pinia pour que les boutons de navigation fonctionnent correctement dans l'environnement Storybook.

---

## 4. Comment déclencher une erreur depuis le code

### Redirection vers 404

Si une ressource n'est pas trouvée après un appel API (réponse `404` du back) :

```ts
import { useRouter } from 'vue-router'

const router = useRouter()

async function loadTodo(id: string) {
  const res = await fetch(`http://localhost:3000/todos/${id}`)

  if (res.status === 404) {
    router.push({ name: 'not-found' })
    return
  }

  // ...traitement normal
}
```

### Redirection vers 500

Si le serveur répond avec une erreur `5xx` ou si le réseau est inaccessible :

```ts
import { useRouter } from 'vue-router'

const router = useRouter()

async function loadTodo(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`)

    if (res.status >= 500) {
      router.push({ name: 'error-server' })
      return
    }

    // ...traitement normal
  } catch {
    // Erreur réseau (serveur down, CORS bloqué, etc.)
    router.push({ name: 'error-server' })
  }
}
```

### Pattern complet recommandé

Pour centraliser la gestion d'erreurs dans un store Pinia :

```ts
// stores/api.ts
import { useRouter } from 'vue-router'

export async function apiFetch(url: string, options?: RequestInit) {
  const router = useRouter()

  try {
    const res = await fetch(url, options)

    if (res.status === 404) {
      router.push({ name: 'not-found' })
      return null
    }

    if (res.status >= 500) {
      router.push({ name: 'error-server' })
      return null
    }

    return res.json()
  } catch {
    router.push({ name: 'error-server' })
    return null
  }
}
```

---

## 5. Ajouter une nouvelle page d'erreur

Si tu as besoin d'une page spécifique (ex: `403 Forbidden`) :

**1. Créer la vue** dans `src/views/` :

```
src/views/ErrorForbiddenView.vue
```

**2. Enregistrer la route** dans `src/router/index.ts` :

```ts
{
  path: '/403',
  name: 'forbidden',
  component: () => import('../views/ErrorForbiddenView.vue'),
},
```

> ⚠️ La route catch-all `/:pathMatch(.*)*` doit **toujours rester en dernier** dans le tableau `routes`.

**3. Créer la story** dans `src/views/` :

```
src/views/ErrorForbiddenView.stories.ts
```

**4. Mettre à jour** le tableau des pages d'erreur dans ce fichier de doc.

---

## Liens utiles

- [Router Vue 3 — Routes catch-all](https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route)
- [STORYBOOK.md](./STORYBOOK.md) — Comment écrire une story avec router mock
- [ONBOARDING.md](../ONBOARDING.md)
