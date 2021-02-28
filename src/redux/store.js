import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authModalSlice from '../authModal/AuthModalSlice';
import revieweeTabNavSlice from '../reviewee/revieweeTabNavSlice';
import reviewerTabNavSlice from '../reviewer/reviewerTabNavSlice';

const store = configureStore({
  reducer: combineReducers({
    authModalSlice,
    revieweeTabNavSlice,
    reviewerTabNavSlice,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true, // this is redundant and for demonstration only
  // preloadedState: {your state object for initialization or rehydration}
});

export default store;
