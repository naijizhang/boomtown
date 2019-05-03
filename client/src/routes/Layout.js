import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import { ViewerContext } from '../context/ViewerProvider';
import FullScreenLoader from '../components/FullScreenLoader';
import HeaderMenu from '../components/HeaderMenu';
import PRoute from '../components/PrivateRoute';

export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer }) => {
      if (loading) return <FullScreenLoader />;
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" name="home" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <React.Fragment>
          <HeaderMenu />
          <Switch>
            <PRoute exact path="/items" name="items" component={Items} />
            <PRoute exact path="/profile" name="profile" component={Profile} />
            <PRoute
              exact
              path="/profile/:userId"
              name="profile"
              component={Profile}
            />
            <PRoute exact path="/share" name="share" component={Share} />
            <Redirect from="*" to="/items" />
          </Switch>
        </React.Fragment>
      );
    }}
  </ViewerContext.Consumer>
);