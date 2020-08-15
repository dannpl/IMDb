import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

import Logo from '../../assets/imgs/logo.png';
import { Container } from './styles';

export default function Header() {
  const user = useSelector((state) => state.user.user);

  return (
    <Container>
      <div className="header__left">
        <NavLink to="/movies">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="header__center">
        <div className="wrapper__input">
          <Search className="search__icon" />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <div className="name">{user.name}</div>
        <img src={user.picture} alt="User" />
      </div>
    </Container>
  );
}
