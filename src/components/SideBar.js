import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import ListItem from '@material-ui/core/ListItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';

import Logo from './Logo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: theme.drawerWidth,
    backgroundColor: '#333',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  logo: {
    maxWidth: 50,
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.logo}>
        <Logo />
      </div>
       <Divider />
        <div className={classes.toolbar} />
        <MenuList>
          <ListItem>Base Theme</ListItem>
          <Divider />
          <ListItem>Manager</ListItem>
          <Divider />
        </MenuList>
        
      </Drawer>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);