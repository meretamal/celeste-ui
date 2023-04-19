import { defineComponent, provide } from 'vue';
import { baseTheme } from '../../theme';

export const CProvider = defineComponent({
  setup(_, { slots }) {
    provide('theme', baseTheme);
    return () => slots.default?.();
  },
});
