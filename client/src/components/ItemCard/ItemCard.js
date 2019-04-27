import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import moment from 'moment';
function ItemCard({ classes, item }) {
  const dateToStore = item.created.substring(4,24);
  console.log(dateToStore);
  const momentDate = moment(dateToStore,'MMM DD YYYY HH:mm:ss')
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={item.imageurl}
          title="Image title"
        />
        <CardHeader
          avatar={
            <Avatar round='true' className={classes.avatar}>
               <Gravatar email={item.itemowner.email}/>
            </Avatar>
          }
          title={item.itemowner.fullname}
          subheader= {momentDate.fromNow()}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="title" component="h2">
            {/* variant:    "display4","display3","display2","display1","headline","title","subheading","body2","body1","caption","button" */}
            {item.title}
          </Typography>
          <Typography className={classes.tag}>
            {item.tags.map(tag => tag.title).join(', ')}
          </Typography>
          <Typography>{item.description}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" className={classes.button}>
            Borrow
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(ItemCard);
