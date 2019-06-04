import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
const Share = ({ classes,tags }) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.leftColumn}>
        <ShareItemPreview />
      </div>
      <div className={classes.rightColumn}>
        <ShareItemForm tags={tags? tags :[]}/>
      </div>
    </div>
  );
};
Share.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
};
export default withStyles(styles)(Share);