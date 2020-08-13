const initialState = {
  user: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return [];

    default:
      return state;
  }
}
