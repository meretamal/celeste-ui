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
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Checks the input in the initial render',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Sets the disabled property of the checkbox',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
    label: {
      control: { type: 'text' },
      description: 'Sets the checkbox label',
      table: {
        type: { summary: 'string' },
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
