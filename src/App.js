import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

import Main from './components/Main';
import SideBar from './components/SideBar';

import './index.css';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
  },
  drawer: {
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  drawerPaper: {
    position: 'fixed',
    width: 240,
    backgroundColor: '#333',
  },
  navIconOpen: {
    position: 'absolute',
  },
  navIconClose: {
    width: 50,
    color: 'white',
    alignSelf: 'flex-start',
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    const { mobileOpen } = this.state;

    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.navIconOpen}
          >
            <Menu />
          </IconButton>
          <Drawer
            variant="temporary"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            open={mobileOpen}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconClose}
            >
              <Close />
            </IconButton>
            <SideBar 
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <SideBar open={mobileOpen} />
          </Drawer>
        </Hidden>
        <Main />
      </div>
    );
  }
}

export default withStyles(styles)(App);
