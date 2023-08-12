import PageContainer from '@/components/Atoms/PageContainer';
import {
  TourPreview,
  TourDetails,
} from '@/components/Templates/TourDetailsPageSections';
import { Stack } from '@mui/material';

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
