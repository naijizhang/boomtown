import React, { Component } from 'react';
import Items from './Items';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';
function ItemsContainer({ classes }) {
  return (
    <ViewerContext.Consumer>
      {({ loading, viewer }) => {
        return (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader inverted />;
              if (error) return <p>{`Error! ${error.message}`}</p>;
              return <Items classes={classes} items={data.items} />;
            }}
          </Query>
        );
      }}
    </ViewerContext.Consumer>
  );
}

export default withStyles(styles)(ItemsContainer);
