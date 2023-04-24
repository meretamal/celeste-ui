import { provide, computed, readonly, inject, ComputedRef } from 'vue';
import { CSSObject, css } from '@emotion/css';
import { lighten, darken, getLuminance } from 'polished';
import { useTheme } from '@/composables';

const key = 'c-button.class';

export const useButtonStyles = () => {
  const theme = useTheme();

  const styles = computed<CSSObject>(() => ({
    display: 'inline-block',
    fontWeight: 'bold',
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
    '&--contained': {
      color: '#fff',
    },
    '&--outlined': {
      backgroundColor: 'transparent',
    },
    '&--text': {
      backgroundColor: 'transparent',
    },
    ...(
      Object.keys(theme.value.colors) as (keyof typeof theme.value.colors)[]
    ).reduce(
      (prev, color) => ({
        ...prev,
        [`&--${color}`]: {
          border: `1px solid ${theme.value.colors[color]}`,
          '&:focus': {
            boxShadow: `0 0 0 3px ${lighten(
              Math.min(0.3, getLuminance(theme.value.colors[color]) / 2),
              theme.value.colors[color],
            )}`,
          },
        },
        [`&--contained&--${color}`]: {
          backgroundColor: theme.value.colors[color],
          '&:hover': {
            backgroundColor: `${darken(
              getLuminance(theme.value.colors[color]) / 10,
              theme.value.colors[color],
            )}`,
            borderColor: `${darken(
              getLuminance(theme.value.colors[color]) / 10,
              theme.value.colors[color],
            )}`,
          },
        },
        [`&--outlined&--${color}`]: {
          border: `1px solid ${theme.value.colors[color]}`,
          color: theme.value.colors[color],
          '&:hover': {
            backgroundColor: `${lighten(
              Math.min(0.4, getLuminance(theme.value.colors[color])),
              theme.value.colors[color],
            )}`,
          },
        },
        [`&--text&--${color}`]: {
          border: 'none',
          color: theme.value.colors[color],
          '&:hover': {
            backgroundColor: `${lighten(
              Math.min(0.4, getLuminance(theme.value.colors[color])),
              theme.value.colors[color],
            )}`,
          },
          '&:focus': {
            boxShadow: 'none',
            textDecoration: 'underline',
          },
        },
      }),
      {},
    ),
  }));

  let baseClass = inject<ComputedRef<string> | undefined>(key, undefined);

  if (!baseClass) {
    baseClass = computed(() => css(styles.value));
    provide(key, readonly(baseClass));
  }

  return baseClass;
};
