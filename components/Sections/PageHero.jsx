import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { breakpoints, colors } from '../../constants/design';

const HomepageHero = ({ title, subtitle }) => {
  return (
    <>
      <section className='HomepageHero-root'>
        <Container maxWidth='lg'>
          <Typography
            variant='h4'
            variantMapping={{ h2: 'h1' }}
            color='inherit'
            style={{ fontWeight: 700, textAlign: 'center'}}
            gutterBottom>
            {title}
          </Typography>

          <Typography variant='h6' style={{textAlign: 'center'}}>{subtitle}</Typography>
        </Container>
      </section>

      <style jsx>
        {`
          .HomepageHero-root {
            position: relative;
            color: #fff;
            background-color: ${colors.background.dark};
          }

          .HomepageHero-content {
            padding: 0 5rem;
            text-align: center;
          }

          section {
            padding: 5rem 0;
          }

          @media only screen and (max-width: ${breakpoints.width.md}px) {
            .HomepageHero-content {
              padding: 0 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default HomepageHero;
