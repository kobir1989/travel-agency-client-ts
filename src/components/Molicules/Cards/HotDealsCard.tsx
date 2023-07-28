'use client';

import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import Chip from '@/components/Atoms/Chip';
import NextImage from '@/components/Atoms/NextImage';
import { HotDealsCardProps } from '@/components/Molicules/Cards/types/types';

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
        width: '30rem',
        padding: '2rem 1rem',
        position: 'relative',
      })}
    >
      <Stack direction="row" gap={4}>
        <Box sx={{ marginTop: '-3rem', marginLeft: '-2rem' }}>
          <NextImage
            imgUrl={image}
            alt="offer"
            width={180}
            height={130}
            radius="8px"
          />
        </Box>

        <Stack gap={1}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{descriptions}</Typography>
        </Stack>
      </Stack>
      <Box mb={-1}>
        <Chip label={discount} iconName="discount" chipVariant="filled" />
      </Box>
      <Box sx={{ position: 'absolute', right: '1.5rem', bottom: '-1.3rem' }}>
        <Button variant="secondary">Learn More</Button>
      </Box>
    </Box>
  );
};

export default HotDealsCard;
