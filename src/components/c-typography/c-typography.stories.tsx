import { Meta, StoryFn } from '@storybook/vue3';
import { CTypography } from './c-typograpy';
import { CCssBaseline } from '../c-css-baseline';

export default {
  title: 'CTypography',
  component: CTypography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b1', 'b2'],
      description: 'Changes the variant of the text displayed',
      defaultValue: 'b1',
      table: {
        type: {
          summary: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b1" | "b2"',
        },
        defaultValue: { summary: '"b1"' },
      },
    },
  },
} as Meta<typeof CTypography>;

export const Template: StoryFn<typeof CTypography> = (args) => ({
  components: { CTypography },
  setup() {
    return () => (
      <CCssBaseline>
        <CTypography {...args}>Text</CTypography>
      </CCssBaseline>
    );
  },
});
