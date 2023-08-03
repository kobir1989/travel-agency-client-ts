'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import NextImage from '@/components/Atoms/NextImage';
import Icons from '@/components/Atoms/Icons';
import Chip from '@/components/Atoms/Chip';

const HotelsCard = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        width: '100%',
      })}
    >
      <Stack
        gap={2}
        sx={(theme) => ({
          direction: 'column',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
          },
        })}
      >
        {/* first Box with image */}
        <Box
          sx={(theme) => ({
            objectFit: 'cover',
            width: '100%',
            height: '220px',
            [theme.breakpoints.up('sm')]: { width: '100%', height: '220px' },
            [theme.breakpoints.up('md')]: { width: '280px', height: '220px' },
          })}
        >
          <NextImage
            imgUrl="/assets/237084661.jpg"
            alt="hotel"
            width={250}
            height={220}
            styles={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </Box>
        {/* details */}
        <Stack
          justifyContent="space-between"
          sx={{
            flexDirection: 'column',
            gap: 1,
            '@media (min-width: 422px)': {
              flexDirection: 'row',
              flex: 2,
              gap: 2,
            },
          }}
        >
          {/* center Box */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h3">Hotel Regal Palace</Typography>
            <Stack direction="row" gap={1}>
              <Typography
                variant="body1"
                sx={{
                  border: '1px solid #D1D1D1',
                  padding: '3px 0.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Icons name="star" color="#fccd03" size="1.3rem" />3 Star
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              >
                <Icons name="location" size="1rem" /> Dhaka, Bangladesh
              </Typography>
            </Stack>
            {/* Rooms red border */}
            <Box
              sx={(theme) => ({
                border: `1px solid ${theme.palette.error.main}`,
                textAlign: 'center',
                borderRadius: '6.12rem',
                padding: '0.2rem',
                maxWidth: '9.8rem',
              })}
            >
              <Typography
                variant="body1"
                sx={(theme) => ({ color: theme.palette.error.main })}
              >
                7 Rooms Remaining
              </Typography>
            </Box>
            <Stack
              sx={(theme) => ({
                flexDirection: 'column',
                gap: 1,
                alignItems: 'flex-start',
                [theme.breakpoints.up('md')]: {
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              })}
            >
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Icons name="acIcon" size="1.2rem" /> Air Conditioning
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Icons name="accessible" size="1.2rem" />
                Accessable BeathRooms
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Icons name="parking" size="1.2rem" />
              Free Large Vehicle Parking
            </Typography>
          </Box>
          {/* Last Box */}
          <Stack
            sx={(theme) => ({
              alignItems: 'flex-start',
              [theme.breakpoints.up('sm')]: {
                alignItems: 'flex-end',
              },
            })}
          >
            <Chip iconName="star" label="3.3/5" chipVariant="filled" />
            <Typography
              variant="body1"
              sx={(theme) => ({
                background: theme.palette.secondary.dark,
                color: theme.palette.info.light,
                borderRadius: '6.25rem',
                width: '5rem',
                textAlign: 'center',
                padding: '0.2rem',
                margin: '0.9rem 0 0.5rem 0',
              })}
            >
              52% off
            </Typography>
            <Typography variant="body2">Starts from</Typography>
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.error.light,
                textDecoration: 'line-through',
              })}
            >
              BDT 3100
            </Typography>
            <Typography variant="h3" mt={1}>
              BDT 1500
            </Typography>
            <Typography variant="body2" lineHeight="1.5rem">
              for 1 Night per person
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HotelsCard;
