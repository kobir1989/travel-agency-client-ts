'use client';

import { FlightTab } from '@/components/Templates/SearchSection/SearchTabs';
import { Stack, Container, Button, styled } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => ({
  background: theme.palette.info.light,
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
  gap: '1rem',
}));

const ModifyFlightSearch = () => {
  return (
    <Container maxWidth="lg">
      <StyledStack>
        <FlightTab />
        <Stack justifyContent="center" alignItems="center">
          <Button variant="secondary">Modify Search</Button>
        </Stack>
      </StyledStack>
    </Container>
  );
};

export default ModifyFlightSearch;
