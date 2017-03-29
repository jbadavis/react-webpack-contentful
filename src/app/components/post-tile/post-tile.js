import React from 'react';

const PostTile = (props) => {
  return (
    <div>
      <h2>{props.post.fields.title}</h2>
      <p>{props.post.fields.bodyText}</p>
      <img src={props.post.fields.mainImage.fields.file.url} />
    </div>
  )
};

export default PostTile;
