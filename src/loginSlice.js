import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const loginModal = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = loginModal.actions;
export default loginModal.reducer;
