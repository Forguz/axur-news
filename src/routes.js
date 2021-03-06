import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Noticia from './pages/Notice';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/notice" component={Noticia} />
    </Switch>
  );
}
