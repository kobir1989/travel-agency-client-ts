import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';

// Create a theme instance.
export const theme = createTheme({
  typography,
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1500,
    },
  },
});
