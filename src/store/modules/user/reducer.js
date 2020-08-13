const initialState = {
  user: {},
};

export default function phones(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return [];

    default:
      return state;
  }
}
