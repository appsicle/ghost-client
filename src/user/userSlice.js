import { createSlice } from '@reduxjs/toolkit';
import constants from '../constants';

const initialState = { userRole: constants.VISITOR };

const roles = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const { setUserRole } = roles.actions;
export default roles.reducer;
