import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({children, name}) => {
  return (
    <div className={`${name}__wrapper container`}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  name: PropTypes.string.isRequired,
};

export default Wrapper;
