import React from 'react';
import { Container, Hidden, Typography } from '@material-ui/core';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import { breakpoints, colors } from '../constants/design';

const Bank = () => (
  <>
    <Layout title="Bank | Schemes SG">
      <PageHero
        title="Schemes Bank"
        subtitle="Full list of assistance listings compiled by our volunteers over time and accumulated through crowdsourcing."
      />
      <section className="Bank-content">
        <Container maxWidth="lg">
          <div className="iframe-container">
            <Hidden xsDown>
              <iframe
                src="https://datastudio.google.com/embed/reporting/e8187b37-7af2-4166-b61a-eb54446bb86c/page/v0CAC"
                frameBorder="0"
                allowFullScreen
              />
            </Hidden>
            <Hidden smUp>
              <iframe
                src="https://datastudio.google.com/embed/reporting/e9511193-d184-432c-9db7-12061cd74d93/page/0V2DC"
                frameBorder="0"
                allowFullScreen
              />
            </Hidden>
          </div>

          <div className="disclaimer">
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              Please note
            </Typography>
            <Typography variant="body1">
              Schemes SG is only an
              {' '}
              <strong>aggregator</strong>
              {' '}
              of public
              domain listings and crowdsourcing. We are not a VWO, nor any
              assistance-giving body, and we do not guarantee successful
              application of any schemes listed above. For more info on the
              listings and the thinking process behind their inclusion, see
              our
              {' '}
              <Link href="/about" passHref>
                <a href="/about">"About"</a>
              </Link>
              {' '}
              page.
            </Typography>
          </div>
        </Container>
      </section>
    </Layout>

    <style jsx>
      {`
          .Bank-root {
            position: relative;
          }

          section {
            padding: 3rem 0;
          }

          .iframe-container {
            height: 2110px;
          }

          iframe {
            width: 100%;
            height: 100%;
          }

          .disclaimer {
            display: inline-block;
            margin-top: 3rem;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: ${colors.error.main};
            border: 1px solid ${colors.error.main};
          }

          a {
            color: inherit;
            font-weight: 700;
          }

          a:hover {
            opacity: 0.7;
          }

          @media only screen and (max-width: ${breakpoints.width.sm}px) {
            .iframe-container {
              height: 144vw;
            }
          }
        `}
    </style>
  </>
);

export default Bank;
