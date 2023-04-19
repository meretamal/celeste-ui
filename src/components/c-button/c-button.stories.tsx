import { Meta, StoryFn } from '@storybook/vue3';
import { CButton } from './c-button';
import { CCssReset } from '../c-css-reset';

export default {
  title: 'CButton',
  component: CButton,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      description: 'Changes the size of the button',
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
      description: 'Changes the size of the button',
      defaultValue: 'medium',
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Sets the width to 100%',
      defaultValue: false,
      table: {
        type: { summary: 'false | true' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} as Meta<typeof CButton>;

export const Template: StoryFn<typeof CButton> = (args) => ({
  components: { CButton },
  setup() {
    return () => (
      <CCssReset>
        <CButton {...args}>Button</CButton>
      </CCssReset>
    );
  },
});
