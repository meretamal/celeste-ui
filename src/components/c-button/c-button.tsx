import { defineComponent, computed, PropType } from 'vue';
import { css } from '@emotion/css';

export const CButton = defineComponent({
  props: {
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
  },
  setup(props, { slots }) {
    const baseClass = computed(() =>
      css({
        display: 'inline-block',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: '#4CAF50',
        color: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: '#3e8e41',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.4)',
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
