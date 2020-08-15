export const initialState = {
  user: {
    id: 1,
    picture: 'http://placehold.it/45x45',
    name: 'Henry Miguel',
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
