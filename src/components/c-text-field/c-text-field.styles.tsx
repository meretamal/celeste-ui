import { provide, computed, readonly, inject, ComputedRef } from 'vue';
import { CSSObject, css } from '@emotion/css';
import { mix } from 'polished';
import { useTheme } from '@/composables';

const key = 'CTextFieldClass';

export const useTextFieldStyles = () => {
  const theme = useTheme();

  const styles = computed<CSSObject>(() => ({
    display: 'block',
    width: '100%',
    fontSize: '1rem',
    border: '2px solid #bdbdbd',
    color: '#212121',
    borderRadius: '4px',
    transition: 'all 0.3s ease-in-out',
    '&:focus': {
      outline: 'none',
    },
    '&--medium': {
      padding: '0.5625rem 0.875rem',
    },
    '&--large': {
      padding: '1rem 0.875rem',
    },
    '&::placeholder': {
      color: '#bdbdbd',
    },
    '&:disabled, &[disabled]': {
      cursor: 'not-allowed',
    },
    ...(
      Object.keys(theme.value.colors) as (keyof typeof theme.value.colors)[]
    ).reduce(
      (prev, color) => ({
        ...prev,
        [`&--${color}:focus`]: {
          boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors[color])}`,
          borderColor: theme.value.colors[color],
        },
      }),
      {},
    ),
    '&--error': {
      boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors.danger)}`,
      borderColor: theme.value.colors.danger,
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors.danger)}`,
        borderColor: theme.value.colors.danger,
      },
    },
    '&__container': {
      width: '100%',
    },
    '&__label': {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#212121',
    },
    '&__helper-text': {
      display: 'block',
      fontSize: '0.75rem',
      margin: '0.5rem 0 0',
      color: '#212121',
    },
    '&--error + &__helper-text': {
      color: theme.value.colors.danger,
    },
  }));

  let baseClass = inject<ComputedRef<string> | undefined>(key, undefined);

  if (!baseClass) {
    baseClass = computed(() => css(styles.value));
    provide(key, readonly(baseClass));
  }

  return baseClass;
};
