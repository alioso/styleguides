import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Buttons from '../components/patterns/Buttons';
import Colors from '../components/patterns/Colors';
import Typographies from '../components/patterns/Typographies';
import ShadowPattern from '../components/ShadowPattern';

import { colors } from '../../public/themes/linode-hugo-theme/tailwind';

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
        <Colors colors={colors} />
        <Typographies />
        <Buttons />
      </ShadowPattern>
    )
  }
}

export default withStyles(styles)(BaseTheme);