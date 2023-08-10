'use client';

import PreviewImages from '@/components/Molicules/PreviewImages';
import { Stack, Typography, Box, Grid } from '@mui/material';
import Icons from '@/components/Atoms/Icons';
import Ratings from '@/components/Atoms/Ratings';

const HotelInfo = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        padding: '1rem',
      })}
    >
      <Grid container spacing={3}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up('sm')]: {
                height: '26rem',
              },
            })}
          >
            <PreviewImages />
          </Box>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          {/* details */}
          <Typography variant="h2">Ocean Paradise Hotel & Resort</Typography>
          <Stack
            direction="row"
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: 2,
              [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
                paddingTop: 1,
              },
            })}
          >
            <Ratings size="small" value={4} />
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icons name="location" size="1.3rem" /> 28-29, coxs Bazar,
              Bangladesh
            </Typography>
          </Stack>
          <Box
            sx={(theme) => ({
              mt: 2,
              [theme.breakpoints.up('md')]: {
                mt: 8,
              },
            })}
          >
            <Typography variant="h3" color="primary">
              What is Nearby
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icons name="location" size="1.3rem" /> 0.66 km from Sea inn beach
              point
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              mt: 2,
              [theme.breakpoints.up('md')]: {
                mt: 8,
              },
            })}
          >
            <Typography variant="h3" color="primary">
              Facilities
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{ display: 'flex', gap: '5px' }}
            >
              <Icons name="accessible" size="1.3rem" /> in-room Accessibility,
              Locker, City Center, Early Check-Out, Car Rental
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelInfo;
