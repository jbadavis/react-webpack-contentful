import React from 'react';

import styles from './post-tile.scss';

const PostTile = props => {
  const imgUrl = props.post.fields.mainImage.fields.file.url + '?fm=jpg&fl=progressive';

  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{props.post.fields.title}</h2>
      <p className={styles.postText}>{props.post.fields.bodyText}</p>
      <img className={styles.postImage} src={imgUrl} />
      <h3 className={styles.postCategory}>{props.post.fields.category.fields.title}</h3>
    </div>
  )
};

export default PostTile;
