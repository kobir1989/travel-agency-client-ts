'use client';

import MuiTabs from '@/components/Molicules/MuiTabs';
import DetailsTab from '@/components/Organisms/FlightDetails/DetailsTab';
import PolicyTab from '@/components/Organisms/FlightDetails/PolicyTab';
import { Typography, Box, Divider } from '@mui/material';
import { useState } from 'react';

const tabLabels = [
  { id: 'f1', label: 'Baggage' },
  { id: 'f2', label: 'Fare' },
  { id: 'f3', label: 'Policy' },
];

const tabsStyles = {
  borderBottom: '1px solid #D1D1D1',
  width: '100%',
};

const FlightDetails = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '4px',
        boxShadow: '0 4px 24px 0 rgba(34,41,47,.1)',
      })}
    >
      <Box pt={3} pb={3}>
        <Typography variant="body1" fontWeight={600} color="primary" pl={2}>
          Flight Details
        </Typography>
      </Box>
      <Divider />
      <Box pt={2}>
        <MuiTabs
          isCenter={false}
          value={tabValue}
          onHandleChange={handleTabChange}
          tabLabels={tabLabels}
          tabsStyles={tabsStyles}
          tabComponents={[
            {
              id: 't1',
              component: (
                <DetailsTab
                  columnTitle={{
                    colOne: 'Baggage',
                    colTwo: 'Fare',
                    colThree: 'Policy',
                  }}
                  columnValue={{
                    valueOne: 'DAC-XCB',
                    valueTwo: '7 kg',
                    valueThree: '20 kg',
                  }}
                />
              ),
            },
            {
              id: 't1',
              component: (
                <DetailsTab
                  columnTitle={{
                    colOne: 'Base Fare',
                    colTwo: 'Fare',
                    colThree: 'Tax',
                  }}
                  columnValue={{
                    valueOne: 'Adult x 1',
                    valueTwo: '3774',
                    valueThree: '925',
                  }}
                />
              ),
            },
            { id: 't1', component: <PolicyTab /> },
          ]}
        />
      </Box>
    </Box>
  );
};

export default FlightDetails;
