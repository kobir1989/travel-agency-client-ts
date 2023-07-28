'use client';

import Icons from '@/components/Atoms/Icons';
import NextImage from '@/components/Atoms/NextImage';
import { Box, Button, Stack, Typography, styled } from '@mui/material';

const ArrowSpan = styled('span')({
  width: '6rem',
  height: '2px',
  background: '#525371a4',
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    width: 0,
    height: 0,
    borderTop: '0.5rem solid transparent',
    borderLeft: '1rem solid #525371ac',
    transform: 'translateX(-50%)',
  },
  '&::after': {
    content: '"Non-Stop"',
    position: 'absolute',
    top: '-1.7rem',
    left: '0.5rem',
    fontSize: '0.8rem',
  },
});

const OldPrice = styled('span')({
  fontSize: '0.9rem',
  textDecoration: 'line-through',
});

const FlightCard = () => {
  return (
    <Stack
      sx={(theme) => ({
        background: theme.palette.info.light,
        maxWidth: '60rem',
        borderRadius: '6px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        flexDirection: 'row',
        justifyContent: 'space-between',
      })}
    >
      <Box width="75%">
        <Stack
          p="1rem"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Stack direction="row" gap={1} alignItems="center">
            <NextImage
              alt="amerats"
              imgUrl="/assets/emitates.png"
              width={70}
              height={20}
              radius="0"
            />
            <Typography variant="body1" fontSize="1rem">
              Amerats Airlines
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Box>
              <Typography variant="h4" lineHeight="1.4rem">
                12.00
              </Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({ color: theme.palette.info.dark })}
              >
                DAC
              </Typography>
            </Box>
            {/* arrow */}
            <ArrowSpan />
            <Box>
              <Typography variant="h4" lineHeight="1.4rem">
                12.00
              </Typography>
              <Typography
                variant="body1"
                textAlign="end"
                sx={(theme) => ({ color: theme.palette.info.main })}
              >
                DUB
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Typography variant="body1" fontSize="1rem" fontWeight="600">
              1h 15m
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.light,
          p: '1rem',
          width: '25%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        })}
      >
        <Typography variant="body1">Flight Number: AE85</Typography>
        <Typography variant="h4">
          <OldPrice>BDT 4500</OldPrice> BDT 5000
        </Typography>
        <Button
          variant="secondary"
          sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          Select <Icons name="lognArrow" />
        </Button>
      </Box>
    </Stack>
  );
};

export default FlightCard;
