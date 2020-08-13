import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Movies from './../pages/Movies';
import Movie from './../pages/Movie';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact to="/movies" from="/" />

      <Route path="/movies" exact component={Movies} />
      <Route path="/movie:id" exact component={Movie} />
    </Switch>
  );
}
