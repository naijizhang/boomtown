import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from '../../images/boomtown.svg';

function HeaderMenu({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.topToolBar}>
          <img src={logo} alt="Boomtown logo" className={classes.logo} />
          <div className={classes.grow} />
          <Button
            variant="text"
            color="primary"
            disableFocusRipple={true}
            disableRipple={true}
            className={classes.buttonLeft}
          >
            <AddIcon className={classes.leftAddIcon} />
            SHARE SOMETHING
          </Button>
          <Button
            variant="text"
            color="primary"
            disableFocusRipple={true}
            disableRipple={true}
            className={classes.buttonRight}
          >
            <MoreVertIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(HeaderMenu);
