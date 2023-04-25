import { provide, computed, readonly, inject, ComputedRef } from 'vue';
import { mix } from 'polished';
import { CSSObject, css } from '@emotion/css';
import { useTheme } from '@/composables';

const key = 'CCheckbox';

export const useCheckboxStyles = () => {
  const theme = useTheme();

  const styles = computed<CSSObject>(() => ({
    position: 'relative',
    '&__input': {
      position: 'relative',
      width: 0,
      cursor: 'pointer',
      '&::before': {
        content: '""',
        display: 'inline-block',
        border: '1px solid #ccc',
        position: 'absolute',
        transition: 'all 0.1s ease-in-out',
      },
      '&::after': {
        position: 'absolute',
        display: 'inline-block',
        visibility: 'hidden',
        content:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='3' stroke='white' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' /></svg>\")",
      },
      '&--small::before': {
        borderRadius: '2px',
      },
      '&--medium::before': {
        borderRadius: '3px',
      },
      '&--large::before': {
        borderRadius: '4px',
      },
      '&--small::before, &--small::after': {
        width: '0.75rem',
        height: '0.75rem',
      },
      '&--medium::before, &--medium::after': {
        width: '1rem',
        height: '1rem',
      },
      '&--large::before, &--large::after': {
        width: '1.25rem',
        height: '1.25rem',
      },
      '&:checked::after': {
        visibility: 'visible',
      },
      ...(
        Object.keys(theme.value.colors) as (keyof typeof theme.value.colors)[]
      ).reduce(
        (prev, color) => ({
          ...prev,
          [`&:checked::before`]: {
            backgroundColor: theme.value.colors[color],
            borderColor: theme.value.colors[color],
          },
          [`&:focus::before`]: {
            boxShadow: `0 0 0 3px ${mix(
              0.5,
              '#fff',
              theme.value.colors[color],
            )}`,
          },
        }),
        {},
      ),
    },
  }));

  let baseClass = inject<ComputedRef<string> | undefined>(key, undefined);

  if (!baseClass) {
    baseClass = computed(() => css(styles.value));
    provide(key, readonly(baseClass));
  }

  return baseClass;
};
