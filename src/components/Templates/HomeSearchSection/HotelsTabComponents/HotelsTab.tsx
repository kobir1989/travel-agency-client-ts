import Condition from '@/components/Atoms/Condition';
import MuiDatePicker from '@/components/Molicules/MuiDatePicker';
import {
  OptionsList,
  SelectButton,
} from '@/components/Molicules/SelectOptions';
import AddRooms from '@/components/Molicules/SelectOptions/AddRooms';
import { OptionType } from '@/components/Molicules/SelectOptions/types';
import {
  closeOptionPopups,
  setCheckIn,
  setCheckOut,
  setOpenOptionsPopup,
  setSelectedlocation,
} from '@/redux/features/searchHotel/searchHotelSlice';
import { RootState } from '@/redux/store/store';
import { Box, Grid, styled, ClickAwayListener } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';

const StyledOptionsWrapper = styled(Box)({
  position: 'absolute',
  top: '100%',
  zIndex: 20,
});

const HotelOptions = [
  {
    location: 'Meery Iceland',
    country: 'Maldivs',
    id: 'op1',
  },
  {
    location: 'Phuket',
    country: 'Thailand',
    id: 'op2',
  },
];

const HotelsTab = () => {
  const {
    checkIn,
    checkOut,
    guests,
    openOptionsPopup,
    roomCount,
    selectedlocation,
  } = useSelector((state: RootState) => state.searchHotel);
  const dispatch = useDispatch();

  const handleOpenLocationOptions = () => {
    dispatch(
      setOpenOptionsPopup({
        isCheckInCalanderOpen: false,
        isCheckOutCalanderOpen: false,
        isRoomOptionsOpen: false,
        isLocationOptionsOpen: true,
      }),
    );
  };

  const handleSelectLocation = (option: OptionType) => {
    dispatch(setSelectedlocation(option));
    dispatch(closeOptionPopups());
  };

  const handleOpenCheckInCalander = () => {
    dispatch(
      setOpenOptionsPopup({
        isLocationOptionsOpen: false,
        isCheckOutCalanderOpen: false,
        isRoomOptionsOpen: false,
        isCheckInCalanderOpen: true,
      }),
    );
  };

  const handleCheckinValue = (newValue: Dayjs) => {
    dispatch(setCheckIn(newValue));
    dispatch(
      setCheckOut(newValue && newValue > checkOut ? newValue : checkOut),
    );
    dispatch(closeOptionPopups());
  };

  const handleOpenCheckOutCalander = () => {
    dispatch(
      setOpenOptionsPopup({
        isLocationOptionsOpen: false,
        isCheckInCalanderOpen: false,
        isRoomOptionsOpen: false,
        isCheckOutCalanderOpen: true,
      }),
    );
  };
  const handleCheckOutValue = (newValue: Dayjs) => {
    dispatch(setCheckOut(newValue));
    dispatch(setCheckIn(newValue && newValue < checkOut ? newValue : checkOut));
    dispatch(closeOptionPopups());
  };

  const handleOpenRoomsPopup = () => {
    dispatch(
      setOpenOptionsPopup({
        isLocationOptionsOpen: false,
        isCheckInCalanderOpen: false,
        isCheckOutCalanderOpen: false,
        isRoomOptionsOpen: true,
      }),
    );
  };

  return (
    <ClickAwayListener onClickAway={() => dispatch(closeOptionPopups())}>
      <Box>
        <Grid container spacing={1}>
          <Grid
            item
            lg={6}
            position="relative"
            onClick={handleOpenLocationOptions}
          >
            <SelectButton
              label="CITY / HOTEL / RESORT / AREA"
              selectedValue={selectedlocation}
            />
            <Condition condition={openOptionsPopup.isLocationOptionsOpen}>
              <StyledOptionsWrapper>
                <OptionsList
                  options={HotelOptions}
                  subtitleKey="country"
                  titleKey="location"
                  placeholder="Search Destination..."
                  onOptionSelect={handleSelectLocation}
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
          <Grid item lg={2} onClick={handleOpenCheckInCalander}>
            <SelectButton
              label="CHECK IN"
              selectedValue={{
                title: dayjs(checkIn).format('DD MMM YYYY'),
                subtitle: dayjs(checkIn).format('dddd'),
              }}
            />
            <Condition condition={openOptionsPopup.isCheckInCalanderOpen}>
              <StyledOptionsWrapper>
                <MuiDatePicker
                  lable="Select check in Date"
                  value={checkIn}
                  onDateValue={handleCheckinValue}
                  minDate={dayjs(new Date())}
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
          <Grid item lg={2} onClick={handleOpenCheckOutCalander}>
            <SelectButton
              label="CHECK OUT"
              selectedValue={{
                title: dayjs(checkOut).format('DD MMM YYYY'),
                subtitle: dayjs(checkOut).format('dddd'),
              }}
            />
            <Condition condition={openOptionsPopup.isCheckOutCalanderOpen}>
              <StyledOptionsWrapper>
                <MuiDatePicker
                  lable="Select check out Date"
                  value={checkOut}
                  onDateValue={handleCheckOutValue}
                  minDate={dayjs(new Date()).add(1, 'day')}
                />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
          <Grid item lg={2} onClick={handleOpenRoomsPopup} position="relative">
            <SelectButton
              label="ROOMS & GUESTS"
              selectedValue={{
                title: `${roomCount} Room`,
                subtitle: `${guests} Guests`,
              }}
            />
            <Condition condition={openOptionsPopup.isRoomOptionsOpen}>
              <StyledOptionsWrapper right={0}>
                <AddRooms />
              </StyledOptionsWrapper>
            </Condition>
          </Grid>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default HotelsTab;
