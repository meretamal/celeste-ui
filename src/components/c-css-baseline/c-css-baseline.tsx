import { defineComponent } from 'vue';
import { injectGlobal } from '@emotion/css';
import { useButtonStyles } from '@/components/c-button/c-button.styles';
import { useCheckboxStyles } from '../c-checkbox/c-checkbox.styles';
import { useTextFieldStyles } from '../c-text-field/c-text-field.styles';
import { useTypographyStyles } from '../c-typography/c-typography.styles';
import { useSelectStyles } from '../c-select/c-select.styles';

export const CCSSBaseline = defineComponent({
  name: 'CCSSBaseline',
  setup(_, { slots }) {
    injectGlobal({
      '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: "'Lato', sans-serif",
      },
    });
    useButtonStyles();
    useCheckboxStyles();
    useTextFieldStyles();
    useTypographyStyles();
    useSelectStyles();
    return () => slots.default?.();
  },
});
