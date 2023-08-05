import {
  ModifyFlightSearch,
  FilterSection,
  FlightListSection,
} from '@/components/Templates/FlightListPageSections';

const FlightList = () => {
  return (
    <main
      style={{
        margin: '8rem 0 5rem 0',
      }}
    >
      <ModifyFlightSearch />
      <FilterSection />
      <FlightListSection />
    </main>
  );
};

export default FlightList;
