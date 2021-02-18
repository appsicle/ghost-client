import { createSlice } from '@reduxjs/toolkit';

// psuedo enum
const TAB_STATE = Object.freeze({
  HOME: 1,
  NEW_REQUEST: 2,
  PAST_SUBMISSIONS: 3,
});

const initialState = { tab: TAB_STATE.HOME };

const revieweeTabNavSlice = createSlice({
  name: 'revieweeTabNavSlice',
  initialState,
  reducers: {
    toHome: (state) => {
      state.tab = TAB_STATE.HOME;
    },
    toNewRequest: (state) => {
      state.tab = TAB_STATE.NEW_REQUEST;
    },
    toPastSubmissions: (state) => {
      state.tab = TAB_STATE.PAST_SUBMISSIONS;
    },
  },
});

export const {
  toHome,
  toNewRequest,
  toPastSubmissions,
} = revieweeTabNavSlice.actions;
export default revieweeTabNavSlice.reducer;
export { TAB_STATE };
