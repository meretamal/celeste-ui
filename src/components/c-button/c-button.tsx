import { defineComponent, computed, PropType, watch } from 'vue';
import { css } from '@emotion/css';
import { darken, lighten, getLuminance } from 'polished';
import { useTheme } from '../../composables';
import { celeste } from '../../celeste';

export const CButton = defineComponent({
  name: 'CButton',
  props: {
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    color: {
      type: String as PropType<
        'primary' | 'success' | 'info' | 'warning' | 'danger'
      >,
      default: 'primary',
    },
    fullWidth: {
      type: Boolean,
    },
    variant: {
      type: String as PropType<'contained' | 'outlined'>,
      default: 'contained',
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const theme = useTheme();

    const baseClass = computed(() =>
      css({
        display: 'inline-block',
        fontWeight: 'bold',
        border: `1px solid ${theme.value.colors[props.color]}`,
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        textAlign: 'center',
        textDecoration: 'none',
        lineHeight: '1.75',
        '&:active': {
          transform: 'translateY(2px)',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 3px ${lighten(
            getLuminance(theme.value.colors[props.color]) / 2,
            theme.value.colors[props.color],
          )}`,
        },
        '&--contained': {
          backgroundColor: theme.value.colors[props.color],
          color: '#fff',
          '&:hover': {
            backgroundColor: `${darken(0.1, theme.value.colors[props.color])}`,
          },
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px ${lighten(
              getLuminance(theme.value.colors[props.color]) / 2,
              theme.value.colors[props.color],
            )}`,
          },
        },
        '&--outlined': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme.value.colors[props.color]}`,
          color: theme.value.colors[props.color],
          '&:hover': {
            backgroundColor: `${lighten(0.4, theme.value.colors[props.color])}`,
          },
        },
        '&--small': {
          fontSize: '0.8125rem',
          padding: '0.25rem 0.625rem',
        },
        '&--medium': {
          fontSize: '0.875rem',
          padding: '0.375rem 1rem',
        },
        '&--large': {
          fontSize: '0.9375rem',
          padding: '0.5rem 1.375rem',
        },
        '&--full-width': {
          width: '100%',
        },
      }),
    );
    const classes = computed(() => [
      baseClass.value,
      `${baseClass.value}--${props.size}`,
      `${baseClass.value}--${props.variant}`,
      {
        [`${baseClass.value}--full-width`]: props.fullWidth,
      },
    ]);

    const handleClick = () => {
      emit('click');
    };

    return () => (
      <celeste.button class={classes.value} type="button" onClick={handleClick}>
        {slots.default?.()}
      </celeste.button>
    );
  },
});
