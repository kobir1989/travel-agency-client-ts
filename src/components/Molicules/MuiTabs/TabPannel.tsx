import { TabPanelProps } from '@/components/Molicules/MuiTabs/types';
import { Box } from '@mui/material';

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box width="100%" mt={3}>
          {children}
        </Box>
      )}
    </div>
  );
};
export default TabPanel;
