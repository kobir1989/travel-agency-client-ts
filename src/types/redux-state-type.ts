export type OpenArrival = boolean;
export type OpenDepart = boolean;
// Flight Initial State Type
export interface InitialStateType {
  selectedDepartValue: string;
  selectedArrival: string;
  departDate: string;
  arrivalDate: string;
  flightType: string;
  isArrivalDateOpen: OpenArrival;
  isDepartDateOpen: OpenArrival;
  flightCategory: string;
  stops: number;
}

// Hotel Search Initial state Type
export interface HotelSearch {
  selectedlocation: string;
  checkInDate: string;
  checkOutDate: string;
  isCheckInCalanderOpen: boolean;
  isCheckOutCalanderOpen: boolean;
}
