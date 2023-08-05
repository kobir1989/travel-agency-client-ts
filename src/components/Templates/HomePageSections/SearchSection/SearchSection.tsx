'use client';

import { Box, styled, Button, Container } from '@mui/material';
import MuiTabs from '@/components/Molicules/MuiTabs';
import { theme as muiTheme } from '@/theme/theme';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import dayjs from 'dayjs';
import {
  TourTab,
  HotelsTab,
  FlightTab,
} from '@/components/Templates/HomePageSections/SearchSection/SearchTabs';

const StyledContainer = styled(Container)(({ theme }) => ({
  background: theme.palette.info.light,
  borderRadius: '1rem',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  position: 'relative',
  paddingBottom: '3rem',
}));

const tabLabels = [
  {
    label: 'Flight',
    id: 'FL1',
    icon: 'flight',
  },
  {
    label: 'Hotel',
    id: 'HT1',
    icon: 'hotel',
  },
  {
    label: 'Tour',
    id: 'TR1',
    icon: 'tour',
  },
];

const tabComponents = [
  {
    id: 'Cmp1',
    component: <FlightTab />,
  },
  {
    id: 'Cmp2',
    component: <HotelsTab />,
  },
  {
    id: 'Cmp3',
    component: <TourTab />,
  },
];

const tabsStyles = {
  background: '#FFF',
  width: '90%',
  borderRadius: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  marginTop: '-2.5rem',
  alignItems: 'center',
  '& .MuiTabs-flexContainer': {
    padding: '0.2rem 0',
  },
  [muiTheme.breakpoints.up('sm')]: {
    width: '70%',
  },
  [muiTheme.breakpoints.up('md')]: {
    width: '50%',
  },
  [muiTheme.breakpoints.up('lg')]: {
    width: '40%',
  },
};

const SearchSection = () => {
  const [value, setValue] = useState(0);
  const { selectedArrival, selectedDepartValue, departDate } = useSelector(
    (state: RootState) => state.searchFlight,
  );
  const { checkIn, checkOut, selectedlocation, roomCount, guests } =
    useSelector((state: RootState) => state.searchHotel);
  const { selectedTour } = useSelector((state: RootState) => state.searchTour);
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // navigte to pages based on tab value
  const handleSearch = () => {
    if (value === 0) {
      router.push(
        `/flight-list?depart=${selectedDepartValue.title.toLocaleLowerCase()}&arrival=${selectedArrival.title.toLocaleLowerCase()}&date=${dayjs(
          departDate,
        ).format('MM-DD-YYYY')}`,
      );
    }
    if (value === 1) {
      router.push(
        `/hotel-list?location=${selectedlocation.title.toLowerCase()}&checkin=${dayjs(
          checkIn,
        ).format('MM-DD-YYYY')}&checkout=${dayjs(checkOut).format(
          'MM-DD-YYYY',
        )}&rooms=${roomCount}&guests=${guests}`,
      );
    }
    if (value === 2) {
      router.push(`/tour/list?location=${selectedTour.title.toLowerCase()}`);
    }
  };
  return (
    <StyledContainer maxWidth="lg">
      <Box width="100%">
        <MuiTabs
          tabsStyles={tabsStyles}
          tabLabels={tabLabels}
          tabComponents={tabComponents}
          value={value}
          onHandleChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-1.5rem',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        <Button
          onClick={handleSearch}
          variant="secondary"
          sx={{ width: '12rem', fontSize: '1.1rem', borderRadius: '0.7rem' }}
        >
          Search
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default SearchSection;
