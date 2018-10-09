import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import ShadowDOM from 'react-shadow';

const styles = theme => ({
  root: {},
});

const Resets = `
  .styleguide-header {
    padding-bottom: 24px;
    border-bottom: 2px solid #eee;
    font-weight: normal;
  }
  .code {
    padding: 8px 16px !important;
  }`;

class ShadowPattern extends Component {
  render () {
    const { classes, font, children, ...props } = this.props;

    return(
      <ShadowDOM
        nodeName="div"
        font={font}
        {...props}
      >
        <div className={classes.root}>
          {children}
          <style type="text/css">{Resets}</style>
          <style type="text/css">{font}</style>
        </div>
      </ShadowDOM>
    )
  }
}

export default  withStyles(styles)(ShadowPattern);