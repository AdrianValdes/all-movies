/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from './thunk';

const initialState = { user: null, error: null };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (state, action) => {
      const { uid, displayName, email } = action.payload;
      login({ uid, displayName, email });
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      const { uid, displayName, email } = action.payload;
      login({ uid, displayName, email });
    });
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
