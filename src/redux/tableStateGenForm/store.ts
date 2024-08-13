import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import rootReducer from './rootReducers';

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production', // enables devTools only in non-production environments
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
