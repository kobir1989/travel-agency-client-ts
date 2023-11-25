'use client';

import NextImage from '@/components/Atoms/NextImage';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

// will be replace with real data
const previewImg = [
  {
    id: 'pv1',
    url: '/assets/hotel.jpg',
  },
  {
    id: 'pv2',
    url: '/assets/hotel2.webp',
  },
  {
    id: 'pv3',
    url: '/assets/hotel.jpg',
  },
  {
    id: 'pv4',
    url: '/assets/hotel.jpg',
  },
];

const PreviewImages = () => {
  const [currentImg, setCurrentImg] = useState<string>('/assets/hotel.jpg');

  const handleSelectedImage = (img: string) => {
    setCurrentImg(img);
  };
  return (
    <Stack
      gap="1rem"
      width="100%"
      height="100%"
      sx={(theme) => ({
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
        },
      })}
    >
      <Box sx={{ width: '100%', height: '100%' }}>
        <NextImage
          imgUrl={currentImg}
          alt="hotel"
          width={400}
          height={400}
          styles={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
      </Box>
      {/* preview images  */}
      <Stack
        gap="1rem"
        sx={(theme) => ({
          flexDirection: 'row',
          [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
          },
        })}
      >
        {previewImg.map((img) => (
          <div
            role="button"
            tabIndex={0}
            style={{ width: '100px', height: '95px', cursor: 'pointer' }}
            key={img.id}
            onClick={() => handleSelectedImage(img.url)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSelectedImage(img.id);
              }
            }}
          >
            <NextImage
              imgUrl={img.url}
              alt="hotel"
              width={150}
              height={100}
              styles={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default PreviewImages;
