import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import ShadowPattern from '../components/ShadowPattern';
import Colors from '../components/patterns/Colors';
import Typographies from '../components/patterns/Typographies';

const poo = require('../themes/linode-hugo-theme/static/assets/css/main.css').toString();

const styles = theme => ({
  root: {},
});

class BaseTheme extends Component {
  render () {
    const {} = this.props;

    return(
      <ShadowPattern
        include={['./themes/linode-hugo-theme/static/assets/css/main.css']}
        font={'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'}
      >
        poo: {poo}
        {/* <Colors css={poo} /> */}
        <Typographies />
      </ShadowPattern>
    )
  }
}

export default withStyles(styles)(BaseTheme);