'use client';

import { Box, styled, Button, Container } from '@mui/material';
import MuiTabs from '@/components/Molicules/MuiTabs';
import { theme as muiTheme } from '@/theme/theme';
import { useState } from 'react';
import { tabLabels } from '@/constants/searchTabLabels';
import { FlightTab } from '@/components/Organisms/SearchTabs';

const StyledContainer = styled(Container)(({ theme }) => ({
  background: theme.palette.info.light,
  borderRadius: '1rem',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  position: 'relative',
  paddingBottom: '3rem',
  minHeight: '15rem',
}));

const tabComponents = [
  {
    id: 'Cmp1',
    component: <FlightTab />,
  },
  {
    id: 'Cmp2',
    component: <div>tab 2</div>,
  },
  {
    id: 'Cmp3',
    component: <div>tab 3</div>,
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

const Search = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // navigte to pages based on tab value
  const handleSearch = () => {};
  return (
    <StyledContainer maxWidth="lg">
      <Box width="100%">
        <MuiTabs
          isCenter
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

export default Search;
