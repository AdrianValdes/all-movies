import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

export const signInUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredentials = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const { user } = userCredentials;
      return user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signupUser',
  async ({ email, password, displayName }, thunkAPI) => {
    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const { user } = userCredentials;
      await user.updateProfile({ displayName });
      return user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
