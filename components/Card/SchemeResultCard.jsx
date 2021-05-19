import React from 'react';
import Link from 'next/link';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import { breakpoints } from '../../constants/design';

const SchemeResultCard = ({
  scheme,
  agency,
  description,
  image,
  link,
  relevance,
}) => {
  return (
    <Card elevation={2}>
      <Link href={link} passHref>
        <CardActionArea
          target='_blank'
          rel='noopener noreferrer'
          style={{ padding: '1.2rem' }}>
          <img src={image} alt={agency} />

          <Typography variant='h6' style={{ fontWeight: 700 }}>
            {scheme}
          </Typography>
          <Typography
            variant='subtitle1'
            gutterBottom
            style={{ lineHeight: 1.4, margin: '4px 0 0.8rem 0' }}>
            {scheme}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {description}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            style={{
              fontStyle: 'italic',
              marginTop: '1rem',
            }}>
            Relevance score: {relevance}
          </Typography>
        </CardActionArea>
      </Link>
      <style jsx>
        {`
          .SchemeResultCard-root {
            position: relative;
          }

          img {
            height: 150px;
          }

          @media only screen and (max-width: ${breakpoints.width.lg}px) {
          }
        `}
      </style>
    </Card>
  );
};

export default SchemeResultCard;
