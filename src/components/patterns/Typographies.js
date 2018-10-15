import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Pattern from '../Pattern';

const styles = theme => ({
  root: {},
});

class Typographies extends Component {
  render () {
    const { classes, intro } = this.props;

    return(
      <div className={classes.root}>
        {intro}
        <h2 className="styleguide-section-header">Typography</h2>
        <h3 className="styleguide-header">Headlines</h3>
        <Pattern code={`<h1>My Heading 1</h1>
<h2>My Heading 2</h2>
<h3>My Heading 3</h3>
<h4>My Heading 4</h4>
<h5>My Heading 5</h5>`}/>
        <h3 className="styleguide-header">Paragraphs</h3>
        <Pattern code={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`} />
        <h3 className="styleguide-header">Formats</h3>
        <Pattern code={'<b>Bold Text</b>'} />
        <Pattern code={'<em>Italic Text</em>'} />
        <Pattern code={'<small>Small Text</small>'} />
      </div>
    )
  }
}

export default  withStyles(styles)(Typographies);