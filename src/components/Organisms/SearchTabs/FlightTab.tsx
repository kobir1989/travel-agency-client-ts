import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import RadioButtonGroup from '@/components/Atoms/RadioButtons';
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
import {
  setFlightType,
  setOpenArrivalDate,
  setOpenDepartDate,
  setSelectedArrivalValue,
  setSelectedDepartValue,
  setArrivalDate,
  setDepartDate,
} from '@/redux/features/flight/flightSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import format from 'date-fns/format';
import {
  StyledH3,
  StyledH4,
  StyledIconButton,
  selectStyles,
  gridItemWrapperStyles,
  calanderWrapperStyles,
} from './styles';
// will be removed
const flights = [
  { id: 't1', country: 'France', airport: 'Charles de Gaulle Airport' },
  { id: 't2', country: 'Denmark', airport: 'Copenhagen Airport' },
  { id: 't3', country: 'Finland', airport: 'Helsinki Airport' },
  { id: 't4', country: 'Sweden', airport: 'Stockholm Arlanda Airport' },
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

const FlightTab = () => {
  const dispatch = useDispatch();
  const {
    flightType,
    isArrivalDateOpen,
    isDepartDateOpen,
    selectedArrival,
    selectedDepartValue,
    departDate,
    arrivalDate,
  } = useSelector((state: RootState) => state.searchFlight);
  // flight type radio button onChange handler
  const handleFlightType = (event: React.SyntheticEvent<Element, Event>) => {
    dispatch(setFlightType((event.target as HTMLInputElement).value));
  };
  // get The Depart FROM value
  const handleDepartValue = (event: SelectChangeEvent) => {
    dispatch(setSelectedDepartValue(event.target.value));
  };
  // get The Arrival TO value
  const handleArrivalValue = (event: SelectChangeEvent) => {
    dispatch(setSelectedArrivalValue(event.target.value));
  };

  // Handle Open Journey from date.
  const toggleDepartDate = () => {
    if (isArrivalDateOpen) dispatch(setOpenArrivalDate(false));
    dispatch(setOpenDepartDate(!isDepartDateOpen));
  };

  // Handle Open Journey To date.
  const toggleArrivalDate = () => {
    if (isDepartDateOpen) dispatch(setOpenDepartDate(false));
    dispatch(setOpenArrivalDate(!isArrivalDateOpen));
  };
  // Close Calander if Open
  const closeCalander = () => {
    dispatch(setOpenArrivalDate(false));
    dispatch(setOpenDepartDate(false));
  };
  // Journey date handler
  const getJourneyDate = (date: number | Date) => {
    dispatch(setDepartDate(format(date, 'iiii MMM dd yyyy')));
    dispatch(setOpenDepartDate(false));
  };
  // Return date handler
  const getReturnDate = (date: number | Date) => {
    dispatch(setArrivalDate(format(date, 'iiii MMM dd yyyy')));
    dispatch(setOpenArrivalDate(false));
  };
  // Calculate 1-2 months from the current date
  const getMaxDate = () => {
    const currentDate = new Date();
    const maxDate = new Date(currentDate);
    maxDate.setDate(currentDate.getDate() + 180);
    return maxDate;
  };
  return (
    <ClickAwayListener onClickAway={closeCalander}>
      <Box>
        <RadioButtonGroup
          value={flightType}
          onChangeHandler={handleFlightType}
        />
        <Grid container spacing={2}>
          {/* flight from  column 1 */}
          <Grid
            item
            lg={4}
            md={flightType === 'roundWay' ? 3.5 : 4}
            sm={6}
            xs={12}
          >
            <InputLabel
              sx={{ fontSize: '0.87rem', color: 'primary', mb: '0.3rem' }}
            >
              FROM
            </InputLabel>
            <FormControl sx={{ width: '100%', position: 'relative' }}>
              <Select
                value={selectedDepartValue}
                onChange={handleDepartValue}
                sx={selectStyles}
              >
                {flights.map((flightFrom) => (
                  <MenuItem
                    key={flightFrom?.id}
                    value={flightFrom.airport}
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
                    >
                      {flightFrom?.airport} - {flightFrom?.country}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
              {/* Swap Destination (From - To) */}
              <StyledIconButton>
                <Icons name="swap" />
              </StyledIconButton>
            </FormControl>
          </Grid>

          {/* flight To column 2 */}
          <Grid
            item
            lg={4}
            md={flightType === 'roundWay' ? 3.5 : 4}
            sm={6}
            xs={12}
          >
            <InputLabel
              sx={{ fontSize: '0.87rem', color: 'primary', mb: '0.3rem' }}
            >
              TO
            </InputLabel>
            <FormControl sx={{ width: '100%' }}>
              <Select
                value={selectedArrival}
                onChange={handleArrivalValue}
                sx={selectStyles}
              >
                {flights.map((flightTo) => (
                  <MenuItem key={flightTo?.id} value={flightTo.airport}>
                    <Typography
                      variant="h3"
                      color="primary"
                      fontWeight={600}
                      fontSize="0.9rem"
                    >
                      {flightTo?.airport} - {flightTo?.country}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* Journey Date column 3 */}
          <Grid
            position="relative"
            item
            lg={flightType === 'roundWay' ? 2 : 4}
            md={flightType === 'roundWay' ? 2.5 : 4}
            sm={flightType === 'roundWay' ? 6 : 12}
            xs={flightType === 'roundWay' ? 6 : 12}
          >
            <Typography mb="0.2rem">JOURNEY DATE</Typography>
            <Box sx={gridItemWrapperStyles} onClick={toggleDepartDate}>
              <StyledH3 variant="h3">
                {format(new Date(departDate), 'dd MMM  yyyy')}
              </StyledH3>
              <StyledH4 variant="h4">
                {format(new Date(departDate), 'iiii')}
              </StyledH4>
            </Box>
            {/* Journey Date Picker  */}

            <Grow
              in={isDepartDateOpen}
              unmountOnExit
              style={{
                transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <Box sx={calanderWrapperStyles}>
                <Calendar
                  date={new Date(departDate)}
                  onChange={getJourneyDate}
                  minDate={new Date()}
                  maxDate={getMaxDate()}
                />
              </Box>
            </Grow>
          </Grid>
          {/* Return date show when round way selectd - column 4 */}
          <Condition condition={flightType === 'roundWay'}>
            <Grid item lg={2} md={2.5} sm={6} xs={6} position="relative">
              <Typography mb="0.2rem">RETURN DATE</Typography>
              <Box sx={gridItemWrapperStyles} onClick={toggleArrivalDate}>
                <StyledH3 variant="h3">
                  {format(new Date(arrivalDate), 'dd MMM  yyyy')}
                </StyledH3>
                <StyledH4 variant="h4">
                  {format(new Date(arrivalDate), 'iiii')}
                </StyledH4>
              </Box>
              {/* Return Date Picker  */}

              <Grow
                in={isArrivalDateOpen}
                unmountOnExit
                style={{
                  transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box sx={calanderWrapperStyles}>
                  <Calendar
                    date={new Date(arrivalDate)}
                    onChange={getReturnDate}
                    minDate={new Date(departDate)}
                  />
                </Box>
              </Grow>
            </Grid>
          </Condition>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default FlightTab;
