const initialState = { people: [], error: null };

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return { ...state, people: [...state.people, ...action.payload] };
    case 'CLEAR_PEOPLE':
      return initialState;
    case 'FETCH_ERROR_MOVIES':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
