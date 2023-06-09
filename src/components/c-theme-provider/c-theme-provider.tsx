import { PropType, defineComponent, provide, computed } from 'vue';
import merge from 'lodash/merge';
import { baseTheme } from '@/theme';
import { Theme, DeepPartial } from '@/types';
import { CCSSBaseline } from '@/components/c-css-baseline';

export const CThemeProvider = defineComponent({
  name: 'CThemeProvider',
  props: {
    theme: {
      type: Object as PropType<DeepPartial<Theme>>,
      default: () => {},
    },
  },
  setup(props, { slots }) {
    const theme = computed<Theme>(() => merge(baseTheme, props.theme));
    provide('CTheme', theme);
    return () => <CCSSBaseline>{slots.default?.()}</CCSSBaseline>;
  },
});
