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
    const Posts = (this.state.posts.map((post, i) => <PostTile post={post} key={i} />))

    return (
      <div className={styles.posts}>
        {Posts !== 0 ? Posts : null}
      </div>
    )
  };
};
