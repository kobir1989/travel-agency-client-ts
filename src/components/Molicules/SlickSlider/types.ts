export interface SlickSliderProps {
  children: React.ReactNode[];
  desktopSlideToShow: number;
  slidesToShow: number;
  slidesToScroll: number;
  tabSlideToShow?: number;
  mobileSlideToShow?: number;
}

export interface SlickSliderArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
