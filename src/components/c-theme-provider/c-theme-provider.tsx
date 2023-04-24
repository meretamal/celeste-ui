import { PropType, defineComponent, provide, computed, readonly } from 'vue';
import merge from 'lodash/merge';
import { baseTheme } from '@/theme';
import { useButtonStyles } from '@/components/c-button/c-button.styles';
import { useTextFieldStyles } from '@/components/c-text-field/c-text-field.styles';
import { useTypographyStyles } from '@/components/c-typography/c-typography.styles';
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
    provide('theme', readonly(theme));

    useTypographyStyles();
    useButtonStyles();
    useTextFieldStyles();
    return () => <CCSSBaseline>{slots.default?.()}</CCSSBaseline>;
  },
});
