import { Meta, StoryFn } from '@storybook/vue3';
import { CThemeProvider } from '@/components/c-theme-provider';
import { CCheckbox } from './c-checkbox';

export default {
  title: 'CCheckbox',
  component: CCheckbox,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      description: 'Changes the color of the checkbox input',
      defaultValue: 'primary',
      table: {
        type: {
          summary: '"primary" | "sucess" | "info" | "warning" | ""danger"',
        },
        defaultValue: { summary: '"primary"' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Changes the size of the checkboc input',
      defaultValue: 'medium',
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
    },
  },
} as Meta<typeof CCheckbox>;

export const Template: StoryFn<typeof CCheckbox> = (args) => ({
  components: { CCheckbox },
  setup() {
    return () => (
      <CThemeProvider>
        <CCheckbox {...args} />
      </CThemeProvider>
    );
  },
});
