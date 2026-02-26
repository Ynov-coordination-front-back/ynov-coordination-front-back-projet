import WelcomeItem from './WelcomeItem.vue'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconSupport from './icons/IconSupport.vue'

type StoryArgs = {
  heading: string
  content: string
  tone: 'default' | 'support'
}

export default {
  title: 'Components/WelcomeItem',
  component: WelcomeItem,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    content: { control: 'text' },
    tone: {
      control: 'inline-radio',
      options: ['default', 'support'],
    },
  },
  args: {
    heading: 'Documentation',
    content: 'Consultez les consignes projet pour contribuer efficacement.',
    tone: 'default',
  },
  render: (args: StoryArgs) => ({
    components: { WelcomeItem, IconDocumentation, IconSupport },
    setup() {
      return { args }
    },
    template: `
      <WelcomeItem>
        <template #icon>
          <IconSupport v-if="args.tone === 'support'" />
          <IconDocumentation v-else />
        </template>
        <template #heading>{{ args.heading }}</template>
        {{ args.content }}
      </WelcomeItem>
    `,
  }),
}

export const Default = {}

export const SupportVariant = {
  args: {
    heading: 'Support',
    content: 'Contactez l equipe projet en cas de blocage.',
    tone: 'support',
  },
}
