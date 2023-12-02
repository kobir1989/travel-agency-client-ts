'use client';

import { styled } from '@mui/material';
import { ChildrenType } from '@/types/common-type';

const StyledSection = styled('section')(({ theme }) => ({
  background: theme.palette.info.light,
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
}));

const SectionContainer = ({ children }: ChildrenType) => {
  return <StyledSection>{children}</StyledSection>;
};

export default SectionContainer;
