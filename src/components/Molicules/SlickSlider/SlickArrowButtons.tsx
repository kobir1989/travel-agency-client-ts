import { IconButton, styled } from '@mui/material';
import Icons from '@/components/Atoms/Icons';
import { SlickSliderArrowProps } from './types';

const StyledPrevIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.light,
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  left: '1rem',
  top: '50%',
  transform: 'translate(0,-50%)',
  zIndex: 20,
  '&:hover': {
    background: theme.palette.primary.light,
  },
}));

const StyledNextIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.light,
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translate(0,-50%)',
  zIndex: 20,
  '&:hover': {
    background: theme.palette.primary.light,
  },
}));

export const NextArrow = ({ onClick }: SlickSliderArrowProps) => {
  return (
    <StyledNextIconButton onClick={onClick}>
      <Icons name="forwardArrow" size="1rem" color="#1c3c6b" />
    </StyledNextIconButton>
  );
};

export const PrevArrow = ({ onClick }: SlickSliderArrowProps) => {
  return (
    <StyledPrevIconButton onClick={onClick}>
      <Icons name="backArrow" size="1rem" color="#1c3c6b" />
    </StyledPrevIconButton>
  );
};
