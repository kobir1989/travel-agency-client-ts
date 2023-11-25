import PageContainer from '@/components/Atoms/PageContainer';
import { Stack } from '@mui/material';
import {
  TourPreview,
  TourDetails,
} from '@/components/Templates/Tours/TourDetails';

const TourDetailsPage = () => {
  return (
    <PageContainer>
      <Stack gap={3}>
        <TourPreview />
        <TourDetails />
      </Stack>
    </PageContainer>
  );
};

export default TourDetailsPage;
