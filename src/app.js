import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/main';

import styles from './scss/base.scss';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Main />, document.getElementById('container'));
