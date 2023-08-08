import { DetailsTabProps } from '@/components/Organisms/FlightDetails/types';
import { Stack, Typography } from '@mui/material';

const DetailsTab = ({ columnTitle, columnValue }: DetailsTabProps) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        p={2}
        sx={{ background: '#F0F0F0' }}
      >
        <Typography variant="body1" width="6rem">
          {columnTitle.colOne}
        </Typography>
        <Typography variant="body1" width="6rem">
          {columnTitle.colTwo}
        </Typography>
        <Typography variant="body1" width="6rem">
          {columnTitle.colThree}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" p={2}>
        <Typography variant="body2" width="6rem">
          {columnValue.valueOne}
        </Typography>
        <Typography variant="body2" width="6rem">
          {columnValue.valueTwo}
        </Typography>
        <Typography variant="body2" width="6rem">
          {columnValue.valueThree}
        </Typography>
      </Stack>
    </>
  );
};

export default DetailsTab;
