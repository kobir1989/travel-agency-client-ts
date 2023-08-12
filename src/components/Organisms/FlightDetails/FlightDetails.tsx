'use client';

import MuiTabs from '@/components/Molicules/MuiTabs';
import DetailsTab from '@/components/Organisms/FlightDetails/DetailsTab';
import PolicyTab from '@/components/Organisms/FlightDetails/PolicyTab';
import { Box, Divider } from '@mui/material';
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
    <Box>
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
