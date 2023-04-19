import { inject } from 'vue';
import { baseTheme } from '../theme';
import { Theme } from '../types';

export const useTheme = () => {
  const theme = inject<Theme>('theme');
  return theme || baseTheme;
};
