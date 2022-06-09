import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  user: userReducer,
});

export const setupStore = (sagaMiddleware: any) => {
  return configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
