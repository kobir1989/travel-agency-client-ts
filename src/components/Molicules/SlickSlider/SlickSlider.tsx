'use client';

import React from 'react';
import Slider from 'react-slick';
import { SlickSliderProps } from '@/components/Molicules/SlickSlider/types';
import {
  NextArrow,
  PrevArrow,
} from '@/components/Molicules/SlickSlider/SlickArrowButtons';

const SlickSlider = ({
  children,
  desktopSlideToShow,
  tabSlideToShow = 2,
  mobileSlideToShow = 1,
  slidesToShow,
  slidesToScroll,
}: SlickSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    centerMood: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: desktopSlideToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 898,
        settings: {
          initialSlide: tabSlideToShow,
          slidesToShow: tabSlideToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 588,
        settings: {
          slidesToShow: mobileSlideToShow,
          slidesToScroll: mobileSlideToShow,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickSlider;
