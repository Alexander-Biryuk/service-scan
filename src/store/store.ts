import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../components/auth_page/inputSlice';
import infoReducer from '../components/auth_page/infoSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer,
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
