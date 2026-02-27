# Documentation Storybook

Storybook est l'outil de documentation et de développement des composants UI du projet. Il permet de visualiser, tester et documenter chaque composant de façon isolée, sans avoir à lancer l'application complète.

---

## Sommaire

1. [Lancer Storybook](#1-lancer-storybook)
2. [Build statique](#2-build-statique)
3. [Structure des stories](#3-structure-des-stories)
4. [Écrire une story](#4-écrire-une-story)
5. [Composants documentés](#5-composants-documentés)
6. [Conventions du projet](#6-conventions-du-projet)
7. [Addons disponibles](#7-addons-disponibles)
8. [FAQ](#8-faq)

---

## 1. Lancer Storybook

Depuis la racine du projet :

```bash
cd front
npm run storybook
```

Storybook est ensuite accessible à l'adresse :

```
http://localhost:6006
```

> **Note :** L'application Vue principale (`http://localhost:5173`) et Storybook sont deux processus indépendants. Tu peux les lancer en parallèle.

---

## 2. Build statique

Pour générer une version statique exportable de Storybook (utile en CI/CD ou pour partager avec des non-devs) :

```bash
cd front
npm run build-storybook
```

Le résultat est généré dans le dossier `front/storybook-static/`.

---

## 3. Structure des stories

Les fichiers de stories suivent la convention suivante :

```
front/src/
├── components/
│   ├── HelloWorld.vue
│   ├── HelloWorld.stories.ts        ← story du composant
│   ├── WelcomeItem.vue
│   ├── WelcomeItem.stories.ts       ← story du composant
│   └── icons/
│       ├── IconDocumentation.vue
│       └── IconDocumentation.stories.ts
└── stories/                         ← stories globales / pages
```

**Règle :** chaque fichier de story porte le même nom que son composant avec le suffixe `.stories.ts`, placé **au même niveau** que le composant.

---

## 4. Écrire une story

### Story minimale

```ts
// MonComposant.stories.ts
import MonComposant from './MonComposant.vue'

export default {
  title: 'Components/MonComposant',  // chemin dans le menu Storybook
  component: MonComposant,
  tags: ['autodocs'],                // génère une page de doc automatique
}

export const Default = {}           // variante par défaut (utilise les args par défaut)
```

### Story avec props contrôlables (controls)

```ts
import MonComposant from './MonComposant.vue'

export default {
  title: 'Components/MonComposant',
  component: MonComposant,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'danger'],
    },
  },
  args: {
    label: 'Cliquer ici',
    disabled: false,
    variant: 'primary',
  },
}

export const Default = {}

export const Disabled = {
  args: { disabled: true },
}

export const Danger = {
  args: { variant: 'danger' },
}
```

### Story avec slots (render function)

Quand un composant utilise des slots, il faut utiliser une `render` function :

```ts
import WelcomeItem from './WelcomeItem.vue'
import MonIcone from './icons/MonIcone.vue'

export default {
  title: 'Components/WelcomeItem',
  component: WelcomeItem,
  tags: ['autodocs'],
  render: (args) => ({
    components: { WelcomeItem, MonIcone },
    setup() { return { args } },
    template: `
      <WelcomeItem>
        <template #icon><MonIcone /></template>
        <template #heading>{{ args.heading }}</template>
        {{ args.content }}
      </WelcomeItem>
    `,
  }),
  args: {
    heading: 'Titre',
    content: 'Description du composant.',
  },
}

export const Default = {}
```

---

## 5. Composants documentés

| Composant | Fichier story | Variantes disponibles |
|---|---|---|
| `HelloWorld` | `components/HelloWorld.stories.ts` | `Default`, `SuccessMessage` |
| `WelcomeItem` | `components/WelcomeItem.stories.ts` | `Default`, `SupportVariant` |
| `IconDocumentation` | `components/icons/IconDocumentation.stories.ts` | `Default` |

---

## 6. Conventions du projet

| Règle | Détail |
|---|---|
| **Fichier story obligatoire** | Tout composant réutilisable dans `components/` doit avoir sa story |
| **Nommage** | `NomComposant.stories.ts` au même niveau que `NomComposant.vue` |
| **`tags: ['autodocs']`** | Toujours présent pour générer la page de doc automatique |
| **`title`** | Respecter la hiérarchie : `Components/`, `Components/Icons/`, `Layout/`, `Views/` |
| **TypeScript** | Les stories sont en `.stories.ts`, jamais en `.stories.js` |
| **Args par défaut** | Toujours définir des `args` représentatifs dans le `default export` |
| **PR** | Toute PR modifiant un composant doit mettre à jour ou créer sa story associée |

### Hiérarchie de `title` à respecter

```
Components/         → composants génériques réutilisables
Components/Icons/   → icônes SVG
Layout/             → composants de mise en page
Views/              → pages entières (rarement documentées dans Storybook)
```

---

## 7. Addons disponibles

Les addons suivants sont configurés dans le projet :

| Addon | Rôle |
|---|---|
| **Essentials** (`@storybook/addon-essentials`) | Controls, Actions, Docs, Viewport, Backgrounds, Toolbars |
| **A11y** (`@storybook/addon-a11y`) | Audit d'accessibilité automatique sur chaque story |
| **Interactions** (`@storybook/addon-interactions`) | Simulation d'interactions utilisateur dans les stories |

### Utiliser les Controls

Dans le panneau **Controls** (onglet en bas de l'UI), tu peux modifier les props en temps réel sans toucher au code. Cela nécessite que des `argTypes` soient définis dans la story.

### Utiliser A11y

L'onglet **Accessibility** affiche les violations d'accessibilité WCAG détectées automatiquement. Toute violation de niveau **Critical** ou **Serious** doit être corrigée avant la PR.

---

## 8. FAQ

**Q : Ma story n'apparaît pas dans Storybook.**  
R : Vérifie que le fichier se termine bien en `.stories.ts` et que le `title` est correctement renseigné dans le `default export`.

**Q : Storybook plante au démarrage.**  
R : Assure-toi d'avoir fait `npm install` dans le dossier `front/`. Les packages Storybook sont téléchargés via `npx` au premier lancement, ce qui peut prendre quelques secondes.

**Q : Comment documenter un composant qui utilise Pinia ?**  
R : Utilise la `render` function et fournis un store mock dans le `setup()`. Exemple :
```ts
import { createPinia, setActivePinia } from 'pinia'

render: () => ({
  setup() { setActivePinia(createPinia()) },
  template: `<MonComposant />`
})
```

**Q : Quelle est la différence entre une story et un test ?**  
R : Une story est une **documentation visuelle et interactive** du composant. Les tests (Playwright) vérifient le **comportement fonctionnel**. Les deux sont complémentaires.

**Q : Dois-je relancer Storybook après avoir ajouté une story ?**  
R : Non, Storybook recharge automatiquement (hot reload) dès qu'un fichier `.stories.ts` est modifié ou créé.

---

## Liens utiles

- [Documentation officielle Storybook](https://storybook.js.org/docs)
- [Storybook pour Vue 3](https://storybook.js.org/docs/get-started/frameworks/vue3-vite)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
- [ArgTypes reference](https://storybook.js.org/docs/api/arg-types)
- [ONBOARDING.md](../ONBOARDING.md)
- [CONTRIBUTING.md](../CONTRIBUTING.md)
