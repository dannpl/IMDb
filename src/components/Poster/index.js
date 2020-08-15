import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Poster({
  image,
  width,
  original_title,
  title,
  overview,
  selectMovie
}) {
  return (
    <Container onClick={selectMovie} width={width}>
      <div className="overlay" />
      <img src={image} alt="Poster" />
      <div className="information">
        <p className="title">{title || original_title}</p>
        <span className="description">{overview}</span>
      </div>
    </Container>
  );
}

Poster.propTypes = {
  image: PropTypes.string,
  width: PropTypes.any,
  original_title: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  selectMovie: PropTypes.func,
};
