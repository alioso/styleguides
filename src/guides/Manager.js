import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

class Manager extends Component {
  render () {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        Import manager stuff here
      </div>
    )
  }
}

export default  withStyles(styles)(Manager);