import { PropType, computed, defineComponent } from 'vue';
import { css } from '@emotion/css';
import { lighten } from 'polished';
import { useTheme } from '../../composables';

export const CTextField = defineComponent({
  props: {
    color: {
      type: String as PropType<
        'primary' | 'success' | 'info' | 'warning' | 'danger'
      >,
      default: 'primary',
    },
  },
  setup(props) {
    const theme = useTheme();

    const baseClass = computed(() =>
      css({
        display: 'block',
        width: '100%',
        height: '2.5rem',
        fontSize: '1rem',
        padding: '0.5rem',
        border: '2px solid #ccc',
        borderRadius: '4px',
        transition: 'all 0.3s ease-in-out',
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${lighten(0.3, theme.colors[props.color])}`,
          borderColor: theme.colors[props.color],
        },
      }),
    );
    return () => <input class={baseClass.value} />;
  },
});
