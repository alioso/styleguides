import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import ShadowDOM from 'react-shadow';

const styles = theme => ({
  root: {},
});

const Resets = `
  .styleguide-header {
    padding-bottom: 16px;
    border-bottom: 2px solid #eee;
    font-weight: normal;
    color: #4FAF63;
  }
  .pattern {
    padding: 16px 32px;
    background-color: white;
  }
  .code {
    padding: 12px 16px !important;
    font-size: 16px;
    border: 1px solid #eee;
    max-width: 100%;
    background-color: #f9f9f9 !important;
  }
  .swatch-container {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    padding: 20px 0;
  }
  .swatch {
    flex-basis: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .swatch-inner {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    outline: 1px solid #ccc;
    outline-offset: -10px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swatch-text {
    font-size: 14px;
    background-color: white;
    padding: 2px;
  }
  .swatch-class {
    width: 100%;
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
    color: #999;
    position: relative;
    top: -20px;
  }
  `;

class ShadowPattern extends Component {
  render () {
    const { classes, font, children, ...props } = this.props;

    return(
      <ShadowDOM
        nodeName="div"
        font={font}
        className="POO"
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