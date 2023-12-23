'use client';

import Icons from '@/components/Atoms/Icons';
import NextImage from '@/components/Atoms/NextImage';
import SectionContainer from '@/components/Atoms/SectionContainer';
import { getSelectedRooms } from '@/redux/features/hotel/hotelSlice';
import { RootState } from '@/redux/store/store';
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  Snackbar,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const roomInfo = [
  {
    id: 'r1',
    facilities: '2 Adults, 1 Child',
    iconName: 'people',
  },
  {
    id: 'r2',
    facilities: 'King size Bed',
    iconName: 'hotel',
  },
  {
    id: 'r3',
    facilities: 'Breakfast Included',
    iconName: 'restaurant',
  },

  {
    id: 'r5',
    facilities: 'Air Conditioning',
    iconName: 'acIcon',
  },
];

const RoomDetails = () => {
  const [isMaxRoom, setIsMaxRoom] = useState<boolean>(false);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState<boolean>(false);
  const { selectedRooms } = useSelector((state: RootState) => state.hotelSlice);

  const dispatch = useDispatch();
  // handle selected Room
  const handleSelectedRoom = (): void => {
    if (selectedRooms.length >= 3) {
      setIsMaxRoom(true);
      setIsSnackBarOpen(true);
      return;
    }
    dispatch(
      getSelectedRooms({
        id: uuidv4(),
        title: 'Delux Double With Balcony',
        price: '4000',
        quantity: 1,
      }),
    );
  };
  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSnackBarOpen(false);
  };
  return (
    <SectionContainer>
      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackBar}
        message="No More Room Available!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackBar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Box width="100%" height="220px">
            <NextImage
              imgUrl="/assets/campaign_DFLY2023_hotdeal.jpg"
              alt="room"
              width={220}
              height={220}
              styles={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Stack
            sx={{
              flexDirection: 'column',
              gap: 3,
              '@media screen and (min-width: 498px)': {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            }}
          >
            <Box>
              <Typography variant="h3">Delux Double With Balcony</Typography>
              <Typography
                variant="h3"
                mt={1}
                sx={(theme) => ({
                  color: theme.palette.success.light,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                })}
              >
                Refundable <Icons name="info" size="1.2rem" />
              </Typography>
              <Stack gap={2} mt={2}>
                {roomInfo.map((info) => (
                  <Typography
                    key={info?.id}
                    variant="body2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Icons name={info?.iconName} size="1.3rem" />
                    {info?.facilities}
                  </Typography>
                ))}
              </Stack>
            </Box>
            <Stack
              gap={1}
              sx={{
                alignItems: 'flex-start',
                '@media screen and (min-width: 498px)': {
                  alignItems: 'flex-end',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={(theme) => ({
                  background: theme.palette.secondary.light,
                  width: '5.5rem',
                  textAlign: 'center',
                  padding: '5px 1rem',
                  color: theme.palette.info.light,
                  fontWeight: 600,
                  borderRadius: '6.25rem',
                })}
              >
                47% off
              </Typography>
              <Typography variant="body1">starts from</Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.error.light,
                  textDecoration: 'line-through',
                })}
              >
                BDT 9,499
              </Typography>
              <Typography variant="h3">DBT 4,900</Typography>
              <Typography variant="body2">
                + BDT 1300 Taxes & fees for 1 Night
              </Typography>
              {/* Add room button */}
              <Stack mt={2}>
                <Button
                  disabled={isMaxRoom}
                  variant="secondary"
                  onClick={handleSelectedRoom}
                >
                  Add Room 1
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default RoomDetails;
