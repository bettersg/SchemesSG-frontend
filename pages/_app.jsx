import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_SG" />
        <meta name="twitter:card" content="summary" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:image" content="/static/images/og/metaimage.png" />
        <meta name="author" content="Schemes SG team" />
        <meta
          name="description"
          content="One stop directory and AI-enabled search to help make sense of assistance schemes in Singapore."
        />
        <title>Schemes SG</title>
      </Head>

      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
