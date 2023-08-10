'use client';

import { Typography, Box, Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Icons from '@/components/Atoms/Icons';

const accordionList = [
  {
    id: 'acr1',
    title: 'Location',
    description: 'Pick-up: Himchori Parasailing Point',
    iconName: 'location',
  },
  {
    id: 'acr1',
    title: 'Timing',
    description: 'Everyday From 10.00 AM to 5.00 PM Duration : 7 minutes',
    iconName: 'time',
  },
  {
    id: 'acr1',
    title: 'Group Details',
    description:
      'From 1 to 50 people Any healthy person aged between 5 to 60 years are eligible for this activity.',
    iconName: 'people',
  },
  {
    id: 'acr1',
    title: 'Travel Tips',
    description:
      'We advise that the travelers carry drinking water. Stay hydrated, travel healthy.',
    iconName: 'info',
  },
];

const TourDetails = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        borderRadius: '8px',
        boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        padding: '1rem',
      })}
    >
      {accordionList.map((list) => (
        <Accordion sx={{ boxShadow: 'none' }} key={list?.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: 0 }}
          >
            <Typography variant="h3" fontSize="1rem" display="flex" gap="5px">
              <Icons name={list?.iconName} />
              {list?.title}
            </Typography>
          </AccordionSummary>
          <Typography variant="body1">{list?.description}</Typography>
        </Accordion>
      ))}
    </Box>
  );
};

export default TourDetails;
