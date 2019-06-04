import React from 'react';
import Loader from 'react-loader-spinner';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
function FullScreenLoader({ classes }) {
  return (
    <div className={classes.container}>
      <Loader type="Triangle" color="#f9a825" height="200" width="200" />
    </div>
  );
}
FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FullScreenLoader);
