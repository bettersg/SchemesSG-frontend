/* eslint-disable arrow-body-style */
import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';

const TextLink = ({
  href,
  text,
  variant = 'subtitle1',
  color = 'textSecondary',
  newTab,
}) => {
  return (
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
};

export default TextLink;
