import { defineComponent, computed, PropType } from 'vue';
import { css } from '@emotion/css';
import { darken, lighten } from 'polished';
import { useTheme } from '../../composables';

export const CButton = defineComponent({
  props: {
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
  },
  setup(props, { slots }) {
    const theme = useTheme();

    const baseClass = computed(() =>
      css({
        display: 'inline-block',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: theme.colors.primary,
        color: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: `${darken(0.1, theme.colors.primary)}`,
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${lighten(0.3, theme.colors.primary)}`,
        },
        '&:active': {
          transform: 'translateY(2px)',
        },
        '&--small': {
          fontSize: '0.8rem',
          padding: '0.5rem 1rem',
        },
        '&--medium': {
          fontSize: '1rem',
          padding: '0.75rem 1.5rem',
        },
        '&--large': {
          fontSize: '1.2rem',
          padding: '1rem 2rem',
        },
      }),
    );
    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.size}`,
    ]);
    return () => (
      <button class={classes.value} type="button">
        {slots.default?.()}
      </button>
    );
  },
});
