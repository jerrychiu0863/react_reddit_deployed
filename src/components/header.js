import React from "react";
import PropTypes from 'prop-types';

const Header = ({ className }) => {
  return (
    <div>
      <h1 className={className}>Reddit News</h1>
    </div>
  );
};

Header.propTypes = {
    className: PropTypes.string
}

export default Header;
