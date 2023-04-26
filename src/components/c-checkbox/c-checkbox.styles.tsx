import { provide, computed, readonly, inject, ComputedRef } from 'vue';
import { mix } from 'polished';
import { CSSObject, css } from '@emotion/css';
import { useTheme } from '@/composables';

const key = 'CCheckbox';

export const useCheckboxStyles = () => {
  const theme = useTheme();

  const styles = computed<CSSObject>(() => ({
    display: 'flex',
    alignItems: 'center',
    '&--small': {
      gap: '1.5rem',
    },
    '&--medium': {
      gap: '1.75rem',
    },
    '&--large': {
      gap: '2rem',
    },
    '&__input': {
      position: 'relative',
      width: 0,
      cursor: 'pointer',
      '&::before': {
        boxSizing: 'border-box',
        content: '""',
        border: '2px solid #bdbdbd',
        position: 'absolute',
        transition: 'all 0.1s ease-in-out',
        height: '100%',
      },
      '&::after': {
        position: 'absolute',
        visibility: 'hidden',
        content:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='3' stroke='white' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' /></svg>\")",
        height: '100%',
      },
      '&:checked::after': {
        visibility: 'visible',
      },
    },
    '&--small &__input': {
      height: '0.75rem',
    },
    '&--medium &__input': {
      height: '1rem',
    },
    '&--large &__input': {
      height: '1.25rem',
    },
    '&--small &__input::before': {
      borderRadius: '2px',
    },
    '&--medium &__input::before': {
      borderRadius: '3px',
    },
    '&--large &__input::before': {
      borderRadius: '4px',
    },
    '&--small &__input::before, &--small &__input::after': {
      width: '0.75rem',
    },
    '&--medium &__input::before, &--medium &__input::after': {
      width: '1rem',
    },
    '&--large &__input::before, &--large &__input::after': {
      width: '1.25rem',
    },
    ...(
      Object.keys(theme.value.colors) as (keyof typeof theme.value.colors)[]
    ).reduce(
      (prev, color) => ({
        ...prev,
        [`&--${color} &__input:checked::before`]: {
          backgroundColor: theme.value.colors[color],
          borderColor: theme.value.colors[color],
        },
        [`&--${color} &__input:focus::before`]: {
          borderColor: theme.value.colors[color],
          boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors[color])}`,
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
