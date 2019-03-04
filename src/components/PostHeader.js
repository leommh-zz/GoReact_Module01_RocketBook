import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { img, name, time } = props;
  return (
    <div className="post-header">
      <div className="post-headerImg">
        <img src={img} alt={name} />
      </div>
      <div className="post-headerInfo">
        <strong>{name}</strong>
        <span>{time}</span>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
