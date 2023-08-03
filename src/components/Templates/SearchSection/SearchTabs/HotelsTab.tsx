import MuiDatePicker from '@/components/Molicules/MuiDatePicker';
import { OptionsList } from '@/components/Molicules/SelectOptions';
import AddRooms from '@/components/Molicules/SelectOptions/AddRooms';
import { OptionType } from '@/components/Molicules/SelectOptions/types/types';
import {
  closeOptionPopups,
  setCheckIn,
  setCheckOut,
  setOpenOptionsPopup,
  setSelectedlocation,
} from '@/redux/features/searchHotel/searchHotelSlice';
import { RootState } from '@/redux/store/store';
import { Box, Grid, ClickAwayListener } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import GridItem from './GridItem';

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
          {/* location */}
          <GridItem
            label="CITY / HOTEL / RESORT / AREA"
            lg={6}
            md={6}
            sm={6}
            xs={12}
            isPopupOpen={openOptionsPopup.isLocationOptionsOpen}
            onHandleClick={handleOpenLocationOptions}
            selectedValue={selectedlocation}
          >
            <OptionsList
              onClose={() => dispatch(closeOptionPopups())}
              options={HotelOptions}
              subtitleKey="country"
              titleKey="location"
              placeholder="Search Destination..."
              onOptionSelect={handleSelectLocation}
            />
          </GridItem>
          {/* check in calander */}
          <GridItem
            lg={2}
            md={6}
            sm={6}
            xs={6}
            isPopupOpen={openOptionsPopup.isCheckInCalanderOpen}
            label="CHECK IN"
            onHandleClick={handleOpenCheckInCalander}
            selectedValue={{
              title: dayjs(checkIn).format('DD MMM YYYY'),
              subtitle: dayjs(checkIn).format('dddd'),
            }}
          >
            <MuiDatePicker
              onClose={() => dispatch(closeOptionPopups())}
              lable="Select check in Date"
              value={checkIn}
              onDateValue={handleCheckinValue}
              minDate={dayjs(new Date())}
            />
          </GridItem>
          {/* check out calander */}
          <GridItem
            lg={2}
            md={6}
            sm={6}
            xs={6}
            isPopupOpen={openOptionsPopup.isCheckOutCalanderOpen}
            label="CHECK OUT"
            selectedValue={{
              title: dayjs(checkOut).format('DD MMM YYYY'),
              subtitle: dayjs(checkOut).format('dddd'),
            }}
            onHandleClick={handleOpenCheckOutCalander}
          >
            <MuiDatePicker
              onClose={() => dispatch(closeOptionPopups())}
              lable="Select check out Date"
              value={checkOut}
              onDateValue={handleCheckOutValue}
              minDate={dayjs(new Date()).add(1, 'day')}
            />
          </GridItem>
          {/* rooms and guests */}
          <GridItem
            label="ROOMS & GUESTS"
            lg={2}
            md={6}
            sm={6}
            xs={12}
            positionRight="0"
            isPopupOpen={openOptionsPopup.isRoomOptionsOpen}
            onHandleClick={handleOpenRoomsPopup}
            selectedValue={{
              title: `${roomCount} Room`,
              subtitle: `${guests} Guests`,
            }}
          >
            <AddRooms onClose={() => dispatch(closeOptionPopups())} />
          </GridItem>
        </Grid>
      </Box>
    </ClickAwayListener>
  );
};

export default HotelsTab;
