import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Pattern from './Pattern';

const styles = theme => ({
  root: {},
});

class Typographies extends Component {
  render () {
    const { classes, intro } = this.props;

    return(
      <div className={classes.root}>
        {intro}
        <h2 className="styleguide-header">Headlines</h2>
        <Pattern code='<h1>My Heading 1</h1>' />
        <Pattern code='<h2>My Heading 2</h2>' />
        <Pattern code='<h3>My Heading 3</h3>' />
        <Pattern code='<h4>My Heading 4</h4>' />
        <Pattern code='<h5>My Heading 5</h5>' />
        <Pattern code='<p>The quick brown fox jumps over the lazy dog</p>' />
      </div>
    )
  }
}

export default  withStyles(styles)(Typographies);