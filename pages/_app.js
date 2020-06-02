import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../includes/lib/with-redux-store';
// import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes/theme';

const MyApp = (props) => {
  const { Component, pageProps, reduxStore } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Next Admin</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}



export default withReduxStore(MyApp)