import { configureStore } from '@reduxjs/toolkit';
import masterReducer from './master/masterReducer';
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: { master: masterReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;
