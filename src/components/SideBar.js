import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import theme from '../theme';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';

import Logo from './Logo';

const styles = theme => ({
  root: {
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: 240,
    backgroundColor: '#333',
  },
  menu: {},
  menuLink: {
    color: 'white',
    textDecoration: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: theme.spacing.unit * 2,
    top: 12,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  title: {
    color: '#4FAF63',
    padding: theme.spacing.unit * 2,
  },
  logo: {
    maxWidth: 100,
    padding: theme.spacing.unit * 2,
  },
});

class ClippedDrawer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          <div className={classes.logo}>
            <a href="/"><Logo /></a>
          </div>
          <Typography variant="title" className={classes.title}>StyleGuides</Typography>
          <MenuList className={classes.menu}>
            <Divider />
            <MenuItem className={classes.menuItem}><Link className={classes.menuLink} to='/base-theme'>Base Theme</Link></MenuItem>
            <Divider />
            <MenuItem className={classes.menuItem}><Link className={classes.menuLink} to='/manager'>Manager</Link></MenuItem>
            <Divider />
          </MenuList>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);