import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import TeamMemberCard from '../components/Card/TeamMemberCard';
import { colors } from '../constants/design';

const team = [
  {
    name: 'Weilie',
    role: 'Product Lead, Engineer',
    img: '/static/images/team/wl.jpg',
    url: 'https://www.linkedin.com/in/tanweilie',
  },
  {
    name: 'Hongchiong',
    role: 'Frontend Engineer',
    img: '/static/images/team/hongchiong.jpg',
    url: 'https://www.linkedin.com/in/hongchiong/',
  },
  {
    name: 'Joel',
    role: 'Backend and Deployment Engineer',
    img: '/static/images/team/joel.jpg',
    url: 'https://www.linkedin.com/in/joelkek',
  },
  {
    name: 'Jian Yang',
    role: 'ML Engineer',
    img: '/static/images/team/jianyang.jpg',
    url: 'https://www.linkedin.com/in/jian-yang-lum-766a8b85',
  },
  {
    name: 'Karn',
    role: 'UX Research, Outreach and Comms Design',
    img: '/static/images/team/karn.jpg',
    url: 'https://www.linkedin.com/in/karnmalhotra',
  },
  {
    name: 'Kenneth',
    role: 'Schemes Research',
    img: '/static/images/team/kenneth.jpg',
    url: 'https://www.linkedin.com/in/kenneth-chong-1330b5123/',
  },
  {
    name: 'Joanne',
    role: 'Schemes Research',
    img: '/static/images/team/joanne.jpg',
    url: 'https://www.linkedin.com/in/joannebergenwall',
  },
  {
    name: 'Karthig',
    role: 'Schemes Research',
    img: '/static/images/team/karthig.jpg',
    url: 'https://www.linkedin.com/in/ramakrishnan-karthigayan-17980974',
  },
];

const Team = () => {
  return (
    <>
      <Layout title='Team | Schemes SG'>
        <PageHero
          title='The Schemes SG Team'
          subtitle='We made this product with much heart.'
        />
        <section className='Team-content'>
          <Container maxWidth='lg'>
            <Typography
              variant='h4'
              color='primary'
              style={{ fontWeight: 700, marginBottom: '3rem' }}>
              The Schemes SG Team
            </Typography>

            <Grid container spacing={4}>
              {team.map((member) => (
                <Grid item md={3} sm={6} xs={12} key={member.name}>
                  <TeamMemberCard
                    name={member.name}
                    role={member.role}
                    img={member.img}
                    url={member.url}
                  />
                </Grid>
              ))}
            </Grid>

            <div className='disclaimer'>
              <Typography variant='h6' style={{ fontWeight: 700 }}>
                Please note
              </Typography>
              <Typography variant='body1'>
                We are a team of volunteers who wish to make a difference. As we
                are doing this in our personal time, we might take a while to
                respond.
              </Typography>
            </div>
          </Container>
        </section>
      </Layout>

      <style jsx>
        {`
          .Team-root {
            position: relative;
          }

          section {
            padding: 3rem 0;
          }

          .Team-content {
            text-align: center;
          }

          .disclaimer {
            display: inline-block;
            margin-top: 3rem;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: ${colors.error.main};
            border: 1px solid ${colors.error.main};
          }
        `}
      </style>
    </>
  );
};

export default Team;
