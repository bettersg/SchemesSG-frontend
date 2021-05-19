import React from 'react';
import { Container } from '@material-ui/core';

const HeroContainer = ({ children }) => {
  return (
    <>
      <section className='HeroContainer-root'>
        <Container maxWidth='lg'>{children}</Container>
      </section>

      <style jsx>
        {`
          .HeroContainer-root {
            position: relative;
          }

          section {
            padding: 3rem 0;
          }
        `}
      </style>
    </>
  );
};

export default HeroContainer;
