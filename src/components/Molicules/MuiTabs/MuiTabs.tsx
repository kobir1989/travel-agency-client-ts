'use client';

import { useState } from 'react';
import { Tab, Tabs, Box, styled } from '@mui/material';
import {
  MuiTabsProps,
  TabLabel,
  TabComponents,
} from '@/components/Molicules/MuiTabs/types';
import TabPanel from './TabPannel';

const StyledMuiTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  fontWeight: 600,
  fontSize: '1rem',
}));

const MuiTabs = ({ tabLabels, tabComponents }: MuiTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        TabIndicatorProps={{
          style: {
            height: '3px',
            borderRadius: '3px',
          },
        }}
      >
        {tabLabels.map((label: TabLabel) => (
          <StyledMuiTab label={label?.label} key={label?.id} />
        ))}
      </Tabs>
      {tabComponents.map((tab: TabComponents, index) => (
        <TabPanel value={value} index={index} key={tab?.id}>
          {tab?.component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default MuiTabs;
