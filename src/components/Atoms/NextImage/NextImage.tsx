'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NextImageProps } from '@/components/Atoms/NextImage/types';

const NextImage = ({ imgUrl, alt, width, height, styles }: NextImageProps) => {
  const [imageSrc, setImageSrc] = useState(imgUrl);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      blurDataURL="/images/placeholder.jpg"
      onError={() => setImageSrc('/images/placeholder.jpg')}
      style={{ ...styles }}
    />
  );
};

export default NextImage;
