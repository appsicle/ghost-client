import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const signinModal = createSlice({
  name: 'signinModal',
  initialState,
  reducers: {
    toggleSigninModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSigninModal: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      }
    },
  },
});

export const { toggleSigninModal, closeSigninModal } = signinModal.actions;
export default signinModal.reducer;
