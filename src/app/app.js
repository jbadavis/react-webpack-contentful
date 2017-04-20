import React from 'react';

import Header from './components/header/header';
import Posts from './components/posts/posts';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Posts />
      </div>
    );
  }
}
