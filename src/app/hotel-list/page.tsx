import {
  FilterResult,
  HotelListSection,
  ModifyHotelSearch,
} from '@/components/Templates/HotelListPageSections';

const HotelList = () => {
  return (
    <main style={{ margin: '8rem 0 5rem 0' }}>
      <ModifyHotelSearch />
      <FilterResult />
      <HotelListSection />
    </main>
  );
};

export default HotelList;
