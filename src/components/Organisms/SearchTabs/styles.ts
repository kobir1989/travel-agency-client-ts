import { IconButton, Typography, styled } from '@mui/material';

export const gridItemWrapperStyles = {
  border: '1px solid #dedfe4',
  borderRadius: '8px',
  padding: '5px 1rem',
};

export const StyledIconButton = styled(IconButton)({
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  width: '2.5rem',
  height: '2.5rem',
  position: 'absolute',
  right: '-1.8rem',
  top: '50%',
  transform: 'translate(0,-50%)',
  background: '#FFF',
  '@media (max-width: 850px)': {
    paddingTop: '4rem',
    display: 'none',
  },
  '&:hover': {
    background: '#FFF',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
});

export const StyledH3 = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: 'primary',
  variant: 'h3',
});

export const StyledH4 = styled(Typography)({
  fontSize: '0.81rem',
  fontWeight: 400,
  color: 'primary',
  lineHeight: '1.2rem',
});

export const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.87rem',
  fontWeight: 400,
  display: 'block',
}));
