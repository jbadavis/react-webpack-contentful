import React from 'react';
import PostTile from '../post-tile/post-tile'
import * as dataService from '../../../js/data-service'

import styles from './posts.scss';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = {posts: []};
  };

  componentDidMount() {
    dataService.init();
    dataService.getEntries('post').then(entries => this.setState({'posts': entries}));
  };

  render() {
    return (
      <div className={styles.posts}>
        {this.state.posts.length !== 0 ? this.state.posts.map((post, i) => {
            return <PostTile post={post} key={i} />
          }) : null}
      </div>
    )
  };
};
