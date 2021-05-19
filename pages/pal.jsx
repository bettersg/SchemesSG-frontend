import React from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Tooltip,
  Grid,
  TextField,
  Button,
  Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import IconContainer from '../components/Container/IconContainer';
import PersonIcon from '@material-ui/icons/Person';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { colors } from '../constants/design';
import SchemeResultCard from '../components/Card/SchemeResultCard';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
    padding: '0.4rem 0.8rem',
    lineHeight: '20px',
  },
}))(Tooltip);

const Pal = ({ queryResults }) => {
  const [searchResults, setSearchResults] = React.useState(queryResults);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(
      'https://schemessg-v2.herokuapp.com/schemespredict',
      { query: value }
    );

    const data = await res.data;
    setSearchResults(data);
    setLoading(false);
    const url = new URL(window.location);
    url.searchParams.set('query', value);
    window.history.pushState({}, '', url);
  };

  return (
    <>
      <Layout title='Schemes Pal |Schemes SG'>
        <PageHero
          title='Schemes Pal'
          subtitle='AI-powered search to retrieve relevant assistance listings.'
        />
        <Container
          maxWidth='lg'
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <Grid container spacing={4} alignItems='center'>
            <Grid item lg={6}>
              <Typography variant='h4' gutterBottom>
                How to use
              </Typography>
              <div className='feature-description'>
                <IconContainer icon={<PersonIcon style={{ width: 20 }} />} />
                <Typography variant='body1' style={{ marginLeft: 12 }}>
                  Indicate your beneficiary's/your profile (e.g. "elderly with
                  healthcare needs").
                  <br />
                  <strong>DO NOT</strong> give identifiable info like NRIC or
                  name.{' '}
                  <LightTooltip
                    title='We record the query text but only for a short period of time. This is to train the AI model and improve its accuracy to serve you better. We are unable to identify the individuals who entered the query or who it refers to. You can help us ensure an even greater level of security by not providing names or identifiable detail.'
                    placement='right'>
                    <span className='tooltip-text'>
                      Important: please read this.
                    </span>
                  </LightTooltip>
                </Typography>
              </div>
              <div className='feature-description'>
                <IconContainer
                  icon={<RecordVoiceOverIcon style={{ width: 20 }} />}
                />
                <Typography variant='body1' style={{ marginLeft: 12 }}>
                  Tell us the assistance you need.
                  <br />
                  The more specific you are (e.g. "financial assistance for
                  dialysis"), the better the search.
                </Typography>
              </div>
              <div className='feature-description'>
                <IconContainer icon={<ThumbUpIcon style={{ width: 20 }} />} />
                <Typography variant='body1' style={{ marginLeft: 12 }}>
                  Example of a good search:
                  <br />"
                  <u>
                    My client needs assistance as a dialysis patient. She is
                    also in need of a job and financial support after COVID 19
                    has caused her to be retrenched.
                  </u>
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6}>
              <Paper elevation={3}>
                <form className='query-container' onSubmit={handleSubmit}>
                  <TextField
                    id='query-input'
                    label='Tell us a few word'
                    rows={5}
                    multiline
                    name='query'
                    value={value}
                    onChange={handleChange}
                    variant='outlined'
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    disableElevation
                    style={{ marginTop: '1rem' }}>
                    <Typography variant='subtitle1'>Search</Typography>
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {!!searchResults && searchResults !== 'nil' && searchResults.data && (
          <div className='search-results-container'>
            {loading ? (
              <p>loading...</p>
            ) : (
              <Container maxWidth='lg'>
                <Typography
                  variant='h5'
                  color='primary'
                  style={{ fontWeight: 700, marginBottom: '1rem' }}>
                  Search Results
                </Typography>
                <Grid container spacing={3}>
                  {searchResults.data.map((result) => (
                    <Grid item lg={4}>
                      <SchemeResultCard
                        scheme={result.Scheme}
                        agency={result.Agency}
                        description={result.Description}
                        image={result.Image}
                        link={result.Link}
                        relevance={result.Relevance}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            )}
          </div>
        )}
        <Container maxWidth='lg'>
          <div className='disclaimer'>
            <Typography variant='h6' style={{ fontWeight: 700 }}>
              Please note
            </Typography>
            <Typography variant='body1'>
              Schemes SG is only an <strong>aggregator</strong> of public domain
              listings and crowdsourcing. We are not a VWO, nor any
              assistance-giving body, and we do not guarantee successful
              application of any schemes listed above. Schemes Pal only serves
              to help you make sense of existing schemes out there. The Schemes
              Pal engine is <strong>still being upgraded</strong>.
            </Typography>
          </div>
        </Container>
      </Layout>

      <style jsx>
        {`
          .Pal-root {
            position: relative;
          }

          .feature-description {
            display: flex;
            align-items: center;
            margin: 1.4rem auto;
            text-align: left;
          }

          .tooltip-text {
            cursor: pointer;
            color: ${colors.primary.dark};
          }

          .tooltip-text:hover {
            opacity: 0.8;
          }

          form {
            display: flex;
            flex-direction: column;
            padding: 2rem;
          }

          .search-results-container {
            text-align: center;
            padding: 3rem 0;
            background-color: ${colors.background.light};
          }

          .disclaimer {
            display: inline-block;
            margin: 3rem 0;
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

export async function getServerSideProps(context) {
  const res = await axios.post(
    'https://schemessg-v2.herokuapp.com/schemespredict',
    context.query
  );

  const queryResults = await res.data;

  return {
    props: {
      queryResults,
    },
  };
}

export default Pal;
