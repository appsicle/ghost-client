import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false, isSignIn: true };

const authModalSlice = createSlice({
  name: 'AuthModal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    switchToSignin: (state) => {
      state.isSignIn = true;
    },
    switchToSignup: (state) => {
      state.isSignIn = false;
    },
  },
});

export const {
  openModal, closeModal, switchToSignin, switchToSignup,
} = authModalSlice.actions;
export default authModalSlice.reducer;
