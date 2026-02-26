import IconDocumentation from './IconDocumentation.vue'

export default {
  title: 'Components/Icons/IconDocumentation',
  component: IconDocumentation,
  tags: ['autodocs'],
  render: () => ({
    components: { IconDocumentation },
    template: `
      <div style="padding: 12px; color: #1f2937;">
        <IconDocumentation />
      </div>
    `,
  }),
}

export const Default = {}
