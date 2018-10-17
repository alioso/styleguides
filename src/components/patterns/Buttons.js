import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Swatch from '../Swatch';

const styles = theme => ({
  root: {},
});

class Colors extends Component {

  render () {
    const { classes, intro, colors } = this.props;

    const swatches = [];
    Object.entries(colors).forEach(([key, color]) => {
        swatches.push(<Swatch key={key} styleName={key} color={color} />)
      }
    )

    return (
      <div
        className={classes.root}
      >
        {intro}
        <h2 className="styleguide-section-header">Colors</h2>
        <h3 className="styleguide-header">Swatches</h3>
        <div className="swatch-container">
          {swatches}
        </div>
      </div>
    )
  }
}

export default  withStyles(styles)(Colors);