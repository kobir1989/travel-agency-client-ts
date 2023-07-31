import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import MuiDatePicker from '@/components/Molicules/MuiDatePicker';
import {
  OptionsList,
  SelectButton,
} from '@/components/Molicules/SelectOptions';
import RadioButtonGroup from '@/components/Atoms/RadioButtons';
import {
  Box,
  ClickAwayListener,
  Grid,
  styled,
  IconButton,
} from '@mui/material';
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
import { OptionType } from '@/components/Molicules/SelectOptions/types';

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

const StyledOptionsWrapper = styled(Box)({
  position: 'absolute',
  top: '100%',
  zIndex: 20,
});

const SwapButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '-1.3rem',
  transform: 'translate(0,-50%)',
  boxShadow:
    'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
  borderRadius: '50%',
  background: theme.palette.info.light,
  zIndex: 50,
}));

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
          <Grid
            position="relative"
            item
            lg={4}
            onClick={() =>
              dispatch(
                setOpenOptionsBox({
                  isDepartOptionsOpen: true,
                  isArrivalOptionsOpen: false,
                  isArrivalDateOpen: false,
                  isDepartDateOpen: false,
                }),
              )
            }
          >
            <SelectButton selectedValue={selectedDepartValue} label="FROM" />
            <Condition condition={openOptionsPopup.isDepartOptionsOpen}>
              <StyledOptionsWrapper>
                <OptionsList
                  options={departOptions}
                  onOptionSelect={handleSelectDepartOption}
                  subtitleKey="location"
                  titleKey="airport"
                  placeholder="Search Flight..."
                />
              </StyledOptionsWrapper>
            </Condition>
            {/* swap selected value */}
            <SwapButtonWrapper onClick={(e) => e.stopPropagation()}>
              <IconButton onClick={swapSelectedValue}>
                <Icons name="swap" size="1.2rem" />
              </IconButton>
            </SwapButtonWrapper>
          </Grid>

          {/* arrival to */}
          <Grid
            item
            lg={4}
            onClick={() =>
              dispatch(
                setOpenOptionsBox({
                  isDepartOptionsOpen: false,
                  isArrivalOptionsOpen: true,
                  isArrivalDateOpen: false,
                  isDepartDateOpen: false,
                }),
              )
            }
          >
            <SelectButton selectedValue={selectedArrival} label="TO" />
            <Condition condition={openOptionsPopup.isArrivalOptionsOpen}>
              <StyledOptionsWrapper>
                <OptionsList
                  options={arrivalOptions}
                  onOptionSelect={handleSelectArrivalOption}
                  subtitleKey="location"
                  titleKey="airport"
                  placeholder="Search Flight..."
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
          {/* depart date */}
          <Grid
            item
            lg={flightType === 'roundWay' ? 2 : 4}
            position="relative"
            onClick={() =>
              dispatch(
                setOpenOptionsBox({
                  isDepartOptionsOpen: false,
                  isArrivalOptionsOpen: false,
                  isArrivalDateOpen: false,
                  isDepartDateOpen: true,
                }),
              )
            }
          >
            <SelectButton
              selectedValue={{
                title: dayjs(departDate).format('DD MMM YYYY'),
                subtitle: dayjs(departDate).format('dddd'),
              }}
              label="DIPARTURE DATE"
            />
            <Condition condition={openOptionsPopup.isDepartDateOpen}>
              <StyledOptionsWrapper>
                <MuiDatePicker
                  isReturn={false}
                  onDateValue={handleDepartDate}
                  value={departDate}
                  minDate={dayjs(new Date())}
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>

          {/* arrival date show when round way selectd */}
          <Condition condition={flightType === 'roundWay'}>
            <Grid
              position="relative"
              item
              lg={2}
              onClick={() =>
                dispatch(
                  setOpenOptionsBox({
                    isDepartOptionsOpen: false,
                    isArrivalOptionsOpen: false,
                    isArrivalDateOpen: true,
                    isDepartDateOpen: false,
                  }),
                )
              }
            >
              <SelectButton
                selectedValue={{
                  title: dayjs(arrivalDate).format('DD MMM YYYY'),
                  subtitle: dayjs(arrivalDate).format('dddd'),
                }}
                label="RETURN DATE"
              />
              <Condition condition={openOptionsPopup.isArrivalDateOpen}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    zIndex: 20,
                  }}
                >
                  <MuiDatePicker
                    isReturn
                    onDateValue={handleSelectedArrivalDate}
                    value={arrivalDate}
                    minDate={departDate}
                  />
                </Box>
              </Condition>
            </Grid>
          </Condition>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default FlightTab;