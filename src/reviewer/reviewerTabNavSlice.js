import { createSlice } from '@reduxjs/toolkit';

// psuedo enum
const REVIEWER_NAV_OPTIONS = Object.freeze({
  HOME: 1,
  NEW_REQUEST: 2,
  PAST_SUBMISSIONS: 3,
});

// psuedo enum
const REVIEWER_NEW_REQUEST_NAV_OPTIONS = Object.freeze({
  SELECTION: 1,
  TEXT_MSG: 2,
  DATING_PROFILE: 3,
});

const initialState = {
  nav: REVIEWER_NAV_OPTIONS.HOME,
  newRequestNav: REVIEWER_NEW_REQUEST_NAV_OPTIONS.SELECTION,
};

const ReviewerNavSlice = createSlice({
  name: 'ReviewerNavSlice',
  initialState,
  reducers: {
    toHome: (state) => {
      state.nav = REVIEWER_NAV_OPTIONS.HOME;
    },
    toNewRequest: (state) => {
      state.nav = REVIEWER_NAV_OPTIONS.NEW_REQUEST;
      state.newRequestNav = REVIEWER_NEW_REQUEST_NAV_OPTIONS.SELECTION;
    },
    toPastSubmissions: (state) => {
      state.nav = REVIEWER_NAV_OPTIONS.PAST_SUBMISSIONS;
    },
    toNewRequestTextMsg: (state) => {
      state.nav = REVIEWER_NAV_OPTIONS.NEW_REQUEST;
      state.newRequestNav = REVIEWER_NEW_REQUEST_NAV_OPTIONS.TEXT_MSG;
    },
    toNewRequestDating: (state) => {
      state.nav = REVIEWER_NAV_OPTIONS.NEW_REQUEST;
      state.newRequestNav = REVIEWER_NEW_REQUEST_NAV_OPTIONS.DATING_PROFILE;
    },
  },
});

export const {
  toHome,
  toNewRequest,
  toPastSubmissions,
  toNewRequestTextMsg,
  toNewRequestDating,
} = ReviewerNavSlice.actions;
export default ReviewerNavSlice.reducer;
export { REVIEWER_NAV_OPTIONS, REVIEWER_NEW_REQUEST_NAV_OPTIONS };
