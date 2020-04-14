import React from 'react';
import PropTypes from 'prop-types';

import PageNav from '../MainLayout/MainLayout';

const MainLayout = (props) => (
  <div>
    {props.children}
    <PageNav />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
