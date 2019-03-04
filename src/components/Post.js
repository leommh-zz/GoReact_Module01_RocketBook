import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  const { key, description } = props;
  return (
    <div className="post" key={key}>
      <PostHeader {...props} />
      <div className="post-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  key: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
