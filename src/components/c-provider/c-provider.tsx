import { PropType, defineComponent, provide, computed, watch } from 'vue';
import merge from 'lodash/merge';
import { baseTheme } from '../../theme';
import { Theme, DeepPartial } from '../../types';

export const CProvider = defineComponent({
  props: {
    theme: {
      type: Object as PropType<DeepPartial<Theme>>,
      default: null,
    },
  },
  setup(props, { slots }) {
    const theme = computed<Theme>(() => merge(baseTheme, props.theme));
    watch(theme, () => provide('theme', theme.value));

    return () => slots.default?.();
  },
});
