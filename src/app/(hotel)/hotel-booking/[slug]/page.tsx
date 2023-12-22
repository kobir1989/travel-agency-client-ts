import { Grid, Stack } from '@mui/material';
import { PriceDetailsCard } from '@/components/Molicules/Cards';
import PageContainer from '@/components/Atoms/PageContainer';
import {
  ReviewHotelBooking,
  HotelBookingForm,
} from '@/components/Templates/Hotels/HotelBooking';

const HotelBookingPage = () => {
  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} sm={12} xs={12}>
          <Stack gap={3}>
            <ReviewHotelBooking />
            <HotelBookingForm />
          </Stack>
        </Grid>
        <Grid item lg={4} md={5} sm={12} xs={12}>
          <PriceDetailsCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HotelBookingPage;
