import React from 'react';
import ReactDOM from 'react-dom';

import styles from './scss/base.scss'

class MyComponent extends React.Component {
  render() {
    return <p>Hello World</p>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('container'));
