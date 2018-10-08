import React, { Component } from 'react';
import Pattern from "react-patterns";
import ShadowDOM from 'react-shadow';

import { withStyles } from '@material-ui/core/styles';
// import '../imports/linode-hugo-theme/static/assets/css/main.css';

const styles = theme => ({
  root: {
    padding: 32,
  },
});

class BaseTheme extends Component {
  render () {
    const { classes } = this.props;

    return(
      <ShadowDOM include={['./themes/linode-hugo-theme/static/assets/css/main.css']}>
        <div className={classes.root}>
          <Pattern>
            <h1>My Heading 1</h1>
          </Pattern>
          <Pattern>
            <button className="btn">Yo</button>
          </Pattern>
          </div>
      </ShadowDOM>
    )
  }
}

export default  withStyles(styles)(BaseTheme);