import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const styles = {
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z" />
    </SvgIcon>
  );
}

function GalleryIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6" />
    </SvgIcon>
  );
}

function MapsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M15.5,4.5C15.5,5.06 15.7,5.54 16.08,5.93C16.45,6.32 16.92,6.5 17.5,6.5C18.05,6.5 18.5,6.32 18.91,5.93C19.3,5.54 19.5,5.06 19.5,4.5C19.5,3.97 19.3,3.5 18.89,3.09C18.5,2.69 18,2.5 17.5,2.5C16.95,2.5 16.5,2.69 16.1,3.09C15.71,3.5 15.5,3.97 15.5,4.5M22,4.5C22,5.5 21.61,6.69 20.86,8.06C20.11,9.44 19.36,10.56 18.61,11.44L17.5,12.75C17.14,12.38 16.72,11.89 16.22,11.3C15.72,10.7 15.05,9.67 14.23,8.2C13.4,6.73 13,5.5 13,4.5C13,3.25 13.42,2.19 14.3,1.31C15.17,0.44 16.23,0 17.5,0C18.73,0 19.8,0.44 20.67,1.31C21.55,2.19 22,3.25 22,4.5M21,11.58V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H11.2C11.08,3.63 11,4.13 11,4.5C11,5.69 11.44,7.09 12.28,8.7C13.13,10.3 13.84,11.5 14.41,12.21C15,12.95 15.53,13.58 16.03,14.11L17.5,15.7L19,14.11C20.27,12.5 20.94,11.64 21,11.58M9,14.5V15.89H11.25C11,17 10.25,17.53 9,17.53C8.31,17.53 7.73,17.28 7.27,16.78C6.8,16.28 6.56,15.69 6.56,15C6.56,14.31 6.8,13.72 7.27,13.22C7.73,12.72 8.31,12.47 9,12.47C9.66,12.47 10.19,12.67 10.59,13.08L11.67,12.05C10.92,11.36 10.05,11 9.05,11H9C7.91,11 6.97,11.41 6.19,12.19C5.41,12.97 5,13.91 5,15C5,16.09 5.41,17.03 6.19,17.81C6.97,18.59 7.91,19 9,19C10.16,19 11.09,18.63 11.79,17.91C12.5,17.19 12.84,16.25 12.84,15.09C12.84,14.81 12.83,14.61 12.8,14.5H9Z" />
    </SvgIcon>
  );
}

function CalendarIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
    </SvgIcon>
  );
}

function TeamIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#000000" d="M2.34,14.63C2.94,14.41 3.56,14.3 4.22,14.3C5.56,14.3 6.73,14.72 7.73,15.56L4.59,18.7C3.53,17.5 2.78,16.13 2.34,14.63M15.56,9.8C17.53,11.27 19.66,11.63 21.94,10.88C21.97,11.09 22,11.47 22,12C22,13.03 21.75,14.18 21.28,15.45C20.81,16.71 20.23,17.73 19.55,18.5L13.22,12.19L15.56,9.8M8.77,16.64C9.83,18.17 10.05,19.84 9.42,21.66C8,21.25 6.73,20.61 5.67,19.73L8.77,16.64M12.19,13.22L18.5,19.55C16.33,21.45 13.78,22.25 10.88,21.94C11.09,21.28 11.2,20.56 11.2,19.78C11.2,19.16 11.06,18.43 10.78,17.6C10.5,16.77 10.17,16.09 9.8,15.56L12.19,13.22M8.81,14.5C7.88,13.67 6.8,13.15 5.58,12.91C4.36,12.68 3.19,12.75 2.06,13.13C2.03,12.91 2,12.53 2,12C2,10.97 2.25,9.82 2.72,8.55C3.19,7.29 3.77,6.27 4.45,5.5L11.11,12.19L8.81,14.5M15.56,7.73C14.22,6.08 13.91,4.28 14.63,2.34C15.25,2.5 15.96,2.8 16.76,3.26C17.55,3.71 18.2,4.16 18.7,4.59L15.56,7.73M21.66,9.38C21.06,9.59 20.44,9.7 19.78,9.7C18.69,9.7 17.64,9.38 16.64,8.72L19.73,5.67C20.61,6.77 21.25,8 21.66,9.38M12.19,11.11L5.5,4.45C7.67,2.55 10.22,1.75 13.13,2.06C12.91,2.72 12.8,3.44 12.8,4.22C12.8,4.94 12.96,5.75 13.29,6.66C13.62,7.56 14,8.28 14.5,8.81L12.19,11.11Z" />
    </SvgIcon>
  );
}

class App extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <Button>
              <Avatar>
                <HomeIcon />
              </Avatar>
              <ListItemText primary="Home" />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <Avatar>
                <GalleryIcon />
              </Avatar>
              <ListItemText primary="Gallery" />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <Avatar>
                <CalendarIcon />
              </Avatar>
              <ListItemText primary="Calendar" />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <Avatar>
                <MapsIcon />
              </Avatar>
              <ListItemText primary="Where" />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <Avatar>
                <TeamIcon />
              </Avatar>
              <ListItemText primary="Team" />
            </Button>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="fixed" color="default">
            <Toolbar>
              <IconButton className="root" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Home
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
