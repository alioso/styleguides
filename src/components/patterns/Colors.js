import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import extractor from 'css-color-extractor';

const styles = theme => ({
  root: {},
});

class Colors extends Component {

  render () {
    const { classes, intro, css } = this.props;

    const colors = extractor.fromCss(css);
    const  swatches = colors.reduce((result, item) => {
      result += `<li>${item}</li>`;
      
      return result;
    }, '');

    return (
      <div
        className={classes.root}
      >
        {intro}
        <h2 className="styleguide-section-header">Colors</h2>
        <h3 className="styleguide-header">Headlines</h3>
        {swatches}
      </div>
    )
  }
}

export default  withStyles(styles)(Colors);