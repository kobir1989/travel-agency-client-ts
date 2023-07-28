import { Stack, Typography } from '@mui/material';
import { SearchWidgetProps } from './types';

const SearchWidget = ({ title, subTitle, tags }: SearchWidgetProps) => {
  return (
    <Stack
      sx={{
        border: '1px solid #D1D1D1',
        borderRadius: '12px',
        padding: '0.4rem 1rem',
      }}
    >
      <Typography variant="body1" mb="0.2rem">
        {tags}
      </Typography>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">{subTitle}</Typography>
    </Stack>
  );
};

export default SearchWidget;
