import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false, isLogin: false };

const authModal = createSlice({
  name: 'AuthModal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLogin = true;
      state.isOpen = !state.isOpen;
    },
    openSignupModal: (state) => {
      state.isLogin = false;
      state.isOpen = true;
    },
    closeSigninModal: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      }
    },
    changeModalContent: (state) => {
      state.isLogin = !state.isLogin;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  openLoginModal, openSignupModal, closeSigninModal, changeModalContent, toggleModal,
} = authModal.actions;
export default authModal.reducer;
