import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';
function ProfileContainer({classes,match }) {
  const userIdFromUrl = match.params.userId;
  return (
    <ViewerContext.Consumer>
      {({ loading, viewer }) => {
        return (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{ id: userIdFromUrl ? userIdFromUrl : viewer.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader />;
              if (error) return <p>{`Error! ${error.message}`}</p>;
              return <Profile classes={classes} user={data.user} />;
            }}
          </Query>
        );
      }}
    </ViewerContext.Consumer>
  );
}
ProfileContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileContainer);
