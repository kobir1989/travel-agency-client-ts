'use client';

import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import Chip from '@/components/Atoms/Chip';
import NextImage from '@/components/Atoms/NextImage';
import { HotDealsCardProps } from '@/components/Molicules/Cards/types';
import Icons from '@/components/Atoms/Icons';

const HotDealsCard = ({
  title,
  descriptions,
  image,
  discount,
}: HotDealsCardProps) => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '4px',
        width: '100%',
        height: '100%',
        padding: '2rem 1rem',
        position: 'relative',
      })}
    >
      <Stack
        sx={(theme) => ({
          flexDirection: 'column',
          gap: 4,
          [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
          },
        })}
      >
        <Box
          sx={(theme) => ({
            marginTop: '-3rem',
            marginLeft: '-2rem',
            width: '80%',
            height: '200px',
            [theme.breakpoints.up('sm')]: {
              width: '180px',
              height: '130px',
            },
          })}
        >
          <NextImage
            imgUrl={image}
            alt="offer"
            width={180}
            height={130}
            styles={{ borderRadius: '8px', width: '100%', height: '100%' }}
          />
        </Box>

        <Stack
          gap={1}
          sx={(theme) => ({
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '80%',
            },
          })}
        >
          <Typography
            variant="h3"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '3rem',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '4.5rem',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            {descriptions}
          </Typography>
        </Stack>
      </Stack>
      <Box mb={-1} mt={2}>
        <Chip label={discount} iconName="discount" chipVariant="filled" />
      </Box>
      <Box sx={{ position: 'absolute', right: '1.5rem', bottom: '-1.3rem' }}>
        <Button variant="secondary">
          <Icons name="arrowOutWard" size="1.3rem" /> Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HotDealsCard;
