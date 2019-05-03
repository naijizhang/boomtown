import React from 'react';
import Loader from 'react-loader-spinner';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function FullScreenLoader({ classes }) {
    return (
      <div className={classes.container}>
        <Loader type="Triangle" color="#f9a825" height="200" width="200" />
      </div>
    );
  }
  export default withStyles(styles)(FullScreenLoader);
  