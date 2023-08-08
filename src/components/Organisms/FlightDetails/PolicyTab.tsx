import { Box, Typography, Divider, Stack } from '@mui/material';

const PolicyTab = () => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.light,
          borderRadius: '4px',
          width: '80%',
          margin: 'auto',
          padding: '8px',
          textAlign: 'center',
        })}
      >
        <Typography variant="body1" fontWeight={600}>
          DAC-CXB
        </Typography>
      </Box>
      <Stack p={2} gap={1}>
        <Typography variant="body1" color="primary">
          Cancellation
        </Typography>
        <Divider />
        <Typography variant="body2">
          Refund Amount = Paid Amount - Airlines Cancellation Fee Re-issue Fee =
        </Typography>
        <Typography variant="body1" color="primary">
          Re-issue
        </Typography>
        <Divider />
        <Typography variant="body2"> Airlines Fee + Fare Difference</Typography>
      </Stack>
    </Box>
  );
};

export default PolicyTab;
