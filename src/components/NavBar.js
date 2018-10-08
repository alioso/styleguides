import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    left: theme.drawerWidth,
    backgroundColor: '#333',
  },
});

class NavBar extends Component {
  render () {
    const { classes } = this.props;

    return(
      <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Linode StyleGuides
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}
export default  withStyles(styles)(NavBar);