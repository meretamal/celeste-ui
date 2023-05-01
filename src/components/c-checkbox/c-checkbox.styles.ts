import { provide, computed, readonly, inject, ComputedRef } from 'vue';
import { CSSObject, css } from '@emotion/css';
import { useTheme } from '@/composables';
import { light } from '@/utils';

const key = 'CCheckbox';

export const useCheckboxStyles = () => {
  const theme = useTheme();

  const styles = computed<CSSObject>(() => ({
    display: 'flex',
    alignItems: 'center',
    '&--small': {
      gap: '0.5rem',
    },
    '&--medium': {
      gap: '0.75rem',
    },
    '&--large': {
      gap: '1rem',
    },
    '&__input': {
      position: 'relative',
      cursor: 'pointer',
      border: '2px solid #bdbdbd',
      transition: 'all 0.1s ease-in-out',
      height: '100%',
      '&:focus': {
        outline: 'none',
      },
      '&::after': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        visibility: 'hidden',
        content:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='3' stroke='white'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' /></svg>\")",
        height: '100%',
      },
      '&[aria-checked="true"]::after': {
        visibility: 'visible',
      },
      '&[aria-disabled="true"]': {
        cursor: 'not-allowed',
      },
    },
    '&--small &__input': {
      height: '0.75rem',
      width: '0.75rem',
      borderRadius: '2px',
    },
    '&--medium &__input': {
      height: '1rem',
      width: '1rem',
      borderRadius: '3px',
    },
    '&--large &__input': {
      height: '1.25rem',
      width: '1.25rem',
      borderRadius: '4px',
    },
    '&--small &__input::after': {
      top: 0,
      width: '0.75rem',
    },
    '&--medium &__input::after': {
      width: '1rem',
    },
    '&--large &__input::after': {
      width: '1.25rem',
    },
    ...(
      Object.keys(theme.value.colors) as (keyof typeof theme.value.colors)[]
    ).reduce(
      (prev, color) => ({
        ...prev,
        [`&--${color} &__input[aria-checked="true"]`]: {
          backgroundColor: theme.value.colors[color],
          borderColor: theme.value.colors[color],
        },
        [`&--${color} &__input[aria-disabled="false"]:focus`]: {
          borderColor: theme.value.colors[color],
          boxShadow: `0 0 0 3px ${light(theme.value.colors[color])}`,
        },
      }),
      {},
    ),
    '&__label': {
      display: 'block',
      fontSize: '1rem',
      color: '#212121',
    },
  }));

  let baseClass = inject<ComputedRef<string> | undefined>(key, undefined);

  if (!baseClass) {
    baseClass = computed(() => css(styles.value));
    provide(key, readonly(baseClass));
  }

  return baseClass;
};
