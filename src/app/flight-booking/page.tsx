'use client';

import { FlightCard, PriceDetailsCard } from '@/components/Molicules/Cards';
import BookingFrom from '@/components/Organisms/BookingForm/BookingFrom';
import FlightDetails from '@/components/Organisms/FlightDetails';
import { Box, Container, Stack } from '@mui/material';

const FlightBooking = () => {
  return (
    <main>
      <Container
        maxWidth="lg"
        sx={{
          mt: '7rem',
          mb: '7rem',
          display: 'flex',
          gap: 3,
          flexDirection: 'column-reverse',
          '@media screen and (min-width: 1000px)': {
            mt: '9rem',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <Stack
          gap={3}
          width="72%"
          sx={{
            width: '100%',
            '@media screen and (min-width: 1000px)': {
              width: '68%',
            },
            '@media screen and (min-width: 1020px)': {
              width: '72%',
            },
          }}
        >
          <FlightCard isPrice={false} />
          <FlightDetails />
          <BookingFrom />
        </Stack>
        <Box
          sx={{
            width: '100%',
            '@media screen and (min-width: 1000px)': {
              width: '32%',
            },
            '@media screen and (min-width: 1020px)': {
              width: '32%',
            },
          }}
        >
          <PriceDetailsCard />
        </Box>
      </Container>
    </main>
  );
};

export default FlightBooking;
