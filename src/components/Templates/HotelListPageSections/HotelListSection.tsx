'use client';

import { HotelsCard } from '@/components/Molicules/Cards';
import { Container, Stack } from '@mui/material';

const HotelListSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: '1rem' }}>
      <Stack>
        <HotelsCard />
      </Stack>
    </Container>
  );
};

export default HotelListSection;
