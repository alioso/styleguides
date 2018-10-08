import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import BaseTheme from '../guides/BaseTheme';
import Manager from '../guides/Manager';

const styles = theme => ({
  root: {
    padding: 32,
  },
});

class Main extends Component {
  render () {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
         <Switch>
          <Route exact path='/' component={BaseTheme}/>
          <Route path='/base-theme' component={BaseTheme}/>
          <Route path='/manager' component={Manager}/>
        </Switch>
      </div>
    )
  }
}

export default  withStyles(styles)(Main);