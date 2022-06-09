import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUsers';

export interface UserState {
  users: IUser[];
  user: {};
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  user: {},
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsersFeatch: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, actions) => {
      state.users = actions.payload;
      state.isLoading = false;
    },
    getUsersFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    setUserPostFeatch: (state, actions) => {},
    removeUserFeatch: (state, actions) => {},
    editUserFeatch: (state, actions) => {},
    getUserFeatch: (state, actions) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, actions) => {
      state.user = actions.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getUsersFeatch,
  getUsersSuccess,
  getUsersFailure,
  setUserPostFeatch,
  removeUserFeatch,
  editUserFeatch,
  getUserFeatch,
  getUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
