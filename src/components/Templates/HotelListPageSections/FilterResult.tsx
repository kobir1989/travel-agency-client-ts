'use client';

import { Stack, Typography, Box, FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const FilterResult = () => {
  const [filterResult, setFilterResult] = useState('price');

  const handleChange = (event: SelectChangeEvent) => {
    setFilterResult(event.target.value as string);
  };
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h3"> 46 Result found</Typography>
      <Box
        sx={{
          minWidth: '12rem',
          boxShadow: '5px 2px 10px rgba(28,60,107,.1)',
        }}
      >
        <FormControl
          fullWidth
          sx={(theme) => ({
            background: theme.palette.info.light,
            borderRadius: '4px',
          })}
        >
          <Select value={filterResult} onChange={handleChange}>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="spa">Spa</MenuItem>
            <MenuItem value="swiming-pool">Swiming Pool</MenuItem>
            <MenuItem value="5star">5 Start</MenuItem>
            <MenuItem value="4star">4 Start</MenuItem>
            <MenuItem value="3star">3 Start</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default FilterResult;
