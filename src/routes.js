import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import OtherPage from './pages/OtherPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/other" component={OtherPage} />
    </Switch>
  );
}
