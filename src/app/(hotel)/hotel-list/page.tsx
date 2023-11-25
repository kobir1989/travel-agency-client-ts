import PageContainer from '@/components/Atoms/PageContainer';
import {
  FilterResult,
  HotelListSection,
  ModifyHotelSearch,
} from '@/components/Templates/Hotels/HotelList';

const HotelList = () => {
  return (
    <PageContainer isFlex>
      <ModifyHotelSearch />
      <FilterResult />
      <HotelListSection />
    </PageContainer>
  );
};

export default HotelList;
