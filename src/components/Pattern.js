import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/styles/hljs';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {},
});

class Pattern extends Component {
  render () {
    const { code, label } = this.props;

    return(
      <div
        className="pattern"
        code={code}
        label={label}
      >
        <div dangerouslySetInnerHTML={{ __html: code }} />
        <div>
          <SyntaxHighlighter className="code" language='html' style={githubGist}>{code}</SyntaxHighlighter>
        </div>
      </div>
    )
  }
}

export default  withStyles(styles)(Pattern);