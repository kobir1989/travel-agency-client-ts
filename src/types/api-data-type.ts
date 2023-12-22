// response Body Common Type
interface ResponseBody {
  success?: boolean;
  currentPage?: number;
  totalPages?: number;
  totalCount?: number;
}

// Tours API response Type
interface Tour {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  startDate: string;
  endDate: string;
  newPrice: number;
  oldPrice: number;
  groupSize: string;
  isKidsFriendly: boolean;
  discount: number;
}
export interface TourResponse extends ResponseBody {
  tours: Tour[] | [];
}
// Flight API Response Type
export interface Flights {
  _id: string;
  airlinesName: string;
  arrivalAirportName: string;
  departureAirportName: string;
  flightNumber: string;
  departureCountry: string;
  departureCity: string;
  arrivalCountry: string;
  arrivalCity: string;
  departureDate: string;
  arrivalDate: string;
  duration: string;
  baggage: string;
  seatAvailability: string[];
  flightClass: string;
  arrivalAirportCode: string;
  departureAirportCode: string;
  price: string;
  airlinesLogo: string;
}

export interface FlightsResponse extends ResponseBody {
  flight_list: Flights[] | [];
}

// Hotels API Response Type
export interface Hotels {
  _id: string;
  name: string;
  country: string;
  city: string;
  ratings: number;
  nearby: string;
  facilities: string;
  images: string[];
  description: string;
  discount: number;
  price: number;
}

export interface HotelsResponse extends ResponseBody {
  hotels: Hotels[] | [];
}
