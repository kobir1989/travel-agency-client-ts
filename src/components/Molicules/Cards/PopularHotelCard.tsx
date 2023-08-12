'use client';

import { Box, Stack, Typography } from '@mui/material';
import { PopularHotelCardProps } from './types';

const PopularHotelCard = ({ title, subTitle }: PopularHotelCardProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '15rem',
        position: 'relative',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          transition: 'all 0.3s ease-in-out',
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url('/assets/hotel.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          borderRadius: '8px',
          transition: 'all 0.5s ease-in-out',
          '&::before': {
            content: `''`,
            width: '100%',
            height: '5rem',
            position: 'absolute',
            left: '0',
            bottom: '0',
            background:
              'linear-gradient(180deg, rgba(10, 0, 45, 0) 3.59%, #030b20c3 86.15%)',
            borderRadius: '8px',
          },
          '&:hover': {
            transform: 'scale(1.2)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: 'brightness(0.6);',
          },
        }}
      />
      <Stack
        gap={1}
        sx={{
          position: 'absolute',
          bottom: '0.5rem',
          width: '100%',
          padding: '0 0.5rem',
        }}
      >
        <Typography
          variant="h3"
          lineHeight="1rem"
          sx={(theme) => ({
            color: theme.palette.info.light,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '1rem',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
          })}
        >
          {title}
        </Typography>
        <Typography
          lineHeight="0.9rem"
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.info.light,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '1rem',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
          })}
        >
          {subTitle}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PopularHotelCard;
