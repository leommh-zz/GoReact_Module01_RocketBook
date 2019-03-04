import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { children } = props;
  return (
    <div className="header">
      <h4>{children}</h4>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
