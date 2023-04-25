import { Meta, StoryFn } from '@storybook/vue3';
import { CThemeProvider } from '@/components/c-theme-provider';
import { CSelect } from './c-select';

export default {
  title: 'CSelect',
  component: CSelect,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      description: 'Changes the color of the text field',
      defaultValue: 'primary',
      table: {
        type: {
          summary: '"primary" | "sucess" | "info" | "warning" | "danger"',
        },
        defaultValue: { summary: '"primary"' },
      },
    },
    error: {
      control: { type: 'boolean' },
      description: "Indicates if there's an error with the given input",
      defaultValue: false,
      table: {
        type: { summary: 'false | true' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      description: 'Changes the size of the text field',
      defaultValue: 'medium',
      table: {
        type: { summary: '"medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Sets a helper text displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof CSelect>;

export const Template: StoryFn<typeof CSelect> = (args) => ({
  components: { CSelect },
  setup() {
    return () => (
      <CThemeProvider>
        <CSelect {...args}>
          <option value="car">Car</option>
          <option value="plane">Plane</option>
          <option value="train">Train</option>
        </CSelect>
      </CThemeProvider>
    );
  },
});
