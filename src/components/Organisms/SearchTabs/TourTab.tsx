import React from 'react';
import {
  Box,
  MenuItem,
  FormControl,
  Typography,
  Select,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { setSelectedLocation } from '@/redux/features/search/tourSearchSlice';
import Icons from '@/components/Atoms/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { selectStyles } from './styles';

// will be removed
const tours = [
  { id: 't1', country: 'France' },
  { id: 't2', country: 'Denmark' },
  { id: 't3', country: 'Finland' },
  { id: 't4', country: 'Swidden' },
  { id: 't5', country: 'USA' },
  { id: 't6', country: 'Canada' },
];

const TourTab = () => {
  const dispatch = useDispatch();
  const { tourLocation } = useSelector((state: RootState) => state.searchTour);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelectedLocation(event.target.value));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <InputLabel sx={{ fontSize: '0.87rem', color: 'primary' }}>
        CHOOSE COUNTRY
      </InputLabel>
      <FormControl sx={{ width: '100%' }}>
        <Select value={tourLocation} onChange={handleChange} sx={selectStyles}>
          {tours.map((tour) => (
            <MenuItem key={tour?.id} value={tour.country}>
              <Typography
                variant="h4"
                color="primary"
                fontWeight={500}
                display="flex"
                alignItems="center"
                gap="0.2rem"
              >
                <Icons name="location" />
                {tour?.country}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TourTab;
