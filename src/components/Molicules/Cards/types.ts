export interface HotDealsCardProps {
  image: string;
  descriptions: string;
  discount: number;
  title: string;
}

export interface PopularHotelCardProps {
  title: string;
  subTitle: string;
  image: string;
}

export interface FlightCardProps {
  isPrice?: boolean;
  onNavigate?(id: string): void;
}

export interface PopularDestinationCardProps {
  image: string;
  title: string;
}
