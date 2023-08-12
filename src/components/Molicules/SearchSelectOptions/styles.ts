import { ListItem, styled } from '@mui/material';

export const StyledInput = styled('input')(({ theme }) => ({
  padding: '1.3rem 1.3rem 1rem 4rem',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid #D1D1D1',
  width: '100%',
  '&::placeholder': {
    color: '#a2a8c0',
  },
  color: theme.palette.info.dark,
  fontSize: '0.9rem',
  letterSpacing: '0.2px',
}));

export const StyledListItem = styled(ListItem)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  cursor: 'pointer',
});

export const StyledSpan = styled('span')({
  position: 'absolute',
  left: '2.5rem',
  top: '50%',
  transform: 'translate(0,-50%)',
  lineHeight: '0',
  color: '#a2a8c0',
});
