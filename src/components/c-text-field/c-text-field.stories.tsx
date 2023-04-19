import { Meta, StoryFn } from '@storybook/vue3';
import { CTextField } from './c-text-field';
import { CCssReset } from '../c-css-reset';

export default {
  title: 'CTextField',
  component: CTextField,
  argTypes: {},
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
