const initialState = {
  movies: [],
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return [];

    default:
      return state;
  }
}
