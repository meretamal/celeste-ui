import { Meta, StoryFn } from '@storybook/vue3';
import { CTypography } from './c-typograpy';
import { CCSSBaseline } from '../c-css-baseline';

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
    fontWeight: {
      control: { type: 'select' },
      options: ['thin', 'light', 'regular', 'bold', 'black'],
      description: 'Changes the font weight of the text displayed',
      defaultValue: 'regular',
      table: {
        type: {
          summary: '"thin" | "light" | "regular" | "bold" | "black"',
        },
        defaultValue: { summary: '"regular"' },
      },
    },
  },
} as Meta<typeof CTypography>;

export const Template: StoryFn<typeof CTypography> = (args) => ({
  components: { CTypography },
  setup() {
    return () => (
      <CCSSBaseline>
        <CTypography {...args}>Text</CTypography>
      </CCSSBaseline>
    );
  },
});
