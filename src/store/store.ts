import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/user-service';

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
});

export const createStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
