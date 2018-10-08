import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Main from './components/Main';
import SideBar from './components/SideBar';

import './index.css';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default withStyles(styles)(App);
