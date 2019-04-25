import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from '../pages/Home';
import ItemsContainer from '../pages/Items';
import ProfileContainer from '../pages/Profile';
import ShareContainer from '../pages/Share';
export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <Switch>
      <Route path="/items" component={ItemsContainer} />
      <Route path="/welcome" component={Home} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/profile/:userid" component={ProfileContainer} />
      <Route path="/share" component={ShareContainer} />
      <Redirect  to="/items" />
      
      {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
    </Switch>
  </Fragment>
);
