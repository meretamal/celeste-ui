import { mix } from 'polished';

const white = '#fff';
const black = '#000';

export const light = (color: string) => mix(0.5, white, color);
export const lighter = (color: string) => mix(0.9, white, color);
export const dark = (color: string) => mix(0.05, black, color);
export const darker = (color: string) => mix(0.15, black, color);
