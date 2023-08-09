import NextImage from '@/components/Atoms/NextImage';
import { Box, Stack } from '@mui/material';

const previewImg = [
  {
    id: 'pv1',
    url: '/assets/hotel.jpg',
  },
  {
    id: 'pv2',
    url: '/assets/hotel.jpg',
  },
  {
    id: 'pv3',
    url: '/assets/hotel.jpg',
  },
  {
    id: 'pv',
    url: '/assets/hotel.jpg',
  },
];

const HotelPreview = () => {
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
          imgUrl="/assets/hotel.jpg"
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
          <Box sx={{ width: '100px', height: '95px' }} key={img.id}>
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
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default HotelPreview;
