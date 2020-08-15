import api from './api';

export default class Repository {
  originalApiKey = '635be4df222e0bca66dab7969f62f895';

  // constructor() {
  //   this.getConfiguration();
  // }

  getAccessToken() {
    return api.get(
      `/3/authentication/token/new?api_key=${this.originalApiKey}`
    );
  }

  getConfiguration() {
    return api.get(`/3/configuration?api_key=${this.originalApiKey}`);
  }

  checkAccessToken(requestToken) {
    return api.get(
      `/authenticate/${requestToken}?api_key=${this.originalApiKey}`
    );
  }

  creatNewSesion(requestToken) {
    return api.post(
      `/3/authentication/guest_session/new?api_key=${this.originalApiKey}`,
      { request_token: requestToken }
    );
  }

  searchMovies(search) {
    return api.get(
      `/3/search/movie?api_key=${this.originalApiKey}&query=${search}`
    );
  }

  getPopular(page) {
    return api.get(
      `/3/movie/popular?api_key=${this.originalApiKey}&page=${page}`
    );
  }

  getMovieById(id) {
    return api.get(`/3/movie/${id}?api_key=${this.originalApiKey}`);
  }
}
