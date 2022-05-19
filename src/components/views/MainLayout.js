import React from 'react';
import PropTypes from 'prop-types';

const Component = ({children}) => (
  <div>
    <h1>Weather API APP</h1>
    {children}
    <h2>Created by Adrian Sadowski</h2>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};