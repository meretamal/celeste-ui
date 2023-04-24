import { PropType, defineComponent, provide, computed } from 'vue';
import merge from 'lodash/merge';
import { baseTheme } from '../../theme/base';
import { useButtonStyles } from '../../theme/button';
import { useTextFieldStyles } from '../../theme/text-field';
import { Theme, DeepPartial } from '../../types';

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
    provide('theme', theme);

    useButtonStyles();
    useTextFieldStyles();
    return () => slots.default?.();
  },
});
