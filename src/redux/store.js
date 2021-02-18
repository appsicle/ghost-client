import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import roleSelectionModalReducer from '../navbar/roleSelectionModalSlice';
import signinModalReducer from '../signinModal/signInModalSlice';
import revieweeTabNavSlice from '../reviewee/revieweeTabNavSlice';

const store = configureStore({
  reducer: combineReducers({
    roleSelectionModalReducer,
    signinModalReducer,
    revieweeTabNavSlice,
    /* favoriteCards: favoriteCardsSlice */
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true, // this is redundant and for demonstration only
  // preloadedState: {your state object for initialization or rehydration}
});

export default store;
