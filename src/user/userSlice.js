import { createSlice } from '@reduxjs/toolkit';
import userRoles from '../constants';

const initialState = { userRole: userRoles.VISITOR };

const roles = createSlice({
  name: 'userRoles',
  initialState,
  reducers: {
    setUserRole: (state, payload) => {
      if (payload === userRoles.BUYER || payload === userRoles.SELLER) {
        state.userRole = payload;
      }
    },
  },
});

export const { setUserRole } = roles.actions;
export default roles.reducer;
