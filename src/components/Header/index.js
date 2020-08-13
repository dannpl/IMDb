import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Image } from 'react-bootstrap';
import { Container } from './styles';
import * as UserActions from './../../store/modules/user/actions';

export default function Header() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const getUser = async () => {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) {
      return dispatch(UserActions.setUser(JSON.parse(userStorage)));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <div className="user-menu">
        {user.picture ? (
          <Image src={user.picture} roundedCircle />
        ) : (
          <p className="no-data img" />
        )}
        <div variant="success" className="name" to="/profile">
          {user.name ? user.name : <p className="no-data" />}
        </div>
      </div>
    </Container>
  );
}
