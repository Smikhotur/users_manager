import { createSlice } from '@reduxjs/toolkit';
import { IUsers } from '../../interface';
export interface UserState {
  users: IUsers[];
  user: {};
  isLoading: boolean;
  error: string;
  message: string;
}

const initialState: UserState = {
  users: [],
  user: {},
  isLoading: false,
  error: '',
  message: '',
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
    setUserPostFeatch: (state, actions) => {
      state.users.push(actions.payload);
    },
    removeUser: (state, actions) => {
      state.users = state.users.filter(
        (user) => user.user_id !== actions.payload
      );
    },
    editUserFeatch: (state, actions) => {
      state.user = Object.assign(state.user, actions.payload);
    },
    getUserSuccess: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const {
  getUsersFeatch,
  getUsersSuccess,
  getUsersFailure,
  setUserPostFeatch,
  removeUser,
  editUserFeatch,
  getUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
