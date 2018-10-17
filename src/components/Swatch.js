import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

class Swatch extends Component {
  render () {
    const { styleName, color } = this.props;

    return(
      <div className="swatch">
        <div className="swatch-inner" style={{ backgroundColor: color }}>
          <div className="swatch-text">{color}</div>
        </div>
        <pre className="swatch-class">.{styleName}</pre>
      </div>
    )
  }
}

export default withStyles(styles)(Swatch);