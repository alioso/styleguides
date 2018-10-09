import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import ShadowPattern from '../components/ShadowPattern';
import Typographies from '../components/Typographies';

const styles = theme => ({
  root: {},
});

class BaseTheme extends Component {
  render () {
    const {  } = this.props;

    return(
      <ShadowPattern
        include={['./themes/linode-hugo-theme/static/assets/css/main.css']}
        font={`@import url('https://fonts.googleapis.com/css?family=Lato:400,700')`}
      >
        <Typographies />
      </ShadowPattern>
    )
  }
}

export default withStyles(styles)(BaseTheme);