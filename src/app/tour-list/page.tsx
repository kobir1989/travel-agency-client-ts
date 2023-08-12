import PageContainer from '@/components/Atoms/PageContainer';
import {
  ModifyTourSearch,
  TourFilter,
  TourListSection,
} from '@/components/Templates/TourListPageSections';

const TourList = () => {
  return (
    <PageContainer isFlex>
      <ModifyTourSearch />
      <TourFilter />
      <TourListSection />
    </PageContainer>
  );
};

export default TourList;
