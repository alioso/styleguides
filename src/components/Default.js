import React, { Component } from 'react';

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
        A grid here perhaps
      </div>
    )
  }
}

export default  withStyles(styles)(BaseTheme);