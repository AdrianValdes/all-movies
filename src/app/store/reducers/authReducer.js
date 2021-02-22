const initialState = { user: null, error: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT_USER':
      return { ...state, user: null };
    case 'AUTH_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
