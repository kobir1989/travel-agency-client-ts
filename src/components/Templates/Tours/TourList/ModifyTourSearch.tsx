'use client';

import { TourTab } from '@/components/Organisms/SearchTabs';
import { styled, Stack, Button } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => ({
  background: theme.palette.info.light,
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
  gap: '1rem',
}));

const ModifyTourSearch = () => {
  return (
    <StyledStack>
      <TourTab />
      <Stack justifyContent="center" alignItems="center">
        <Button variant="secondary">Modify Search</Button>
      </Stack>
    </StyledStack>
  );
};

export default ModifyTourSearch;
