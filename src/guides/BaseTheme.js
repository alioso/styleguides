import React, { Component } from 'react';
import Pattern from "react-patterns";
import ShadowDOM from 'react-shadow';

import { withStyles } from '@material-ui/core/styles';

const ResetStyles = `@import url('https://fonts.googleapis.com/css?family=Lato:400,700')`;

const styles = theme => ({
  root: {
    padding: 32,
  },
});

class BaseTheme extends Component {
  render () {
    const { classes } = this.props;

    return(
      <ShadowDOM nodeName="div" include={['./themes/linode-hugo-theme/static/assets/css/main.css']}>
        <div className={classes.root}>
          <Pattern>
            <h1>My Heading 1</h1>
          </Pattern>
          <Pattern>
            <button className="btn">Yo</button>
          </Pattern>
          <style type="text/css">{ResetStyles}</style>
        </div>
      </ShadowDOM>
    )
  }
}

export default  withStyles(styles)(BaseTheme);