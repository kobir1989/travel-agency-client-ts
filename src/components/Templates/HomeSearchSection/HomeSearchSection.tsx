'use client';

import {
  Box,
  styled,
  // Stack,
  // Typography,
  Button,
  Container,
} from '@mui/material';
import MuiTabs from '@/components/Molicules/MuiTabs';
import FlightTab from '@/components/Templates/HomeSearchSection/SearchTabs/FlightTab';
import HotelsTab from '@/components/Templates/HomeSearchSection/SearchTabs/HotelsTab';
import TourTab from '@/components/Templates/HomeSearchSection/SearchTabs/TourTab';
import { theme as muiTheme } from '@/theme/theme';

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

const HomeSearchSection = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Box width="100%">
        <MuiTabs
          tabsStyles={tabsStyles}
          tabLabels={tabLabels}
          tabComponents={tabComponents}
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
          variant="secondary"
          sx={{ width: '12rem', fontSize: '1.1rem', borderRadius: '0.7rem' }}
        >
          Search
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default HomeSearchSection;
