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

export const calanderWrapperStyles = {
  position: 'absolute',
  top: '6.5rem',
  left: '1rem',
  zIndex: '20',
  boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
};
