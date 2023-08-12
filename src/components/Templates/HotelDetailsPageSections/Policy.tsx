'use client';

import Icons from '@/components/Atoms/Icons';
import SectionContainer from '@/components/Atoms/SectionContainer';
import { Box, Typography, Stack, styled, Divider } from '@mui/material';

const StyledValue = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.8rem',
  fontWeight: 600,
  textAlign: 'end',
  maxWidth: '70%',
}));

const TitleSpan = styled('span')({
  display: 'flex',
  alignItems: 'center',

  gap: '5px',
});

const policyList = [
  {
    id: 'p1',
    iconName: 'time',
    title: 'Check In',
    value: '14:00',
  },
  {
    id: 'p2',
    iconName: 'time',
    title: 'Check Out',
    value: '12:00',
  },
  {
    id: 'p3',
    iconName: 'child',
    title: 'Child Policy',
    value: 'Up to 2 Children below 5 years can stay in the same room',
  },
  {
    id: 'p4',
    iconName: 'pets',
    title: 'Pet Policy',
    value: 'Not Allowed',
  },
];

const Policy = () => {
  return (
    <SectionContainer>
      <Typography variant="h3" mb={3}>
        Policy
      </Typography>
      <Stack gap={3}>
        {policyList.map((policy, index) => (
          <Box key={policy?.id}>
            <Typography
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TitleSpan>
                <Icons name={policy?.iconName} size="1.3rem" /> {policy?.title}
              </TitleSpan>
              <StyledValue>{policy?.value}</StyledValue>
            </Typography>
            {index !== 3 && (
              <Box mt={3}>
                <Divider />
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </SectionContainer>
  );
};

export default Policy;
