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
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function ItemCard({ classes, item, breakpoints }) {
  const dateToStore = new Date(item.created);
  const momentDate = moment(dateToStore);
  return (
    <Grid
      item
      xs={breakpoints.xs}
      sm={breakpoints.sm}
      md={breakpoints.md}
      lg={breakpoints.lg}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={item.imageurl}
          title="Image title"
          component={Link}
          to={'/profile/' + item.itemowner.id}
        />
        <CardHeader
          avatar={
            <Avatar round="true" className={classes.avatar}>
              <Gravatar email={item.itemowner.email} />
            </Avatar>
          }
          title={item.itemowner.fullname}
          subheader={momentDate.fromNow()}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
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

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  breakpoints: PropTypes.object.isRequired
};
export default withStyles(styles)(ItemCard);
