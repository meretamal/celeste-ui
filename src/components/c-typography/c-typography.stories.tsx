import { Meta, StoryFn } from '@storybook/vue3';
import { CThemeProvider } from '@/components/c-theme-provider';
import { CTypography } from './c-typograpy';

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
    align: {
      control: { type: 'select' },
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      description: 'Handles the alignment of the text',
      defaultValue: 'inherit',
      table: {
        type: {
          summary: '"center" | "inherit" | "justify" | "left" | "right"',
        },
        defaultValue: { summary: '"inherit"' },
      },
    },
    noWrap: {
      control: { type: 'boolean' },
      description: 'Truncate the text using ellipsis',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
    },
  },
} as Meta<typeof CTypography>;

export const Template: StoryFn<typeof CTypography> = (args) => ({
  components: { CTypography },
  setup() {
    return () => (
      <CThemeProvider>
        <CTypography {...args}>Text</CTypography>
      </CThemeProvider>
    );
  },
});
