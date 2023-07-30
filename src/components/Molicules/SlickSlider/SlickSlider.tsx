'use client';

import React from 'react';
import Slider from 'react-slick';
import { SlickSliderProps } from '@/components/Molicules/SlickSlider/types';
import {
  NextArrow,
  PrevArrow,
} from '@/components/Molicules/SlickSlider/SlickArrowButtons';

const SlickSlider = ({ children }: SlickSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickSlider;
