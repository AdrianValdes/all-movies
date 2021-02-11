const initialState = { comedies: [], animation: [], popular: [] };

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMEDIES':
      return { ...state, comedies: [...action.payload] };
    case 'FETCH_ANIMATION':
      return { ...state, animation: [...action.payload] };
    case 'FETCH_POPULAR':
      return { ...state, popular: [...action.payload] };
    default:
      return state;
  }
};
