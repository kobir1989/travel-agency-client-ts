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

export interface FlightsResponse {
  flight_list: Flights[] | [];
  success?: boolean;
  currentPage?: number;
  totalPages?: number;
  totalCount?: number;
}
