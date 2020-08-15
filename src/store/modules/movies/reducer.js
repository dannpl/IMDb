const initialState = {
  data: [],
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, data: [...state.data, ...action.movies] };
    case 'SET_SEARCH_MOVIES':
      return { ...state, data: action.movies };
    case 'RESET_MOVIES':
      return { ...state, data: [] };
    default:
      return state;
  }
}
