import { Stack, styled } from '@mui/material';
import { SelectButtonProps } from './types';

const StyledTitleInput = styled('input')(({ theme }) => ({
  border: 'none',
  fontSize: '0.9rem',
  textAlign: 'start',
  background: 'none',
  fontWeight: 600,
  color: theme.palette.primary.main,
  lineHeight: '1.6rem',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  },
}));

const StyledSubtitleInput = styled('input')(({ theme }) => ({
  border: 'none',
  fontSize: '0.78rem',
  textAlign: 'start',
  background: 'none',
  fontWeight: 300,
  color: theme.palette.info.dark,
  lineHeight: '1.6rem',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.81rem',
    fontWeight: 500,
  },
}));

const StyledLabel = styled('label')({
  fontSize: '0.91rem',
  fontWeight: 300,
  lineHeight: '1.9rem',
  letterSpacing: '0.2px',
  color: '#6c6f7a',
  cursor: 'pointer',
});
const SelectButton = ({ selectedValue, label }: SelectButtonProps) => {
  return (
    <Stack
      sx={{
        border: '1px solid #d1d1d18d',
        borderRadius: '0.7rem',
        padding: '0.4rem 1rem',
        width: '100%',
        position: 'relative',
      }}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledTitleInput value={selectedValue?.title} type="button" />
      <StyledSubtitleInput value={selectedValue?.subtitle} type="button" />
    </Stack>
  );
};

export default SelectButton;
