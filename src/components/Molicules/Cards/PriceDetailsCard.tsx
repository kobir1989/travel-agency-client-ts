'use client';

import Icons from '@/components/Atoms/Icons';
import NextImage from '@/components/Atoms/NextImage';
import SectionContainer from '@/components/Atoms/SectionContainer';
import {
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from '@mui/material';

const StyledListItem = styled(ListItem)({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
});

const StyledSpan = styled('span')({
  fontSize: '0.95rem',
  fontWeight: 600,
});

const PriceDetailsCard = () => {
  return (
    <SectionContainer>
      {/* header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={4}
        mb={3}
        pt={3}
      >
        <NextImage
          imgUrl="/assets/emitates.png"
          alt="airlince"
          width={160}
          height={60}
          styles={{
            objectFit: 'cover',
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
          }}
        />
        <Box sx={{ '& svg': { rotate: '60deg' } }}>
          <Stack direction="row" alignItems="center" gap={0.5}>
            <Icons name="airline" color="#1c3c6b" />
            <Typography variant="body1">Fligth</Typography>
          </Stack>
          <Typography variant="h4" fontWeight={600}>
            DAC-CXB
          </Typography>
          <Typography variant="body1">one way</Typography>
        </Box>
      </Stack>
      <Divider />
      {/* summary */}
      <Box mt={3} p="0 1rem 1rem 1rem">
        <Typography variant="body1" fontWeight={600} color="primary">
          Summary
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <StyledListItem>Adult (1 traveler)</StyledListItem>
          <StyledListItem>
            Base Fare <StyledSpan>BDT 3,777</StyledSpan>
          </StyledListItem>
          <StyledListItem>
            Tax <StyledSpan>BDT 925</StyledSpan>
          </StyledListItem>
          <Divider />
          <StyledListItem>
            Sub-Total <StyledSpan>BDT 4,600</StyledSpan>
          </StyledListItem>
          <StyledListItem>
            Other chargs <StyledSpan>BDT 89</StyledSpan>
          </StyledListItem>
        </List>
      </Box>
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.light,
          padding: '1rem',
        })}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" fontWeight={600}>
            You Pay{' '}
            <span style={{ fontSize: '0.81rem', fontWeight: 300 }}>
              (for 1 Traveler)
            </span>
          </Typography>
          <Typography variant="h4" fontWeight={600}>
            BDT 42500
          </Typography>
        </Stack>
      </Box>
    </SectionContainer>
  );
};

export default PriceDetailsCard;
