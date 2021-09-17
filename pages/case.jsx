import React from 'react';
import {
  Container, Typography, Grid, Paper,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import PanToolIcon from '@material-ui/icons/PanTool';
import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import { colors } from '../constants/design';
import IconContainer from '../components/Container/IconContainer';
import CaseForm from '../components/Form/CaseForm';

const Case = () => (
  <>
    <Layout title="Schemes Case | Schemes SG">
      <PageHero
        title="Schemes Case"
        subtitle="Tap on our volunteers to conduct research on assistance for uncovered areas."
      />
      <Container
        maxWidth="lg"
        style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Reach out to us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Can't find relevant assistance through the AI or even by manually filtering?
            </Typography>
            <div className="feature-description">
              <IconContainer icon={<PanToolIcon style={{ width: 20 }} />} />
              <Typography variant="body1" style={{ marginLeft: 12 }}>
                Our volunteers can help you to search. If possible, include the search term that you used in the AI tool.
              </Typography>
            </div>
            <div className="feature-description">
              <IconContainer icon={<SearchIcon style={{ width: 20 }} />} />
              <Typography variant="body1" style={{ marginLeft: 12 }}>
                If it is an unmet social need, we might also conduct further research.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <CaseForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <div className="disclaimer">
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            Please note
          </Typography>
          <Typography variant="body1">
            Schemes SG is only an
            {' '}
            <strong>aggregator</strong>
            {' '}
            of public domain
            listings and crowdsourcing. We are not a VWO, nor any
            assistance-giving body, and we do not guarantee successful
            application of any schemes listed above. Schemes Pal only serves
            to help you make sense of existing schemes out there. The Schemes
            Pal engine is
            {' '}
            <strong>still being upgraded</strong>
            .
          </Typography>
        </div>
      </Container>
    </Layout>

    <style jsx>
      {`
          .Case-root {
            position: relative;
          }

          .disclaimer {
            display: inline-block;
            margin: 3rem 0;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: ${colors.error.main};
            border: 1px solid ${colors.error.main};
          }

          a {
            color: inherit;
            font-weight: 700;
          }

          a:hover {
            opacity: 0.7;
          }

          .feature-description {
            display: flex;
            align-items: center;
            margin: 1rem auto;
            text-align: left;
          }
        `}
    </style>
  </>
);

export default Case;
