import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StarFill, CameraVideo, PersonCheck } from 'react-bootstrap-icons';

import { Container } from './styles';
import Repository from '../../services/repository';

export default function Movie(props) {
  const api = new Repository();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { id } = props.match.params;

    if (!id) return props.history.push('/movies');

    try {
      const response = await api.getMovieById(id);

      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (!movie.id) return null;

  return (
    <Container
      background={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    >
      <div className="background" />
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="post"
        />
      </div>

      <div className="iformations">
        <p className="title">{movie.title}</p>
        <span className="release">{movie.release_date}</span>
        <span className="description">{movie.overview}</span>

        <div className="more__infos">
          <div className="count">
            <PersonCheck className="icon" />
            {movie.vote_count} Votes
          </div>
          <div className="average">
            <StarFill className="icon" />
            {movie.vote_average}
          </div>
          <a href={movie.homepage} target="_blanck">
            <CameraVideo className="icon" />
            See movie
          </a>
        </div>
      </div>
    </Container>
  );
}

Movie.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any,
};
