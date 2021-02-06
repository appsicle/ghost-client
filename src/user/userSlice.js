import { createSlice } from '@reduxjs/toolkit';
import userRoles from '../constants';

const initialState = { userRole: undefined };

const roles = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      if (
        !state.userRole
        && (action.payload === userRoles.BUYER
          || action.payload === userRoles.SELLER)
      ) {
        state.userRole = action.payload;
      }
    },
  },
});

export const { setUserRole } = roles.actions;
export default roles.reducer;
