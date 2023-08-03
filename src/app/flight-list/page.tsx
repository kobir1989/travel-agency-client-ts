import {
  ModifySearchSection,
  FilterSection,
  FlightListSection,
} from '@/components/Templates/FlightListSections';

const FlightList = () => {
  return (
    <main
      style={{
        margin: '8rem 0 5rem 0',
      }}
    >
      <ModifySearchSection />
      <FilterSection />
      <FlightListSection />
    </main>
  );
};

export default FlightList;
