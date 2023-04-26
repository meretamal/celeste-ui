import { Meta, StoryFn } from '@storybook/vue3';
import { CThemeProvider } from '@/components/c-theme-provider';
import { CTextField } from './c-text-field';

export default {
  title: 'CTextField',
  component: CTextField,
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Sets the disabled property of the input',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'email',
        'date',
        'datetime-local',
        'month',
        'password',
        'tel',
        'time',
        'url',
        'week',
      ],
      description: 'Sets the input native type',
      defaultValue: 'text',
      table: {
        type: {
          summay:
            '"text" | "email" | "date" | "datetime-local" | "month" | "password" | "tel" | "time" | "url" | "week"',
        },
        defaultValue: { summary: '"text"' },
      },
    },
    label: {
      control: { type: 'text' },
      description: "Sets the input's label",
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Sets a helper text displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: "Sets the input's placehoder",
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof CTextField>;

export const Template: StoryFn<typeof CTextField> = (args) => ({
  components: { CTextField },
  setup() {
    return () => (
      <CThemeProvider>
        <CTextField {...args} />
      </CThemeProvider>
    );
  },
});
