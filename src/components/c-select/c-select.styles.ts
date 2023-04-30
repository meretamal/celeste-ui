import { provide, computed, readonly, inject, ComputedRef } from 'vue';
import { CSSObject, css } from '@emotion/css';
import { mix } from 'polished';
import { useTheme } from '@/composables';

const key = 'CSelectClass';

export const useSelectStyles = () => {
  const theme = useTheme();

  const styles = computed<CSSObject>(() => ({
    width: '100%',
    '&__input': {
      display: 'block',
      width: '100%',
      fontSize: '1rem',
      border: '2px solid #bdbdbd',
      color: '#212121',
      borderRadius: '4px',
      transitionProperty: 'box-shadow, border-color',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-in-out',
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      appearance: 'none',
      backgroundImage:
        "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black' class='w-6 h-6'><path fill-rule='evenodd' d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z' clip-rule='evenodd' stroke='black' stroke-width='2.5'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 0.7rem top 50%',
      backgroundSize: '0.65rem auto',
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:has(&__placeholder:checked)': {
        color: '#bdbdbd',
      },
      '&__placeholder': {
        display: 'none',
      },
    },
    '&--medium &__input': {
      padding: '0.5625rem 0.875rem',
    },
    '&--large &__input': {
      padding: '1rem 0.875rem',
    },
    ...(
      Object.keys(theme.value.colors) as (keyof typeof theme.value.colors)[]
    ).reduce(
      (prev, color) => ({
        ...prev,
        [`&--${color} &__input:focus`]: {
          boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors[color])}`,
          borderColor: theme.value.colors[color],
        },
      }),
      {},
    ),
    '&--error &__input': {
      boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors.danger)}`,
      borderColor: theme.value.colors.danger,
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 3px ${mix(0.5, '#fff', theme.value.colors.danger)}`,
        borderColor: theme.value.colors.danger,
      },
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
    '&--error &__helper-text': {
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
