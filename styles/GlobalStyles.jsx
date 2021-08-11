import React from 'react';
import { breakpoints, colors } from '../constants/design';

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

      @media only screen and (max-width: ${breakpoints.width.sm}px) {
        html,
        body,
        #__next {
          font-size: 16px;
        }
      }
    `}
  </style>
);

export default GlobalStyles;
