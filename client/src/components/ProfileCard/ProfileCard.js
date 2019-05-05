import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

function ItemsGrid({ classes, userInfo }) {
  console.log('userInfo', userInfo);
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar round="true" className={classes.avatar}>
              <Gravatar email={userInfo.email} />
            </Avatar>
          }
          title={userInfo.fullname}
          titleTypographyProps={{ variant: 'display2' }}
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            <strong>{userInfo.ownItemNumber}</strong> Items shared{' '}
            <strong>{userInfo.borrowItemNumber}</strong> Items borrowed
          </Typography>

          <Typography variant="subheading">{userInfo.bio?userInfo.bio:`"No bio provided."`}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default withStyles(styles)(ItemsGrid);
