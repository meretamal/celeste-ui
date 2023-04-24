import { defineComponent } from 'vue';
import { injectGlobal } from '@emotion/css';

export const CCSSBaseline = defineComponent({
  name: 'CCSSBaseline',
  setup(_, { slots }) {
    injectGlobal({
      '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: "'Source Sans Pro', sans-serif",
      },
    });
    return () => slots.default?.();
  },
});
