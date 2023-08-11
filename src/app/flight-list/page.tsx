import {
  ModifyFlightSearch,
  FilterSection,
  FlightListSection,
} from '@/components/Templates/FlightListPageSections';
import PageContainer from '@/components/Atoms/PageContainer';

const FlightList = () => {
  return (
    <PageContainer isFlex>
      <ModifyFlightSearch />
      <FilterSection />
      <FlightListSection />
    </PageContainer>
  );
};

export default FlightList;
