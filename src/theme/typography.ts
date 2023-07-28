import { palette } from './palette';

export const typography = {
  fontFamily: `Open Sans, sans-serif`,
  h1: {
    fontSize: '2.75rem',
    lineHeight: '2.6875rem',
    letterSpacing: '0.1px',
    fontWeight: '700',
    color: palette.primary.main,
  },
  h2: {
    fontSize: '1.71rem',
    lineHeight: '2.5rem',
    letterSpacing: '0.1px',
    fontWeight: '700',
    color: palette.primary.main,
  },
  h3: {
    fontSize: '1.1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.1px',
    fontWeight: '600',
    color: palette.primary.main,
  },
  h4: {
    fontSize: '1.2rem',
    lineHeight: '2.375rem',
    fontWeight: '500',
    color: palette.primary.main,
  },
  body1: {
    fontSize: '0.9rem',
    lineHeight: '1.4375rem',
    letterSpacing: '0.2px',
    fontWeight: '300',
    color: palette.info.dark,
  },
  body2: {
    fontSize: '0.81rem',
    lineHeight: '1.1rem',
    letterSpacing: '0.1px',
    fontWeight: '300',
    color: palette.info.dark,
  },
};
