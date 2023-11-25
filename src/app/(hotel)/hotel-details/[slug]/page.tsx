import PageContainer from '@/components/Atoms/PageContainer';
import { Grid, Stack } from '@mui/material';
import {
  HotelInfo,
  Policy,
  PricingSummary,
  RoomDetails,
} from '@/components/Templates/Hotels/HotelDetails';

const HotelDetailsPage = () => {
  return (
    <PageContainer>
      <HotelInfo />
      <Grid container spacing={3} mt={2}>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <Stack gap={3}>
            <RoomDetails />
            <Policy />
          </Stack>
        </Grid>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <PricingSummary />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HotelDetailsPage;
