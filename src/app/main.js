import React from 'react';

import Header from './components/header/header';
import Posts from './components/posts/posts';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Posts />
      </div>
    );
  }
}
