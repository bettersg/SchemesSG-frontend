/* eslint-disable arrow-body-style */
import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { breakpoints } from '../../constants/design';

const TeamMemberCard = ({
  name, role, img, url,
}) => {
  return (
    <div className="TeamMemberCard-root">
      <Link href={url} passHref>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={name} />
        </a>
      </Link>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body1" color="textSecondary">
        {role}
      </Typography>
      <style jsx>
        {`
          .TeamMemberCard-root {
            position: relative;
          }

          img {
            height: 250px;
            border-radius: 8px;
          }

          @media only screen and (max-width: ${breakpoints.width.lg}px) {
            img {
              height: 220px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TeamMemberCard;
