import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/authApi';
import { sliderApi } from '../features/services/sliderApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      sliderApi.middleware,
    ]),
});
