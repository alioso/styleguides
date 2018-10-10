import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import theme from '../theme';

import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';

import Logo from './Logo';

const styles = theme => ({
  root: {},
  menu: {},
  menuItem: {
    padding: 0,
    height: 'auto',
  },
  menuLink: {
    color: 'white',
    textDecoration: 'none',
    padding: theme.spacing.unit * 2,
    display: 'block',
    width: '100%',
    '&.active': {
      color: '#4FAF63'
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  title: {
    color: 'white',
    fontWeight: 700,
    padding: theme.spacing.unit * 2,
  },
  logo: {
    maxWidth: 100,
    padding: theme.spacing.unit * 2,
  },
});

class ClippedDrawer extends Component {

  render() {
    const { classes, open } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.logo}>
            <a href="/"><Logo /></a>
          </div>
          <Typography variant="title" className={classes.title}>StyleGuides</Typography>
          <MenuList className={classes.menu}>
            <Divider />
            <MenuItem className={classes.menuItem}>
              <NavLink
                className={classes.menuLink}
                to='/base-theme'
                activeClassName="active"
              >
                Base Theme
              </NavLink>
            </MenuItem>
            <Divider />
            <MenuItem className={classes.menuItem}>
              <NavLink
                className={classes.menuLink}
                to='/manager'
                activeClassName="active"
              >
                Manager
              </NavLink>
            </MenuItem>
            <Divider />
          </MenuList>
        </div>
      </MuiThemeProvider>
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);