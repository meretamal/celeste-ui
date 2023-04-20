import { PropType, defineComponent, provide, computed } from 'vue';
import merge from 'lodash/merge';
import { baseTheme } from '../../theme';
import { Theme, DeepPartial } from '../../types';

export const CProvider = defineComponent({
  name: 'CProvider',
  props: {
    theme: {
      type: Object as PropType<DeepPartial<Theme>>,
      default: () => {},
    },
  },
  setup(props, { slots }) {
    const theme = computed<Theme>(() => merge(baseTheme, props.theme));
    provide('theme', theme);
    return () => slots.default?.();
  },
});
