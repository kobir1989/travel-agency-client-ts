'use client';

import { Grid, Stack, Typography } from '@mui/material';
import NextImage from '@/components/Atoms/NextImage';

const categories = [
  {
    id: 'ct1',
    title: 'Acivites & Experiences',
    iconUrl: '/assets/tour-activities.svg',
  },
  {
    id: 'ct2',
    title: 'Attractions & Shows',
    iconUrl: '/assets/tour-attractions.svg',
  },
  {
    id: 'ct4',
    title: 'Day out Packeges',
    iconUrl: '/assets/tour-dayout.svg',
  },
  {
    id: 'ct5',
    title: 'Adventures Tours',
    iconUrl: '/assets/tour-adventure.svg',
  },
];

const TourFilter = () => {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item lg={3} md={3} sm={6} xs={6} key={category?.id}>
          <Stack
            direction="row"
            gap={2}
            justifyContent="space-between"
            alignItems="center"
            sx={(theme) => ({
              background: theme.palette.info.light,
              borderRadius: '4px',
              p: '1rem',
              boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              '&:hover': {
                background: '#b0dfee',
                transition: 'all 0.3s ease-in-out',
              },
            })}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              color="primary"
              sx={(theme) => ({
                fontSize: '0.65rem',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '0.9rem',
                },
              })}
            >
              {category.title}
            </Typography>
            <NextImage
              imgUrl={category.iconUrl}
              width={45}
              height={45}
              alt="activities"
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default TourFilter;
