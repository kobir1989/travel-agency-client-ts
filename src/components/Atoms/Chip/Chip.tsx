'use client';

import Icons from '@/components/Atoms/Icons';
import { Chip as MuiChip, styled } from '@mui/material';
import { ChipProps } from '@/components/Atoms/Chip/types';

const ChipComponent = styled(MuiChip)(({ theme }) => ({
  padding: '0 0.2rem',
  fontSize: '0.87rem',
  borderRadius: '4px',
  background: theme.palette.primary.light,
  color: theme.palette.primary.main,
}));

const Chip = ({ iconName, label, chipVariant = 'filled' }: ChipProps) => {
  return (
    <ChipComponent
      icon={<Icons name={iconName} size="1.3rem" />}
      label={label}
      variant={chipVariant}
    />
  );
};

export default Chip;
