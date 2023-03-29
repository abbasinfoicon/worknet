import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/authApi';
import { cmsPage } from '../features/services/pages/cmsPage';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [cmsPage.reducerPath]: cmsPage.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      cmsPage.middleware,
    ]),
});
