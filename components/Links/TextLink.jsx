import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';

// React functional component that takes in text props,
// href links... and other props
const TextLink = ({
  href,
  text,
  variant = 'subtitle1',
  color = 'textSecondary',
  newTab,
}) => (
  <>
    <Link href={href} passHref>
      {newTab ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Typography variant={variant} color={color}>
            <span>{text}</span>
          </Typography>
        </a>
      ) : (
        <a href={href}>
          <Typography variant={variant} color={color}>
            <span>{text}</span>
          </Typography>
        </a>
      )}
    </Link>
    <style jsx>
      {`
          .TextLink-root {
            position: relative;
          }

          span:hover {
            opacity: 0.8;
          }

          a {
            color: inherit;
          }
        `}
    </style>
  </>
);

export default TextLink;
