import { CSSObject, css } from '@emotion/css';
import { ComputedRef, computed, inject, provide } from 'vue';

const key = 'c-typography.class';

export const useTypographyStyles = () => {
  const styles = computed<CSSObject>(() => ({
    '&--h1': {
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
    '&--h2': {
      fontSize: '2.25rem',
      lineHeight: '2.75rem',
    },
    '&--h3': {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    '&--h4': {
      fontSize: '1.625rem',
      lineHeight: '2.125rem',
    },
    '&--h5': {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    '&--h6': {
      fontSize: '1.375rem',
      lineHeight: '1.875rem',
    },
    '&--b1': {
      fontSize: '1.125rem',
      lineHeight: '1.35rem',
    },
    '&--b2': {
      fontSize: '1rem',
      lineHeight: '1.175rem',
    },
  }));

  let baseClass = inject<ComputedRef<string> | undefined>(key, undefined);

  if (!baseClass) {
    baseClass = computed(() => css(styles.value));
    provide(key, baseClass);
  }

  return baseClass;
};
