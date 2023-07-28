import { Rating } from '@mui/material';
import { RatingsProps } from './types';

const Ratings = ({ value, size = 'small' }: RatingsProps) => {
  return <Rating name="read-only" size={size} value={value} readOnly />;
};

export default Ratings;
