import Condition from '@/components/Atoms/Condition';
import {
  OptionsList,
  SelectButton,
} from '@/components/Molicules/SelectOptions';
import { OptionType } from '@/components/Molicules/SelectOptions/types';
import {
  setCloseLocationOptions,
  setLocation,
  setOpenLocationOptions,
} from '@/redux/features/searchTour/searchTourSlice';
import { RootState } from '@/redux/store/store';
import { Box, Grid, ClickAwayListener, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const StyledOptionsWrapper = styled(Box)({
  position: 'absolute',
  top: '100%',
  zIndex: 20,
});

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
  };

  return (
    <ClickAwayListener onClickAway={() => dispatch(setCloseLocationOptions())}>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} onClick={() => dispatch(setOpenLocationOptions())}>
            <SelectButton
              selectedValue={selectedTour}
              label="LOCATION / TOUR"
            />
            <Condition condition={isLocationsOptionsOpen}>
              <StyledOptionsWrapper>
                <OptionsList
                  titleKey="location"
                  onOptionSelect={handleSelectedLocation}
                  placeholder="Search Location..."
                  options={locationOptions}
                  subtitleKey="location"
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default TourTab;
