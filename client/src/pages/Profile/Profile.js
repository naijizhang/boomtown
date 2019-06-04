import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import ItemsGrid from '../../components/ItemsGrid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
const Profile = ({ classes, user }) => {
  return (
    <div className={classes.layout}>
      <div>
        <ProfileCard
          userInfo={{
            fullname: user.fullname,
            email: user.email,
            bio: user.bio,
            ownItemNumber: user.items.length,
            borrowItemNumber: user.borrowed.length
          }}
        />
      </div>
      <div className={classes.itemsContainer}>
        {user.items.length!==0 ?  <Typography variant="h4" className={classes.heading}>Shared Items</Typography> : null}
        <ItemsGrid items={user.items} />
      </div>
    </div>
  );
};
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
