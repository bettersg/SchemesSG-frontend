import React from 'react';
import { Container, Typography } from '@material-ui/core';

import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import { colors } from '../constants/design';
import Link from 'next/link';

const Bank = () => {
  return (
    <>
      <Layout title='Bank | Schemes SG'>
        <PageHero
          title='Schemes Bank'
          subtitle='Full list of assistance listings compiled by our volunteers over time and accumulated through crowdsourcing.'
        />
        <section className='Bank-content'>
          <Container maxWidth='lg'>
            <div className='iframe-container'>
              <iframe
                src='https://datastudio.google.com/embed/reporting/5621beb1-3a1e-486b-9121-66f25382eab0/page/v0CAC'
                frameBorder='0'
                allowFullScreen
              />
            </div>

            <div className='disclaimer'>
              <Typography variant='h6' style={{ fontWeight: 700 }}>
                Please note
              </Typography>
              <Typography variant='body1'>
                Schemes SG is only an <strong>aggregator</strong> of public
                domain listings and crowdsourcing. We are not a VWO, nor any
                assistance-giving body, and we do not guarantee successful
                application of any schemes listed above. For more info on the
                listings and the thinking process behind their inclusion, see
                our{' '}
                <Link href='/about' passHref>
                  <a href='/about'>"About"</a>
                </Link>{' '}
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
            height: 650px;
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
        `}
      </style>
    </>
  );
};

export default Bank;
