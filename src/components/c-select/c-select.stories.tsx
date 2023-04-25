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
      description: 'Changes the color of the select field',
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
      description: 'Changes the size of the select field',
      defaultValue: 'medium',
      table: {
        type: { summary: '"medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
    },
    label: {
      control: { type: 'text' },
      description: "Sets the select field's label",
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Sets a helper text displayed below the select field',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: "Sets the select's placeholder",
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
