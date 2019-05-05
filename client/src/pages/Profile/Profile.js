import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import ItemsGrid from '../../components/ItemsGrid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
const Profile = ({ classes, user }) => {
  console.log(user);
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
        {user.items.length!==0 ?  <Typography variant="display1" className={classes.heading}>Shared Items</Typography> : null}
        <ItemsGrid items={user.items} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
