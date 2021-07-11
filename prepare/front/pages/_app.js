import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import React from 'react';
import wrapper from '../store/ConfigureStore';

const App = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird</title>

    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
