'use client';

import { Stack, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

const SpecialOffersCard = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '6px',
        padding: '0.8rem 0.8rem 2.5rem 0.8rem',
        maxWidth: '21rem',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        position: 'relative',
        marginLeft: 8,
      })}
    >
      <Stack gap={2} width="100%">
        <Box width="100%">
          <Image
            src="/assets/instanbul.jpg"
            alt="istanbul"
            width={310}
            height={200}
            style={{ borderRadius: '12px' }}
          />
        </Box>
        <Typography variant="h3">
          Stopover opportunity in İstanbul with Turkish Airlines
        </Typography>
      </Stack>
      <Box sx={{ position: 'absolute', right: '0.54rem', bottom: '-1.3rem' }}>
        <Button variant="secondary">Learn More</Button>
      </Box>
    </Box>
  );
};

export default SpecialOffersCard;
