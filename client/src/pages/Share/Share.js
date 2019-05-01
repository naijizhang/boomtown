import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Share = ({ classes,tags }) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.eachColumn}>
        <ShareItemPreview />
      </div>
      <div className={classes.eachColumn}>
        <ShareItemForm tags={tags? tags :[]}/>
      </div>
    </div>
  );
};
export default withStyles(styles)(Share);