import { IconButton, Typography, styled } from '@mui/material';

export const gridItemWrapperStyles = {
  border: '1px solid #dedfe4',
  borderRadius: '8px',
  padding: '5px 1rem',
  cursor: 'pointer',
};

export const StyledIconButton = styled(IconButton)({
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  right: '-1.5rem',
  top: '50%',
  transform: 'translate(0,-50%)',
  background: '#FFF',
  '@media (max-width: 850px)': {
    paddingTop: '4rem',
    display: 'none',
  },
  zIndex: '10',
  '&:hover': {
    background: '#FFF',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
});

export const StyledH3 = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  color: theme.palette.primary.main,
  lineHeight: '1.6rem',
}));

export const StyledH4 = styled(Typography)({
  fontSize: '0.81rem',
  fontWeight: 400,
  color: 'primary',
  lineHeight: '1.2rem',
});

export const selectStyles = {
  borderRadius: '8px',
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D1D1D1',
    },
    '&:hover fieldset': {
      borderColor: '#d1d1d1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D1D1D1',
    },
  },
};

const caladerCommonStyles = {
  position: 'absolute',
  zIndex: '20',
  background: '#FFF',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  borderRadius: '8px',
};

export const calanderWrapperStyles = {
  ...caladerCommonStyles,
  top: '6.5rem',
  left: '1rem',
};

export const calanderWrapperStylesFlight = {
  ...caladerCommonStyles,
  top: '6.5rem',
  left: '1rem',
  '@media (min-width: 850px)': {
    right: '0',
    left: 'unset',
  },
  '@media (min-width: 1075px)': {
    right: 'unset',
    left: '1rem',
  },
};

export const calanderWrapperStylesRight = {
  ...caladerCommonStyles,
  top: '6.5rem',
  left: '1rem',
  '@media (min-width: 575px)': {
    right: '0',
    left: 'unset',
  },
};
