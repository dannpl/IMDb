import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

import Logo from '../../assets/imgs/logo.png';
import { Container } from './styles';
import Repository from '../../services/repository';
import * as MoviesActions from '../../store/modules/movies/actions';

export default function Header() {
  const user = useSelector((state) => state.user);
  const [search, setSearch] = useState('');
  const api = new Repository();
  const dispatch = useDispatch();

  const searchMovies = async (value) => {
    setSearch(value);

    try {
      const response = value.length
        ? await api.searchMovies(value)
        : await api.getPopular();

      dispatch(MoviesActions.setSearchMovies(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="header__left">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="header__center">
        <div className="wrapper__input">
          <Search
            className="search__icon"
            onClick={() => searchMovies(search)}
          />
          <input
            onChange={(e) => searchMovies(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="header__right">
        <div className="name">{user.user.name}</div>
        <img src={user.user.picture} alt="User" />
      </div>
    </Container>
  );
}

// Header.propTypes = {
//   history: PropTypes.any,
// };
