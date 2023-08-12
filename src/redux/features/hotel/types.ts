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
}

export interface HotelsResponse {
  hotels: Hotels[] | [];
  success?: boolean;
  currentPage?: number;
  totalPages?: number;
  totalCount?: number;
}
