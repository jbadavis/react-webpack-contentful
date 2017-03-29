import React from 'react';

import styles from './post-tile.scss';

const PostTile = props => {
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{props.post.fields.title}</h2>
      <p className={styles.postText}>{props.post.fields.bodyText}</p>
      <img className={styles.postImage} src={props.post.fields.mainImage.fields.file.url} />
    </div>
  )
};

export default PostTile;
