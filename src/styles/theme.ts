import { breakpoints } from './tokens/breakpoints';
import { colors } from './tokens/colors';
import { layers } from './tokens/layers';
import { shapes } from './tokens/shapes';
import { spacing } from './tokens/spacings';
import { typography } from './tokens/typography';

export const theme = {
  colors,
  breakpoints,
  typography,
  spacing,
  shapes,
  layers,
} as const;
