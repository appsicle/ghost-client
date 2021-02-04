import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loginModalReducer from '../navbar/loginSlice';
import userRolesReducer from '../user/userSlice';

const store = configureStore({
  reducer: combineReducers({
    loginModalReducer,
    userRolesReducer,
    /* favoriteCards: favoriteCardsSlice */
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true, // this is redundant and for demonstration only
  // preloadedState: {your state object for initialization or rehydration}
});

export default store;
