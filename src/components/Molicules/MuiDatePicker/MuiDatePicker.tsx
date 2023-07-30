'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Typography } from '@mui/material';
import { MuiDatePickerProps } from '@/components/Molicules/MuiDatePicker/types';
import dayjs from 'dayjs';

const MuiDatePicker = ({
  isReturn,
  onGetDateValue,
  value,
}: MuiDatePickerProps) => {
  const today = dayjs().format('YYYY/MM/DD');
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.info.light,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        borderRadius: '6px',
        width: '20rem',
      })}
    >
      <Typography
        variant="h5"
        fontSize="1rem"
        textAlign="center"
        pt={2}
        fontWeight={500}
      >
        Select {isReturn ? 'Arrival' : 'Departure'} date
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => onGetDateValue(newValue)}
          disablePast
          maxDate={dayjs('2023/10/30')}
          minDate={dayjs(today)}
          views={['day']}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default MuiDatePicker;
