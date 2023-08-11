'use client';

import Icons from '@/components/Atoms/Icons';
import { Typography, Box, Stack, Divider } from '@mui/material';

const ReviewHotelBooking = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        padding: '1rem',
      })}
    >
      <Stack gap={3}>
        <Box>
          <Typography variant="h3">Ocean Paradise Hotel & Resort</Typography>
          <Typography variant="body1">2 Guests | 1 Room | 1 Night</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            background: theme.palette.primary.light,
            padding: '0.7rem',
            borderRadius: '4px',
          })}
        >
          <Stack direction="row" alignItems="center" gap="6px">
            <Icons name="hotel" />
            <Typography variant="h3" fontSize="1rem">
              Deluxe Double Without Balcony
            </Typography>
          </Stack>
          <Typography variant="body1">Breakfast Included</Typography>
        </Box>
        <Divider />
        {/* time */}
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Box>
            <Typography variant="body1">Check In 14:00</Typography>
            <Typography variant="body1" fontWeight={600} color="primary">
              16 Aug
            </Typography>
            <Typography variant="body1">Wed</Typography>
          </Box>
          <Icons name="rightArrow" size="3rem" />
          <Box>
            <Typography variant="body1">Check Out 12:00</Typography>
            <Typography variant="body1" fontWeight={600} color="primary">
              17 Aug
            </Typography>
            <Typography variant="body1">Thu</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReviewHotelBooking;
