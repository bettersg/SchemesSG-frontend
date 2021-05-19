import React from 'react';
import { colors } from '../constants/design';

const GlobalStyles = () => (
  <style global jsx>
    {`
      @import url(https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,600,700,800&display=swap);

      html,
      body,
      #__next {
        scroll-behavior: smooth;
      }

      a {
        text-decoration: none;
      }

      .ss-blue {
        color: ${colors.primary.main};
      }
    `}
  </style>
);

export default GlobalStyles;
