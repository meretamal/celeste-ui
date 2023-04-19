import { Meta, StoryFn } from '@storybook/vue3';
import { CTextField } from './c-text-field';
import { CCssReset } from '../c-css-reset';

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
          summary: '"primary" | "sucess" | "info" | "warning" | ""danger"',
        },
        defaultValue: { summary: '"primary"' },
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
  },
} as Meta<typeof CTextField>;

export const Template: StoryFn<typeof CTextField> = (args) => ({
  components: { CTextField },
  setup() {
    return () => (
      <CCssReset>
        <CTextField {...args}>Button</CTextField>
      </CCssReset>
    );
  },
});
