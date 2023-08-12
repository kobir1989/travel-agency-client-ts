'use client';

import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import NextImage from '@/components/Atoms/NextImage';
import { FlightCardProps } from '@/components/Molicules/Cards/types';
import { Box, Button, Stack, Typography, styled, Grid } from '@mui/material';
import dayjs from 'dayjs';

const ArrowBox = styled('div')({
  width: '8rem',
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
    left: '50%',
    transform: 'translate(-50%,0)',
    fontSize: '0.8rem',
    fontWeight: 400,
  },
});

const OldPrice = styled('span')({
  fontSize: '0.9rem',
  textDecoration: 'line-through',
  fontWeight: 400,
});

const FlightCard = ({ isPrice = true, onNavigate }: FlightCardProps) => {
  return (
    <Grid container alignItems="center">
      <Grid item lg={isPrice ? 3 : 4} md={isPrice ? 3 : 4} sm={5} xs={12}>
        <Stack
          padding="1rem 0"
          direction="row"
          gap={1}
          alignItems="center"
          width="100%"
          ml={2}
        >
          <NextImage
            alt="amerats"
            imgUrl="/assets/emitates.png"
            width={70}
            height={20}
          />
          <Typography variant="body1" fontSize="1rem">
            Amerats Airlines
          </Typography>
        </Stack>
      </Grid>
      {/* middle */}
      <Grid item lg={isPrice ? 6 : 8} md={isPrice ? 6 : 8} sm={7} xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          padding={3}
        >
          <Box>
            <Typography variant="h3" lineHeight="1.4rem">
              12.00
            </Typography>

            <Typography variant="body2" lineHeight="1.5rem">
              {dayjs(new Date()).format('dddd')} <br />
              {dayjs(new Date()).format('MMM YYYY')}
            </Typography>
            <Typography
              fontWeight={600}
              variant="body1"
              sx={(theme) => ({ color: theme.palette.info.dark })}
            >
              DAC
            </Typography>
          </Box>
          {/* arrow */}
          <ArrowBox>
            <Typography
              variant="body1"
              sx={(theme) => ({
                position: 'absolute',
                top: '0.5rem',
                left: '50%',
                transform: 'translate(-50%,0)',
                [theme.breakpoints.up('md')]: {
                  display: 'none',
                },
              })}
            >
              1h 30m
            </Typography>
          </ArrowBox>

          <Box>
            <Typography variant="h3" lineHeight="1.4rem">
              01: 15
            </Typography>

            <Typography variant="body2" lineHeight="1.5rem">
              {dayjs(new Date()).format('dddd')} <br />
              {dayjs(new Date()).format('MMM YYYY')}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={600}
              sx={(theme) => ({ color: theme.palette.info.dark })}
            >
              DAC
            </Typography>
          </Box>
          <Typography
            variant="h3"
            fontSize="1rem"
            fontWeight="600"
            sx={(theme) => ({
              display: 'none',
              [theme.breakpoints.up('md')]: {
                display: 'unset',
              },
            })}
          >
            1h 15m
          </Typography>
        </Stack>
      </Grid>
      {/* last */}
      <Condition condition={isPrice}>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={(theme) => ({ background: theme.palette.primary.light })}
        >
          <Box
            sx={{
              p: '2rem',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="body1">Flight Number: AE85</Typography>
            <Typography variant="h3" lineHeight="2rem">
              <OldPrice>BDT 4500</OldPrice> BDT 5000
            </Typography>
            <Button
              onClick={onNavigate ? () => onNavigate('test') : undefined}
              variant="secondary"
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'space-between',
                width: '100%',
                padding: '0.3rem 1rem',
              }}
            >
              Select <Icons name="lognArrow" />
            </Button>
          </Box>
        </Grid>
      </Condition>
    </Grid>
  );
};

export default FlightCard;
