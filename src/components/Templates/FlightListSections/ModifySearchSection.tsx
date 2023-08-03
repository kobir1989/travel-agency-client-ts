'use client';

import { FlightTab } from '@/components/Templates/SearchSection/SearchTabs';
import { Stack, Container, Button } from '@mui/material';

const ModifySearchSection = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        sx={(theme) => ({
          background: theme.palette.info.light,
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
          gap: 2,
        })}
      >
        <FlightTab />
        <Stack justifyContent="center" alignItems="center">
          <Button variant="secondary">Modify Search</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ModifySearchSection;
