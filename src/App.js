import React, { Component } from 'react';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import theme from './theme';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import './index.css';

const styles = theme => ({
  root: {
    height: '100%',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <NavBar />
          <SideBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
