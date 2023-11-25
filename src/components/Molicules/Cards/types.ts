interface CommonCardProps {
  id: string;
  image: string;
  title: string;
}

export interface HotDealsCardProps extends CommonCardProps {
  descriptions: string;
  discount: number;
}

export interface PopularHotelCardProps extends CommonCardProps {
  subTitle: string;
}

export interface FlightCardProps {
  airlinesName: string;
  flightNumber: string;
  arrivalDate: string;
  departureDate: string;
  duration: string;
  arrivalAirportCode: string;
  departureAirportCode: string;
  isPrice?: boolean;
  price: string;
  airlinesLogo: string;
  flightClass: string;
  id: string;
  onNavigate?(id: string): void;
}

export interface PopularDestinationCardProps extends CommonCardProps {}

export interface HotelsCardProps {
  image: string;
  name: string;
  country: string;
  city: string;
  ratings: number;
  id: string;
  facilities: string;
  discount: number;
  price: number;
}

export interface TourCardProps extends CommonCardProps {
  groupSize: string;
  location: string;
  startDate: string;
  newPrice?: number;
  oldPrice: number;
  discount: number;
}
