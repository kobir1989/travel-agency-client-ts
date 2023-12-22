import { Box, Pagination } from '@mui/material';

interface PaginationButtonProps {
  count: number;
}

const PaginationButtons = ({ count = 10 }: PaginationButtonProps) => {
  return (
    <Box width="100%" display="flex" justifyContent="flex-end" mt={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        color="primary"
        sx={(theme) => ({
          '& li': {
            '& button': {
              background: '#FFF',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            },
          },
          '& .Mui-selected': {
            color: '#FFF',
            backgroundColor: theme.palette.primary.main,
          },
        })}
      />
    </Box>
  );
};

export default PaginationButtons;
