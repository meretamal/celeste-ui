import { Meta, StoryFn } from '@storybook/vue3';
import { CButton } from './c-button';
import { CCssBaseline } from '../c-css-baseline';

export default {
  title: 'CButton',
  component: CButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Changes the size of the button',
      defaultValue: 'medium',
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
} as Meta<typeof CButton>;

export const Template: StoryFn<typeof CButton> = (args) => ({
  components: { CButton },
  setup() {
    return () => (
      <CCssBaseline>
        <CButton {...args}>Button</CButton>
      </CCssBaseline>
    );
  },
});
