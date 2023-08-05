import {
  ModifyTourSearch,
  TourFilter,
  TourListSection,
} from '@/components/Templates/TourListPageSections';

const TourList = () => {
  return (
    <main style={{ margin: '8rem 0 5rem 0' }}>
      <ModifyTourSearch />
      <TourFilter />
      <TourListSection />
    </main>
  );
};

export default TourList;
