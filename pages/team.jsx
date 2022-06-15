/* eslint-disable max-len */
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
    name: 'Quintus',
    role: 'ML Engineer',
    img: '/static/images/team/quintus.jpg',
    url: 'https://www.linkedin.com/in/quintus-lim-94379110a/',
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
    name: 'Catrina',
    role: 'Comms and Outreach Strategy',
    img: '/static/images/team/catrina.jpg',
    url: 'https://www.linkedin.com/in/catrina-lim/',
  },
  {
    name: 'Kenneth',
    role: 'Schemes Research I/C',
    img: '/static/images/team/kenneth.jpg',
    url: 'https://www.linkedin.com/in/kenneth-chong-1330b5123/',
  },

  {
    name: 'Karthig',
    role: 'Schemes Research I/C 2',
    img: '/static/images/team/karthig.jpg',
    url: 'https://www.linkedin.com/in/ramakrishnan-karthigayan-17980974',
  },
];

const Team = () => (
  <>
    <Layout title="Team | Schemes SG">
      <PageHero
        title="The Schemes SG Team"
        subtitle="We made this product with much heart."
      />
      <section className="Team-content">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="primary"
            style={{ fontWeight: 700, marginBottom: '3rem' }}
          >
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

          <Typography
            variant="h4"
            color="primary"
            style={{ fontWeight: 700, marginBottom: '3rem' }}
          >
            Our researchers
          </Typography>

          <Typography
            variant="body1"
            style={{ textAlign: 'left', marginTop: '3rem', marginBottom: '3rem' }}
          >
            <b>The Schemes SG app would not be possible without the tireless work of our researchers. Without a comprehensive backend repository of social assistance schemes in Singapore, put together by dedicated searching and ground experience, the best algorithm and data tools would mean nothing. These lovely individuals have availed their time, strength and heart to build this:</b>
          </Typography>

          <Typography
            variant="body1"
            style={{ marginBottom: '3rem' }}
          >
            Phyllis Brown
            <br />
            Alex Ang
            <br />
            Ruth Tan
            <br />
            Neo Loo Seng
            <br />
            Shelly Kwa
            <br />
            Ben Liu
            <br />
            Peggy Chong
            <br />
            Philip Tanpoco
            <br />
            Tnia Jun Peng
            <br />
            Ng Zhuo Wei
            <br />
            Phua Ying Jie
            <br />
          </Typography>

          <div className="disclaimer">
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              Please note
            </Typography>
            <Typography variant="body1">
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

export default Team;
