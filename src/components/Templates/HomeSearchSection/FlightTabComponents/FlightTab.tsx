import Condition from '@/components/Atoms/Condition';
import Icons from '@/components/Atoms/Icons';
import MuiDatePicker from '@/components/Molicules/MuiDatePicker';
import {
  SelectOptions,
  SelectButton,
} from '@/components/Molicules/SelectOptions';
import { SelectedValueType } from '@/components/Molicules/SelectOptions/types';
import RadioButtonGroup from '@/components/Atoms/RadioButtons';
import {
  Box,
  ClickAwayListener,
  Grid,
  styled,
  IconButton,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

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

// initial open option box state
const initialValue = {
  isDepartOptionsOpen: false,
  isArrivalOptionsOpen: false,
  isArrivalDateOpen: false,
  isDepartDateOpen: false,
};
const FlightTab = () => {
  const [openOptions, setOpenOptions] = useState(initialValue);
  // selected departure value
  const [selectedDepartValue, setSelectedDepartValue] =
    useState<SelectedValueType>({
      title: 'Dhaka, Bangladesh',
      subtitle: 'Shazalal int Airport',
    });
  // selected arrival value
  const [selectedArrival, setSelectedArrival] = useState<SelectedValueType>({
    title: 'Delhi, India',
    subtitle: 'Delhi Airport',
  });
  // selected departure date
  const [departDate, setDepartDate] = useState<Dayjs | null>(dayjs(new Date()));
  // selected arrival date
  const [arrivalDate, setArrivalDate] = useState<Dayjs | null>(
    departDate || dayjs(new Date()).add(1, 'week'),
  );

  // Flight type Radio button states
  const [flightType, setFlightType] = useState('oneWay');

  // close option on outside click
  const handleCloseSelect = () => {
    setOpenOptions(initialValue);
  };

  // handle select departure option
  const handleSelectDepartOption = (option: SelectedValueType) => {
    setSelectedDepartValue(option);
    // close options after select
    handleCloseSelect();
  };

  // handle select arrival options
  const handleSelectArrivalOption = (option: SelectedValueType) => {
    setSelectedArrival(option);
    // close options after select
    handleCloseSelect();
  };

  // handle select departure date value
  const handleDepartDate = (newValue: Dayjs) => {
    setDepartDate(newValue);
    // close options after select
    handleCloseSelect();
  };

  // swap the value "ARRIVAL will be DEPART"
  const swapSelectedValue = () => {
    setSelectedArrival(selectedDepartValue);
    setSelectedDepartValue(selectedArrival);
  };

  // handle selected arrival date value
  const handleSelectedArrivalDate = (newValue: Dayjs) => {
    setArrivalDate(newValue);
    // close options after select
    handleCloseSelect();
  };

  // flight type radio button onChange handler
  const handleFlightType = (event: React.SyntheticEvent<Element, Event>) => {
    setFlightType((event.target as HTMLInputElement).value);
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
              setOpenOptions({
                isDepartOptionsOpen: true,
                isArrivalOptionsOpen: false,
                isArrivalDateOpen: false,
                isDepartDateOpen: false,
              })
            }
          >
            <SelectButton selectedValue={selectedDepartValue} label="FROM" />
            <Condition condition={openOptions.isDepartOptionsOpen}>
              <StyledOptionsWrapper>
                <SelectOptions
                  options={departOptions}
                  onOptionSelect={handleSelectDepartOption}
                />
              </StyledOptionsWrapper>
            </Condition>
            {/* swap selected value */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: '-1.3rem',
                transform: 'translate(0,-50%)',
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                borderRadius: '50%',
                background: '#FFF',
                zIndex: 50,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton onClick={swapSelectedValue}>
                <Icons name="swap" size="1.2rem" />
              </IconButton>
            </Box>
          </Grid>

          {/* arrival to */}
          <Grid
            item
            lg={4}
            onClick={() =>
              setOpenOptions({
                isDepartOptionsOpen: false,
                isArrivalOptionsOpen: true,
                isArrivalDateOpen: false,
                isDepartDateOpen: false,
              })
            }
          >
            <SelectButton selectedValue={selectedArrival} label="TO" />
            <Condition condition={openOptions.isArrivalOptionsOpen}>
              <StyledOptionsWrapper>
                <SelectOptions
                  options={arrivalOptions}
                  onOptionSelect={handleSelectArrivalOption}
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
              setOpenOptions({
                isDepartOptionsOpen: false,
                isArrivalOptionsOpen: false,
                isArrivalDateOpen: false,
                isDepartDateOpen: true,
              })
            }
          >
            <SelectButton
              selectedValue={{
                title: dayjs(departDate).format('DD MMM YYYY'),
                subtitle: dayjs(departDate).format('dddd'),
              }}
              label="DIPARTURE DATE"
            />
            <Condition condition={openOptions.isDepartDateOpen}>
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
                setOpenOptions({
                  isDepartOptionsOpen: false,
                  isArrivalOptionsOpen: false,
                  isArrivalDateOpen: true,
                  isDepartDateOpen: false,
                })
              }
            >
              <SelectButton
                selectedValue={{
                  title: dayjs(arrivalDate).format('DD MMM YYYY'),
                  subtitle: dayjs(arrivalDate).format('dddd'),
                }}
                label="RETURN DATE"
              />
              <Condition condition={openOptions.isArrivalDateOpen}>
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
