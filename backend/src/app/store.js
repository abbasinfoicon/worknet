import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/authApi';
import { sliderApi } from '../features/services/sliderApi';
import { jobApi } from '../features/services/jobApi';
import { serviceApi } from '../features/services/serviceApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      sliderApi.middleware,
      jobApi.middleware,
      serviceApi.middleware,
    ]),
});
