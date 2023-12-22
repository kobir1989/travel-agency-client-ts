import {
  Box,
  Grid,
  Typography,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  ClickAwayListener,
  Grow,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import {
  setCheckIn,
  setCheckOut,
  setOpenCheckInCalander,
  setOpenCheckOutCalander,
  setSelectedlocation,
} from '@/redux/features/hotel/hotelSlice';
import { format } from 'date-fns';
import { Calendar } from 'react-date-range';
import Icons from '@/components/Atoms/Icons';
import {
  StyledH3,
  StyledH4,
  calanderWrapperStyles,
  calanderWrapperStylesRight,
  gridItemWrapperStyles,
  selectStyles,
} from './styles';

// Dummy Data will be replace with real data.
const hotels = [
  { id: 't1', country: 'France' },
  { id: 't2', country: 'Denmark' },
  { id: 't3', country: 'Finland' },
  { id: 't4', country: 'Sweden' },
  {
    id: 't5',
    country: 'USA',
    airport: 'John F. Kennedy International Airport',
  },
  {
    id: 't6',
    country: 'Canada',
    airport: 'Toronto Pearson International Airport',
  },
  { id: 't7', country: 'Bangladesh', airport: 'Dhaka Airport' },
];

const HotelsTab = () => {
  const dispatch = useDispatch();
  const {
    checkInDate,
    checkOutDate,
    isCheckInCalanderOpen,
    isCheckOutCalanderOpen,
    selectedlocation,
  } = useSelector((state: RootState) => state.searchHotel);

  // handle selected location value
  const handleSelectedLocation = (event: SelectChangeEvent) => {
    dispatch(setSelectedlocation(event.target.value));
  };

  // handle selected checkin Date
  const handleCheckIn = (date: number | Date) => {
    dispatch(setCheckIn(format(date, 'iiii MMM dd yyyy')));
  };

  // handle selected checkout Date
  const handleCheckOutDate = (date: number | Date) => {
    dispatch(setCheckOut(format(date, 'iiii MMM dd yyyy')));
  };

  // toggle Checkin calander
  const toggleCheckInCalander = () => {
    dispatch(setOpenCheckInCalander(!isCheckInCalanderOpen));
    dispatch(setOpenCheckOutCalander(false));
  };

  // toggle checkOut Calander
  const toggleCheckOutCalander = () => {
    dispatch(setOpenCheckOutCalander(!isCheckOutCalanderOpen));
    dispatch(setOpenCheckInCalander(false));
  };

  const closeCalanders = () => {
    dispatch(setOpenCheckInCalander(false));
    dispatch(setOpenCheckOutCalander(false));
  };

  return (
    <ClickAwayListener onClickAway={closeCalanders}>
      <Box mt="3rem">
        <Grid container spacing={2}>
          {/* column 1 choose location  */}
          <Grid item lg={4} xs={12} md={6}>
            <InputLabel
              sx={{ fontSize: '0.87rem', color: 'primary', mb: '0.47rem' }}
            >
              CHOOSE LOCATION
            </InputLabel>
            <FormControl sx={{ width: '100%', position: 'relative' }}>
              <Select
                value={selectedlocation}
                onChange={handleSelectedLocation}
                sx={selectStyles}
              >
                {hotels.map((hotel) => (
                  <MenuItem
                    key={hotel?.id}
                    value={hotel?.country}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      variant="h3"
                      color="primary"
                      fontWeight={600}
                      fontSize="0.9rem"
                      display="flex"
                      alignItems="center"
                      gap="0.3rem"
                    >
                      <Icons name="location" size="1rem" />
                      {hotel?.country}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* column 2 Check in Calander  */}
          <Grid item lg={4} xs={12} sm={6} md={3} position="relative">
            <Typography mb="0.3rem">CHECK IN</Typography>
            <Box sx={gridItemWrapperStyles} onClick={toggleCheckInCalander}>
              <StyledH3 variant="h3">
                {format(new Date(checkInDate), 'dd MMM  yyyy')}
              </StyledH3>
              <StyledH4 variant="h4">
                {format(new Date(checkInDate), 'iiii')}
              </StyledH4>
            </Box>
            <Grow
              in={isCheckInCalanderOpen}
              unmountOnExit
              style={{
                transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <Box sx={calanderWrapperStyles}>
                <Calendar
                  date={new Date(checkInDate)}
                  onChange={handleCheckIn}
                  minDate={new Date()}
                  // maxDate={getMaxDate()}
                />
              </Box>
            </Grow>
          </Grid>
          {/* column 3 Check Out Calander  */}
          <Grid item lg={4} xs={12} sm={6} md={3} position="relative">
            <Typography mb="0.3rem">CHECK OUT</Typography>
            <Box sx={gridItemWrapperStyles} onClick={toggleCheckOutCalander}>
              <StyledH3 variant="h3">
                {format(new Date(checkOutDate), 'dd MMM  yyyy')}
              </StyledH3>
              <StyledH4 variant="h4">
                {format(new Date(checkOutDate), 'iiii')}
              </StyledH4>
            </Box>
            <Grow
              in={isCheckOutCalanderOpen}
              unmountOnExit
              style={{
                transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <Box sx={calanderWrapperStylesRight}>
                <Calendar
                  date={new Date(checkOutDate)}
                  onChange={handleCheckOutDate}
                  minDate={new Date(checkInDate)}
                  // maxDate={getMaxDate()}
                />
              </Box>
            </Grow>
          </Grid>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default HotelsTab;
