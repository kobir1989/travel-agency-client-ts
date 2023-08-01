import { OptionsList } from '@/components/Molicules/SelectOptions';
import { OptionType } from '@/components/Molicules/SelectOptions/types/types';
import GridItem from '@/components/Templates/HomeSearchSection/SearchTabs/GridItem';
import {
  setCloseLocationOptions,
  setLocation,
  setOpenLocationOptions,
} from '@/redux/features/searchTour/searchTourSlice';
import { RootState } from '@/redux/store/store';
import { Box, Grid, ClickAwayListener } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

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
            column={12}
            label="LOCATION / TOUR"
            isPopupOpen={isLocationsOptionsOpen}
            onHandleClick={() => dispatch(setOpenLocationOptions())}
            selectedValue={selectedTour}
          >
            <OptionsList
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