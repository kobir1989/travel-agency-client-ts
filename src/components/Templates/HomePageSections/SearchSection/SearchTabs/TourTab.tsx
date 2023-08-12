import { OptionsList } from '@/components/Molicules/SearchSelectOptions';
import { OptionType } from '@/components/Molicules/SearchSelectOptions/types';
import {
  setCloseLocationOptions,
  setLocation,
  setOpenLocationOptions,
} from '@/redux/features/searchTour/searchTourSlice';
import { RootState } from '@/redux/store/store';
import { Box, Grid, ClickAwayListener } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import GridItem from './GridItem';

const locationOptions = [
  {
    id: 'L1',
    location: 'Kashmir',
  },
];

const TourTab = () => {
  const { isLocationsOptionsOpen, selectedTour } = useSelector(
    (state: RootState) => state.searchTour,
  );
  const dispatch = useDispatch();

  const handleSelectedLocation = (option: OptionType) => {
    dispatch(setLocation(option));
    dispatch(setCloseLocationOptions());
  };

  return (
    <ClickAwayListener onClickAway={() => dispatch(setCloseLocationOptions())}>
      <Box>
        <Grid container spacing={1}>
          <GridItem
            lg={12}
            sm={12}
            md={12}
            xs={12}
            label="LOCATION / TOUR"
            isPopupOpen={isLocationsOptionsOpen}
            onHandleClick={() => dispatch(setOpenLocationOptions())}
            selectedValue={selectedTour}
          >
            <OptionsList
              onClose={() => dispatch(setCloseLocationOptions())}
              titleKey="location"
              onOptionSelect={handleSelectedLocation}
              placeholder="Search Location..."
              options={locationOptions}
              subtitleKey="location"
            />
          </GridItem>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default TourTab;
