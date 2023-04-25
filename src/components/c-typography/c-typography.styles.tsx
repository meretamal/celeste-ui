import { CSSObject, css } from '@emotion/css';
import { ComputedRef, computed, inject, provide, readonly } from 'vue';

const key = 'CTypograhyClass';

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
    '&--thin': {
      fontWeight: 100,
    },
    '&--light': {
      fontWeight: 300,
    },
    '&--regular': {
      fontWeight: 400,
    },
    '&--bold': {
      fontWeight: 700,
    },
    '&--black': {
      fontWeight: 900,
    },
    '&--center': {
      textAlign: 'center',
    },
    '&--inherit': {
      textAlign: 'inherit',
    },
    '&--justify': {
      textAlign: 'justify',
    },
    '&--left': {
      textAlign: 'left',
    },
    '&--right': {
      textAlign: 'right',
    },
    '&--no-wrap': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }));

  let baseClass = inject<ComputedRef<string> | undefined>(key, undefined);

  if (!baseClass) {
    baseClass = computed(() => css(styles.value));
    provide(key, readonly(baseClass));
  }

  return baseClass;
};
