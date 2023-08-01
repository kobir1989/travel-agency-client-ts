import Condition from '@/components/Atoms/Condition';
import MuiDatePicker from '@/components/Molicules/MuiDatePicker';
import { OptionsList } from '@/components/Molicules/SelectOptions';
import RadioButtonGroup from '@/components/Atoms/RadioButtons';
import { Box, ClickAwayListener, Grid } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import {
  setArrivalDate,
  setDepartDate,
  setFlightType,
  setOpenOptionsBox,
  setSelectedArrivalValue,
  setSelectedDepartValue,
} from '@/redux/features/searchFlight/searhFlightSlice';
import { OptionType } from '@/components/Molicules/SelectOptions/types/types';
import GridItem from '@/components/Templates/HomeSearchSection/SearchTabs/GridItem';

const departOptions = [
  {
    location: 'Dhaka, Bangladesh',
    airport: 'Shazalal int Airport',
    code: 'DAC',
    id: 'op1',
  },
  {
    location: 'Delhi, India',
    airport: 'Delhi Airport',
    code: 'DEL',
    id: 'op3',
  },
];

const arrivalOptions = [
  {
    location: 'Kopenhagen, Denmark',
    airport: 'Copenhagen Airport, Kastrup',
    code: 'CPH',
    id: 'op2',
  },
];

const FlightTab = () => {
  const {
    arrivalDate,
    flightType,
    departDate,
    selectedArrival,
    selectedDepartValue,
    openOptionsPopup,
  } = useSelector((state: RootState) => state.searchFlight);
  const dispatch = useDispatch();

  // flight type radio button onChange handler
  const handleFlightType = (event: React.SyntheticEvent<Element, Event>) => {
    dispatch(setFlightType((event.target as HTMLInputElement).value));
  };

  // close option on outside click
  const handleCloseSelect = () => {
    dispatch(
      setOpenOptionsBox({
        isDepartOptionsOpen: false,
        isArrivalOptionsOpen: false,
        isArrivalDateOpen: false,
        isDepartDateOpen: false,
      }),
    );
  };

  // handle select departure option
  const handleSelectDepartOption = (option: OptionType) => {
    dispatch(setSelectedDepartValue(option));
    // close options after select
    handleCloseSelect();
  };

  // handle select arrival options
  const handleSelectArrivalOption = (option: OptionType) => {
    dispatch(setSelectedArrivalValue(option));
    // close options after select
    handleCloseSelect();
  };

  // handle select departure date value
  const handleDepartDate = (newValue: Dayjs) => {
    dispatch(setDepartDate(newValue));
    dispatch(
      setArrivalDate(
        newValue && newValue > arrivalDate ? newValue : arrivalDate,
      ),
    );
    // close options after select
    handleCloseSelect();
  };

  // handle selected arrival date value
  const handleSelectedArrivalDate = (newValue: Dayjs) => {
    dispatch(setArrivalDate(newValue));
    // close options after select
    handleCloseSelect();
  };

  // swap the value "ARRIVAL will be DEPART"
  const swapSelectedValue = () => {
    dispatch(setSelectedArrivalValue(selectedDepartValue));
    dispatch(setSelectedDepartValue(selectedArrival));
  };

  return (
    <ClickAwayListener onClickAway={handleCloseSelect}>
      <Box>
        <RadioButtonGroup
          value={flightType}
          onChangeHandler={handleFlightType}
        />
        <Grid container spacing={1}>
          {/* depart from  */}
          <GridItem
            column={4}
            isPopupOpen={openOptionsPopup.isDepartOptionsOpen}
            label="FROM"
            onSwapValue={swapSelectedValue}
            onHandleClick={() =>
              dispatch(
                setOpenOptionsBox({
                  isDepartOptionsOpen: true,
                  isArrivalOptionsOpen: false,
                  isArrivalDateOpen: false,
                  isDepartDateOpen: false,
                }),
              )
            }
            selectedValue={selectedDepartValue}
          >
            <OptionsList
              options={departOptions}
              onOptionSelect={handleSelectDepartOption}
              subtitleKey="location"
              titleKey="airport"
              placeholder="Search Flight..."
            />
          </GridItem>
          {/* arrival to */}
          <GridItem
            column={4}
            isPopupOpen={openOptionsPopup.isArrivalOptionsOpen}
            label="TO"
            onHandleClick={() =>
              dispatch(
                setOpenOptionsBox({
                  isDepartOptionsOpen: false,
                  isArrivalOptionsOpen: true,
                  isArrivalDateOpen: false,
                  isDepartDateOpen: false,
                }),
              )
            }
            selectedValue={selectedArrival}
          >
            <OptionsList
              options={arrivalOptions}
              onOptionSelect={handleSelectArrivalOption}
              subtitleKey="location"
              titleKey="airport"
              placeholder="Search Flight..."
            />
          </GridItem>
          {/* depart date */}
          <GridItem
            column={flightType === 'roundWay' ? 2 : 4}
            isPopupOpen={openOptionsPopup.isDepartDateOpen}
            label="DEPARTURE DATE"
            onHandleClick={() =>
              dispatch(
                setOpenOptionsBox({
                  isDepartOptionsOpen: false,
                  isArrivalOptionsOpen: false,
                  isArrivalDateOpen: false,
                  isDepartDateOpen: true,
                }),
              )
            }
            selectedValue={{
              title: dayjs(departDate).format('DD MMM YYYY'),
              subtitle: dayjs(departDate).format('dddd'),
            }}
          >
            <MuiDatePicker
              lable="Select Departure date"
              onDateValue={handleDepartDate}
              value={departDate}
              minDate={dayjs(new Date())}
            />
          </GridItem>
          {/* arrival date show when round way selectd */}
          <Condition condition={flightType === 'roundWay'}>
            <GridItem
              column={2}
              isPopupOpen={openOptionsPopup.isArrivalDateOpen}
              label="RETURN DATE"
              positionRight="0"
              onHandleClick={() =>
                dispatch(
                  setOpenOptionsBox({
                    isDepartOptionsOpen: false,
                    isArrivalOptionsOpen: false,
                    isArrivalDateOpen: true,
                    isDepartDateOpen: false,
                  }),
                )
              }
              selectedValue={{
                title: dayjs(arrivalDate).format('DD MMM YYYY'),
                subtitle: dayjs(arrivalDate).format('dddd'),
              }}
            >
              <MuiDatePicker
                lable="Select Return date"
                onDateValue={handleSelectedArrivalDate}
                value={arrivalDate}
                minDate={departDate}
              />
            </GridItem>
          </Condition>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default FlightTab;
