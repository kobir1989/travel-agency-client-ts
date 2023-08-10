'use client';

import NextImage from '@/components/Atoms/NextImage';
import Icons from '@/components/Atoms/Icons';
import { Box, Stack, Grid, Typography, styled } from '@mui/material';
import Chip from '@/components/Atoms/Chip';
import Link from 'next/link';

const StyledTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

const TourCard = () => {
  return (
    <Link href="/tour-details/dfdfdfd">
      <Box
        sx={(theme) => ({
          background: theme.palette.info.light,
          padding: '1rem',
          width: '100%',
          borderRadius: '6px',
          boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        })}
      >
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box height="15rem">
              <NextImage
                imgUrl="/assets/campaign_DFLY2023_hotdeal.jpg"
                alt="tour"
                width={200}
                height={200}
                styles={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Stack gap={3}>
                <Typography variant="h3">Camping in coxs Bazar</Typography>
                <StyledTypography variant="body1">
                  <Icons name="location" size="1.2rem" />
                  Coxs Bazar
                </StyledTypography>
                <StyledTypography variant="body1">
                  <Icons name="time" size="1.2rem" />
                  00:00:00
                </StyledTypography>
                <StyledTypography variant="body1">
                  <Icons name="people" size="1.2rem" />
                  From 1 to 200 People
                </StyledTypography>
                <Chip
                  iconName="child"
                  label="Kids Friendly"
                  chipVariant="filled"
                />
              </Stack>
              <Stack textAlign="end" gap={1}>
                <Typography variant="body1">Starting From</Typography>
                <Typography
                  variant="body1"
                  color="error"
                  sx={{ textDecoration: 'line-through' }}
                >
                  BDT 300
                </Typography>
                <Typography variant="h3">BDT 285</Typography>
                <Typography variant="body2">Per Person</Typography>
                <Chip iconName="discount" label="5%" chipVariant="filled" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

export default TourCard;
