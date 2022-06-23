/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head>
          { isProduction && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-195207938-1"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'UA-195207938-1');
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  // trim() is used to remove any whitespace before or after the string
  // source: https://stackoverflow.com/questions/39529870/ifprocess-env-node-env-production-always-false
  const isProduction = process.env.NODE_ENV.trim() === 'production';

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    isProduction,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
