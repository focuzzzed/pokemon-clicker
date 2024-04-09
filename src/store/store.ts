import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/user-service';
import { pokemonAPI } from '../services/pokemon-service';
import { Namespace } from '../const';
import { userProcess } from './user-process/user-process';
import { gameProcess } from './game-process/game-process';
import { checkPreloadedState } from '../utils/utils';

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
  [pokemonAPI.reducerPath]: pokemonAPI.reducer,
  [Namespace.User]: userProcess.reducer,
  [Namespace.Game]: gameProcess.reducer,
});

export const createStore = () => configureStore({
  reducer: rootReducer,
  preloadedState: checkPreloadedState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userAPI.middleware)
    .concat(pokemonAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
