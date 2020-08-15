export function setMovies(movies) {
  return {
    type: 'SET_MOVIES',
    movies,
  };
}

export function setSearchMovies(movies) {
  return {
    type: 'SET_SEARCH_MOVIES',
    movies,
  };
}

export function resetMovies() {
  return {
    type: 'RESET_MOVIES',
  };
}
