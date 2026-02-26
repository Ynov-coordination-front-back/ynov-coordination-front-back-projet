import HelloWorld from './HelloWorld.vue'

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  args: {
    msg: 'Bienvenue sur la To-Do App',
  },
}

export const Default = {}

export const SuccessMessage = {
  args: {
    msg: 'Composant documente dans Storybook',
  },
}
