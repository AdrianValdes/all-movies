import { auth } from '../../../firebase';

export const signUpUser = ({ email, password, displayName }) => async (
  dispatch
) => {
  try {
    const userCredentials = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = userCredentials;
    await user.updateProfile({ displayName });
    dispatch({ type: 'SIGNUP_USER', payload: user });
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR', payload: error });
  }
};

export const logout = () => async (dispatch) => {
  try {
    auth.signOut();
    dispatch({ type: 'LOGOUT_USER', payload: null });
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR', payload: error });
  }
};
