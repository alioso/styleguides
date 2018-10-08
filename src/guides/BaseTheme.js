import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: 32,
  },
});

class BaseTheme extends Component {
  render () {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        poo pooo poo
      </div>
    )
  }
}

export default  withStyles(styles)(BaseTheme);