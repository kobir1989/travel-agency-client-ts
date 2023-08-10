'use client';

import { Stack, styled, Container, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import { StyledFilterButtonProps, StyledStopsButtonProps } from './types';

const StyledFilterButton = styled('button')<StyledFilterButtonProps>(
  ({ theme, background }) => ({
    background: background
      ? theme.palette.primary.light
      : theme.palette.info.light,
    border: 'unset',
    padding: '0.4rem 0.7rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  }),
);

const StyledStopsButtonWrapper = styled(Stack)(({ theme }) => ({
  background: theme.palette.info.light,
  padding: '0 0.5rem',
}));

const StyledSpan = styled('span')({
  color: '#888897',
  fontSize: '0.81rem',
  fontWeight: 300,
  letterSpacing: '0.2px',
  textAlign: 'start',
});

const StyledStopsButton = styled('button')<StyledStopsButtonProps>(
  ({ theme, background }) => ({
    background: background
      ? theme.palette.primary.main
      : theme.palette.info.light,
    border: '1px solid #D1D1D1',
    padding: '5px 0.8rem',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    color: background ? theme.palette.info.light : theme.palette.info.dark,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.info.light,
      transition: 'all 0.3s ease-in-out',
    },
  }),
);

const FilterSection = () => {
  const [selectedButton, setSelectedButton] = useState({
    btn1: true,
    btn2: false,
  });

  const [selectedStop, setSelectedStop] = useState({
    stops0: true,
    stops1: false,
    stops2: false,
  });

  return (
    <Container maxWidth="lg" sx={{ mt: '2rem' }}>
      <Grid
        rowSpacing={1}
        container
        sx={(theme) => ({
          background: theme.palette.info.light,
          padding: '0.6rem 1rem 1rem 1rem',
          borderRadius: '6px',
          boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        })}
      >
        <Grid item xs={12} sm={6} md={4.5} lg={4}>
          <StyledFilterButton
            background={selectedButton.btn1}
            onClick={() => setSelectedButton({ btn1: true, btn2: false })}
          >
            Cheapest
            <StyledSpan>
              Showing the cheapest flights in ascending order
            </StyledSpan>
          </StyledFilterButton>
        </Grid>

        <Grid item xs={12} sm={6} md={4.5} lg={4}>
          <StyledFilterButton
            background={selectedButton.btn2}
            onClick={() => setSelectedButton({ btn1: false, btn2: true })}
          >
            Fastest
            <StyledSpan>
              Click to see the fastest flights in ascending order
            </StyledSpan>
          </StyledFilterButton>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={4}>
          <StyledStopsButtonWrapper>
            <Typography
              variant="h4"
              fontSize="1rem"
              fontWeight={600}
              lineHeight="1.7rem"
            >
              Stops
            </Typography>
            <Stack direction="row" gap={1}>
              <StyledStopsButton
                background={selectedStop.stops0}
                onClick={() =>
                  setSelectedStop({
                    stops0: true,
                    stops1: false,
                    stops2: false,
                  })
                }
              >
                0
              </StyledStopsButton>
              <StyledStopsButton
                background={selectedStop.stops1}
                onClick={() =>
                  setSelectedStop({
                    stops0: false,
                    stops1: true,
                    stops2: false,
                  })
                }
              >
                1
              </StyledStopsButton>
              <StyledStopsButton
                background={selectedStop.stops2}
                onClick={() =>
                  setSelectedStop({
                    stops0: false,
                    stops1: false,
                    stops2: true,
                  })
                }
              >
                2
              </StyledStopsButton>
            </Stack>
          </StyledStopsButtonWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FilterSection;
