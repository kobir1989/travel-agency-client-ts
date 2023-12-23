'use client';

import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import { removeRoom } from '@/redux/features/hotel/hotelSlice';
import { RootState } from '@/redux/store/store';
import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const PricingSummary = () => {
  const dispatch = useDispatch();
  const { selectedRooms } = useSelector((state: RootState) => state.hotelSlice);

  // Remove Selected Room
  const handleRemoveRoom = (id: string): void => {
    dispatch(removeRoom(id));
  };
  return (
    <Stack
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        minHeight: '18.5rem',
      })}
    >
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.main,
          padding: '1rem',
          borderRadius: '8px 8px 0 0',
        })}
      >
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.info.light,
          })}
        >
          Pricing Summary
        </Typography>
      </Box>
      <Condition condition={selectedRooms?.length <= 0}>
        <Box sx={{ mt: '6.5rem' }}>
          <Typography variant="body1" textAlign="center">
            Add Rooms To Continue
          </Typography>
        </Box>
      </Condition>
      <Stack sx={{ margin: '2rem 1.3rem', gap: 3 }}>
        {selectedRooms.map((room) => (
          <Stack
            key={room?.id}
            gap={2}
            sx={(theme) => ({
              background: theme.palette.info.light,

              position: 'relative',
              border: '1px solid #D1D1D1',
              padding: '0.7rem',
              borderRadius: '8px',
            })}
          >
            <IconButton
              sx={(theme) => ({
                p: 0,
                background: theme.palette.error.light,
                color: theme.palette.info.light,
                padding: '2px',
                position: 'absolute',
                right: '-11px',
                top: '-11px',
              })}
              onClick={() => handleRemoveRoom(room.id)}
            >
              <Icons name="cross" size="1rem" />
            </IconButton>
            <Typography variant="body1" fontSize="1rem" fontWeight={600}>
              {room?.title}
            </Typography>
            <Box>
              <Typography variant="body1" fontSize="1rem" fontWeight={600}>
                BDT {room?.price}
              </Typography>
              <Typography variant="body2" mt="0.3rem">
                + BDT 200 Taxes & Fees
              </Typography>
            </Box>
          </Stack>
        ))}

        {/* Total Price */}
        <Condition condition={selectedRooms?.length > 0}>
          <Box
            sx={(theme) => ({
              background: theme.palette.primary.light,
              padding: '1rem',
            })}
          >
            <Stack textAlign="center">
              <Typography variant="h3">You Pay BDT 5000</Typography>
              <Typography variant="body2">(including Texes & Fees)</Typography>
            </Stack>
          </Box>
        </Condition>
        <Condition condition={selectedRooms.length > 0}>
          <Box>
            <Link href="/hotel-booking/roomid">
              <Button variant="secondary" sx={{ width: '100%' }}>
                Book Now
              </Button>
            </Link>
          </Box>
        </Condition>
      </Stack>
    </Stack>
  );
};

export default PricingSummary;
