import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({
  title,
  children,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) => {
  return (
    <div className='layout-root'>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name='description' content={description} />}

        {ogTitle && (
          <>
            <meta property='og:title' content={ogTitle} />
            <meta name='twitter:title' content={ogTitle} />
          </>
        )}

        {ogDescription && (
          <>
            <meta name='og:description' content={ogDescription} />
            <meta name='twitter:description' content={ogDescription} />
          </>
        )}

        {ogImage && (
          <>
            <meta property='og:image' content={ogImage} />
            <meta name='twitter:image' content={ogImage} />
          </>
        )}

        {ogUrl && (
          <>
            <meta property='og:url' content={ogUrl} />
            <meta name='twitter:url' content={ogUrl} />
          </>
        )}
      </Head>
      <Navbar />
      {children}
      <Footer />

      <style jsx>
        {`
          .layout-root {
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
