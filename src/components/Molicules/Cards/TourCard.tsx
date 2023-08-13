'use client';

import NextImage from '@/components/Atoms/NextImage';
import Icons from '@/components/Atoms/Icons';
import { Box, Stack, Grid, Typography, styled } from '@mui/material';
import Chip from '@/components/Atoms/Chip';
import Link from 'next/link';
import { TourCardProps } from '@/components/Molicules/Cards/types';
import dayjs from 'dayjs';

const StyledTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

const TourCard = ({
  title,
  groupSize,
  location,
  startDate,
  id,
  image,
  oldPrice,
  discount,
}: TourCardProps) => {
  return (
    <Link href={`/tour-details/${id}`}>
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
                imgUrl={image}
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
                <Typography variant="h3">{title}</Typography>
                <StyledTypography variant="body1" textTransform="capitalize">
                  <Icons name="location" size="1.2rem" />
                  {location}
                </StyledTypography>
                <StyledTypography variant="body1">
                  <Icons name="time" size="1.2rem" />
                  Starts From {dayjs(startDate).format('DD MMM YYYY')}
                </StyledTypography>
                <StyledTypography variant="body1">
                  <Icons name="people" size="1.2rem" />
                  {groupSize} People Max
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
                  BDT {oldPrice}
                </Typography>
                <Typography variant="h3">
                  BDT {Math.floor(oldPrice - (discount / 100) * oldPrice)}
                </Typography>
                <Typography variant="body2">Per Person</Typography>
                <Chip
                  iconName="discount"
                  label={`${discount}%`}
                  chipVariant="filled"
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

export default TourCard;
