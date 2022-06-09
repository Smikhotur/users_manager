import { UserState } from '../store/reducers/UserSlice';
import { RootState } from '../store/store';

export const selectorIsLouder = (state: RootState) => {
  return state.user.isLoading;
};

export const selectorUsers = (state: RootState) => {
  return state.user.users;
};

export const selectorError = (state: RootState) => {
  return state.user.error;
};

export const selectorUser = (state: RootState) => {
  return state.user.user;
};
