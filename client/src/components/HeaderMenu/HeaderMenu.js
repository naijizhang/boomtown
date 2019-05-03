import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from '../../images/boomtown.svg';
import fingerLogo from '../../images/finger.svg';
import powerLogo from '../../images/power.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

class HeaderMenu extends Component {
  
  state = {
    anchorEl: null
  };
  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.topToolBar}>
            <IconButton>
              <img src={logo} alt="Boomtown logo" className={classes.logo} />
            </IconButton>
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

            <div>
              <Button
                variant="text"
                color="primary"
                disableFocusRipple={true}
                disableRipple={true}
                className={classes.buttonRight}
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}><img src={fingerLogo} alt="profile logo" className={classes.menulogo}/>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}><img src={powerLogo} alt="log out logo" className={classes.menulogo}/>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(HeaderMenu);
