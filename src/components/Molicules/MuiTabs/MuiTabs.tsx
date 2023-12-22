'use client';

import { Tab, Tabs, Stack, styled, Grow, Box } from '@mui/material';
import {
  MuiTabsProps,
  TabLabel,
  TabComponents,
} from '@/components/Molicules/MuiTabs/types';
import Icons from '@/components/Atoms/Icons';
import TabPanel from './TabPannel';

const StyledMuiTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  fontWeight: 600,
  fontSize: '0.81rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

const MuiTabs = ({
  tabLabels,
  tabComponents,
  tabsStyles,
  value,
  onHandleChange,
  isCenter,
}: MuiTabsProps) => {
  return (
    <Stack position="relative" alignItems="center">
      <Tabs
        aria-label="tab"
        centered={!!isCenter}
        value={value}
        onChange={onHandleChange}
        indicatorColor="secondary"
        TabIndicatorProps={{
          style: {
            height: '3px',
            borderRadius: '3px',
            position: 'absolute',
            bottom: '0',
          },
        }}
        sx={tabsStyles}
      >
        {tabLabels.map((label: TabLabel) => (
          <StyledMuiTab
            label={label?.label}
            key={label?.id}
            icon={label?.icon && <Icons name={label?.icon} />}
            iconPosition="start"
            sx={{ gap: 1, color: '#73738b' }}
          />
        ))}
      </Tabs>
      {tabComponents.map((tab: TabComponents, index) => (
        <TabPanel value={value} index={index} key={tab?.id}>
          <Grow
            in={value === index}
            unmountOnExit
            style={{
              transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Box>{tab?.component}</Box>
          </Grow>
        </TabPanel>
      ))}
    </Stack>
  );
};

export default MuiTabs;
