export interface HotDealsCardProps {
  image: string;
  descriptions: string;
  discount: string;
  title: string;
}

export interface PopularHotelCardProps {
  title: string;
  subTitle: string;
}

export interface FlightCardProps {
  isPrice?: boolean;
  onNavigate?(id: string): void;
}
