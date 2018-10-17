import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Pattern from '../Pattern';

const styles = theme => ({
  root: {},
});

class Colors extends Component {

  render () {
    const { classes, intro } = this.props;

    return (
      <div>
        {intro}
        <h2 className="styleguide-section-header">Call to Actions</h2>
        <h3 className="styleguide-header">Buttons</h3>
        <Pattern code={`<button class="btn">Regular Button</button>`} />
        <Pattern code={`<button class="btn btn-sm">Small Button</button>`} />
        <h3 className="styleguide-header">Links</h3>
        <Pattern code={`<p>This is a <a href="#">normal link</a> within a paragraph.</p>`} />
      </div>
    )
  }
}

export default  withStyles(styles)(Colors);