export interface SlickSliderProps {
  children: React.ReactNode[];
  desktopSlideToShow: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export interface SlickSliderArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
