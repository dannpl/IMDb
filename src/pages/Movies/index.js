import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Poster from '../../components/Poster';
import Repository from '../../services/repository';
import NoPoster from '../../assets/imgs/noImage.png';
import * as MoviesActions from '../../store/modules/movies/actions';

export default function Movies(props) {
  const movies = useSelector((state) => state.movies.data);
  let page = 0;
  const api = new Repository();
  const dispatch = useDispatch();

  const getPopular = async (more) => {
    page += more;
    try {
      const response = await api.getPopular(page);

      dispatch(MoviesActions.setMovies(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getScroll = () => {
    window.addEventListener('scroll', () => {
      const scrollMovies = document.getElementById('containerMovies');

      if (!scrollMovies) return null;

      if (window.pageYOffset + 901 >= scrollMovies.clientHeight) {
        getPopular(1);
      }
    });
  };

  useEffect(() => {
    dispatch(MoviesActions.resetMovies());
    getPopular(1);
    getScroll();
  }, []);

  const selectMovie = (id) => {
    props.history.push(`/movie/${id}`);
  };

  return (
    <Container id="containerMovies">
      {movies.map((movie) => (
        <Poster
          key={movie.id}
          {...movie}
          width="180px"
          selectMovie={() => selectMovie(movie.id)}
          image={`${
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
              : NoPoster
          }`}
        />
      ))}
    </Container>
  );
}

Movies.propTypes = {
  history: PropTypes.any,
};
