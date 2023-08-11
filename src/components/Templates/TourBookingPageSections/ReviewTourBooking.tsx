'use client';

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Icons from '@/components/Atoms/Icons';

const ReviewTourBooking = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
      })}
    >
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ p: 0 }}
        >
          <Typography variant="h3">Review Your Booking</Typography>
        </AccordionSummary>

        <Stack gap={2}>
          <Typography
            variant="body1"
            fontSize="1rem"
            fontWeight={600}
            color="primary"
          >
            Radiant Fish Word
          </Typography>
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            <Icons name="location" size="1.3rem" />
            Coxs Bazar, Banglades
          </Typography>
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            <Icons name="time" size="1.3rem" />
            Tour Starts 11 Aug Fri
          </Typography>
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            <Icons name="time" size="1.3rem" />
            Tour Ends 15 Aug Tue
          </Typography>
        </Stack>
      </Accordion>
    </Box>
  );
};

export default ReviewTourBooking;
