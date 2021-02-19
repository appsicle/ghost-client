import { createSlice } from '@reduxjs/toolkit';

// psuedo enum
const REVIEWEE_NAV_OPTIONS = Object.freeze({
  HOME: 1,
  NEW_REQUEST: 2,
  PAST_SUBMISSIONS: 3,
});

// psuedo enum
const REVIEWEE_NEW_REQUEST_NAV_OPTIONS = Object.freeze({
  SELECTION: 1,
  TEXT_MSG: 2,
  DATING_PROFILE: 3,
});

const initialState = {
  nav: REVIEWEE_NAV_OPTIONS.HOME,
  newRequestNav: REVIEWEE_NEW_REQUEST_NAV_OPTIONS.SELECTION,
};

const revieweeNavSlice = createSlice({
  name: 'revieweeNavSlice',
  initialState,
  reducers: {
    toHome: (state) => {
      state.nav = REVIEWEE_NAV_OPTIONS.HOME;
    },
    toNewRequest: (state) => {
      state.nav = REVIEWEE_NAV_OPTIONS.NEW_REQUEST;
      state.newRequestNav = REVIEWEE_NEW_REQUEST_NAV_OPTIONS.SELECTION;
    },
    toPastSubmissions: (state) => {
      state.nav = REVIEWEE_NAV_OPTIONS.PAST_SUBMISSIONS;
    },
    toNewRequestTextMsg: (state) => {
      state.nav = REVIEWEE_NAV_OPTIONS.NEW_REQUEST;
      state.newRequestNav = REVIEWEE_NEW_REQUEST_NAV_OPTIONS.TEXT_MSG;
    },
    toNewRequestDating: (state) => {
      state.nav = REVIEWEE_NAV_OPTIONS.NEW_REQUEST;
      state.newRequestNav = REVIEWEE_NEW_REQUEST_NAV_OPTIONS.DATING_PROFILE;
    },
  },
});

export const {
  toHome,
  toNewRequest,
  toPastSubmissions,
  toNewRequestTextMsg,
  toNewRequestDating,
} = revieweeNavSlice.actions;
export default revieweeNavSlice.reducer;
export { REVIEWEE_NAV_OPTIONS, REVIEWEE_NEW_REQUEST_NAV_OPTIONS };
