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

export interface TourResponse {
  tours: Tour[] | [];
  success?: boolean;
  currentPage?: number;
  totalPages?: number;
  totalCount?: number;
}
