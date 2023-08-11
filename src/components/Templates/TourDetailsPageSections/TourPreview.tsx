'use client';

import Icons from '@/components/Atoms/Icons';
import PreviewImages from '@/components/Molicules/PreviewImages';
import { Box, Grid, Typography, Stack, Button, styled } from '@mui/material';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const StyledSpan = styled('span')({
  fontSize: '0.87rem',
  fontWeight: 300,
  color: '#696b7a',
});

const TourPreview = () => {
  const params = useParams();
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
          <Stack justifyContent="space-between" height="100%">
            {/* details */}
            <Typography variant="h2">Ocean Paradise Hotel & Resort</Typography>
            <Stack
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
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <Icons name="location" size="1.3rem" /> 28-29, coxs Bazar,
                Bangladesh
              </Typography>
            </Stack>
            <Typography variant="h3" mt={1}>
              BDT 285.00 <StyledSpan>( Including Tax and Fees )</StyledSpan>
            </Typography>
            <Box
              sx={{
                mt: 2,
              }}
            />
            <Box>
              <Typography variant="h3">Overview</Typography>
              <Typography variant="body2" mt={1} lineHeight="1.5rem">
                Ever dreamed of rising upwards, far from your everyday worries,
                to a place where the man-made sounds of the world are reduced to
                a murmur, and the only sounds are your own exclamations of
                wonder and the roar of the ocean? Parasailing at Dorianagar or
                Himchari is here to give you the most thrilling experience of
                Cox&apos;s Bazar. Enjoy the sea view in the eyes of a seagull
                while getting yourself lost in the breathtaking experience of
                parasailing. If you are willing to make your upcoming vacation
                at Cox&apos;s Bazar count, this has to be on your activity
                checklist!
              </Typography>
            </Box>
            <Link
              href={{
                pathname: '/tour-booking',
                query: { tourId: params.slug },
              }}
            >
              <Box mt={4} width="100%">
                <Button variant="secondary" sx={{ width: '100%' }}>
                  Book Now
                </Button>
              </Box>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TourPreview;
