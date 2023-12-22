'use client';

import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const addedRooms = [
  { id: 'ar1', name: 'Regular Room sea Side', price: 4250, taxes: 1100 },
  { id: 'ar2', name: 'Regular Room', price: 4050, taxes: 1100 },
];

const PricingSummary = () => {
  const [rooms, setRooms] = useState(addedRooms);
  const handleRemoveRoom = (id: string) => {
    const findSelectedRoom = rooms.filter((room) => room.id !== id);
    setRooms(findSelectedRoom);
  };

  return (
    <Stack
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        minHeight: '28.5rem',
        justifyContent: 'space-between',
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
      <Condition condition={rooms?.length <= 0}>
        <Typography variant="body1" textAlign="center">
          Add Rooms To Continue
        </Typography>
      </Condition>
      <Stack>
        {rooms.map((room) => (
          <Stack
            key={room?.id}
            gap={2}
            sx={(theme) => ({
              background: theme.palette.info.light,
              margin: '1.5rem 1rem',
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
              {room?.name}
            </Typography>
            <Box>
              <Typography variant="body1" fontSize="1rem" fontWeight={600}>
                BDT {room?.price}
              </Typography>
              <Typography variant="body2" mt="0.3rem">
                + BDT {room?.taxes} Taxes & Fees
              </Typography>
            </Box>
          </Stack>
        ))}

        {/* Total Price */}
        <Condition condition={rooms?.length > 0}>
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

        <Box pt={3} pb={3} width="90%" margin="auto">
          <Link
            href={{
              pathname: '/hotel-booking/roomid',
            }}
          >
            <Button variant="secondary" sx={{ width: '100%' }}>
              Book Now
            </Button>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default PricingSummary;
