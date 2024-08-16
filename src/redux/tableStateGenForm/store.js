import { configureStore } from '@reduxjs/toolkit';
import masterReducer from './master/masterReducer';
import { useDispatch } from "react-redux";
const store = configureStore({
    reducer: { master: masterReducer }
});
export const useAppDispatch = () => useDispatch();
export default store;
