import SectionContainer from '@/components/Atoms/SectionContainer';
import FlightDetails from '@/components/Organisms/FlightDetails';
import { Accordion, AccordionSummary, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SelectedFlightPreview = () => {
  return (
    <Stack gap={3}>
      {/* <SectionContainer> */}
      {/* <FlightCard isPrice={false} /> */}
      {/* </SectionContainer> */}
      <SectionContainer>
        <Accordion sx={{ boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ p: 0 }}
          >
            <Typography variant="h3">Flight Details</Typography>
          </AccordionSummary>
          <FlightDetails />
        </Accordion>
      </SectionContainer>
    </Stack>
  );
};

export default SelectedFlightPreview;
