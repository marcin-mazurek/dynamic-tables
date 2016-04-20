import styles from './app.css';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import Grid from './grid';

class App extends Component {
  render() {
    return <Grid />;
  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
