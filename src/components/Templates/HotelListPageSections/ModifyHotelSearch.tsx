'use client';

import { Button, Stack, styled } from '@mui/material';
import { HotelsTab } from '@/components/Templates/HomePageSections/SearchSection/SearchTabs';

const StyledStack = styled(Stack)(({ theme }) => ({
  background: theme.palette.info.light,
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
  gap: '1rem',
}));

const ModifyHotelSearch = () => {
  return (
    <StyledStack>
      <HotelsTab />
      <Stack justifyContent="center" alignItems="center">
        <Button variant="secondary">Modify Search</Button>
      </Stack>
    </StyledStack>
  );
};

export default ModifyHotelSearch;
