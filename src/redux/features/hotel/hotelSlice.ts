import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SelectedHotel {
  id: string;
  title: string;
  price: string;
  quantity: number;
}

interface InitialState {
  selectedRooms: SelectedHotel[];
}

// Initials state
const initialState: InitialState = {
  selectedRooms: [],
};

const hotelSlice = createSlice({
  name: 'hotelSlice',
  initialState,
  reducers: {
    getSelectedRooms: (state, action: PayloadAction<SelectedHotel>): void => {
      state.selectedRooms.push(action.payload);
    },
    removeRoom: (state, action: PayloadAction<string>): void => {
      const updatedRooms = state.selectedRooms.filter(
        (room) => room.id !== action.payload,
      );
      state.selectedRooms = updatedRooms;
    },
  },
});

// actions
export const { getSelectedRooms, removeRoom } = hotelSlice.actions;

export default hotelSlice.reducer;
