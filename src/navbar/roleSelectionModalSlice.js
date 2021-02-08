import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const roleSelectionModal = createSlice({
  name: 'roleSelectionModal',
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

export const { toggleModal, closeModal } = roleSelectionModal.actions;
export default roleSelectionModal.reducer;
