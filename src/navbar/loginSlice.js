import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const loginModal = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      }
    },
  },
});

export const { toggleModal, closeModal } = loginModal.actions;
export default loginModal.reducer;
