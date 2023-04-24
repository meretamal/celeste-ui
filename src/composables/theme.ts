import { ComputedRef, computed, inject } from 'vue';
import { baseTheme } from '../theme/base';
import { Theme } from '../types';

export const useTheme = () => {
  const injectedTheme = inject<ComputedRef<Theme>>('theme');
  const theme = computed(() => injectedTheme?.value || baseTheme);
  return theme;
};
