const initialState = { favorites: [], error: null };

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'FETCH_FAVORITES_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
