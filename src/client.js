import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

import styles from './scss/base.scss';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('container'));
