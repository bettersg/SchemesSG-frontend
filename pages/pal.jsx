/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import {
  Container,
  Typography,
  Tooltip,
  Grid,
  TextField,
  Button,
  Paper,
  Slider,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import IconContainer from '../components/Container/IconContainer';
import { colors } from '../constants/design';
import SchemeResultCard from '../components/Card/SchemeResultCard';
import { createFormData } from '../utils';

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

const useStyles = makeStyles(() => ({
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const marks = [
  {
    value: 0,
    label: 'Very Lenient',
  },
  {
    value: 100,
    label: 'Very strict',
  },
];

const Pal = () => {
  const { query } = useRouter();
  const classes = useStyles();
  const [searchResults, setSearchResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [relevanceScore, setRelevanceScore] = React.useState(20);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (e, queryParams) => {
    if (e) e.preventDefault();

    const searchValue = queryParams || value;

    setLoading(true);
    const res = await axios.post(
      'https://schemes.sg/schemespredict',
      { query: searchValue, relevance: relevanceScore },
    );

    const data = await res.data;

    setSearchResults(data);
    setLoading(false);

    const scriptURLpalquery = 'https://script.google.com/macros/s/AKfycbwgKnPhUBHnlGJ3YudlSeaMfjUe9mPaI-N3Sbz9uar52oDDFf0/exec';

    fetch(scriptURLpalquery, {
      method: 'POST',
      body: createFormData({ Query: searchValue, relevance: relevanceScore }),
    })
      .then((response) => console.log('Done!', response.status))
      .catch((error) => console.error('Error!', error.message));

    const url = new URL(window.location);
    url.searchParams.set('query', searchValue);
    url.searchParams.set('relevance', relevanceScore);
    window.history.pushState({}, '', url);
  };

  React.useEffect(async () => {
    if (query.query) {
      setValue(query.query);
      handleSubmit(null, query.query);
      // setLoading(true);
      // const scriptURLpalquery = 'https://script.google.com/macros/s/AKfycbwgKnPhUBHnlGJ3YudlSeaMfjUe9mPaI-N3Sbz9uar52oDDFf0/exec';

      // fetch(scriptURLpalquery, {
      //   method: 'POST',
      //   body: createFormData({ Query: query, relevance: relevanceScore }),
      // })
      //   .then((response) => console.log('Done!', response))
      //   .catch((error) => console.error('Error!', error.message))
      //   .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <>
      <Layout title="Schemes Pal |Schemes SG">
        <PageHero
          title="Schemes Pal"
          subtitle="AI-powered search to retrieve relevant assistance listings."
        />
        <Container
          maxWidth="lg"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                How to use
              </Typography>
              <div className="feature-description">

                <IconContainer
                  icon={<RecordVoiceOverIcon style={{ width: 20 }} />}
                />
                <Typography variant="body1" style={{ marginLeft: 12 }}>
                  Tell us the help you need. Be specific (see the example in the box).
                </Typography>
              </div>

              <div className="feature-description">
                <IconContainer icon={<InfoIcon style={{ width: 20 }} />} />
                <Typography variant="body1" style={{ marginLeft: 12 }}>
                  <strong>DO NOT</strong>
                  {' '}
                  give identifiable info like NRIC or
                  name. The AI does not need it.
                  {' '}
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                    <LightTooltip
                      title="We record the query text to train the AI model and improve its accuracy to serve you better. We are unable to identify the individuals who entered the query or who it refers to. You can help us ensure an even greater level of security by not providing names or identifiable detail."
                      placement="right"
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                    >
                      <span
                        className="tooltip-text"
                        onClick={handleTooltipOpen}
                      >
                        Important: please read this.
                      </span>
                    </LightTooltip>
                  </ClickAwayListener>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3}>
                <form className="query-container" onSubmit={handleSubmit}>
                  <Typography variant="body1" style={{ textAlign: 'left' }}>
                    Tell us about your needs:
                  </Typography>
                  <TextField
                    id="outlined-full-width"
                    label=""
                    rows={5}
                    multiline
                    name="query"
                    placeholder="Example of a good search: Dialysis patient, need job, food and financial support after being retrenched."
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    style={{ marginTop: 5, marginBottom: 8 }}
                    fullWidth
                  />
                  <div className="slider-container">
                    <Typography id="discrete-slider-custom" gutterBottom>
                      Show me schemes above relevance score of:
                      {' '}
                      <strong>{`${relevanceScore}`}</strong>
                    </Typography>
                    <Slider
                      value={relevanceScore}
                      onChange={(e, newValue) => {
                        setRelevanceScore(newValue);
                      }}
                      aria-labelledby="discrete-slider-custom"
                      valueLabelDisplay="auto"
                      marks={marks}
                      style={{ marginBottom: 10 }}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disableElevation
                    disabled={loading}
                  >
                    <Typography variant="subtitle1" className={classes.btnText}>
                      {loading ? <CircularProgress style={{ height: 20, width: 20 }} /> : 'Search'}
                    </Typography>
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {!!searchResults && searchResults !== 'nil' && searchResults.data && (
        <div className="search-results-container" id="search-results">
          {loading ? (
            <Typography
              variant="p"
              color="primary"
            >
              Loading your search results
            </Typography>
          ) : (
            searchResults.data.length > 0 ? (
              <Container maxWidth="lg">
                <Typography
                  variant="h5"
                  color="primary"
                  style={{ fontWeight: 700, marginBottom: '1rem' }}
                >
                  Search Results
                </Typography>
                <Grid container spacing={3}>
                  {searchResults.data.map((result) => (
                    <Grid item xs={12} sm={6} lg={4} key={result.Scheme}>
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
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  disableElevation
                  onClick={() => window.scrollTo({ top: 0 })}
                  style={{ marginTop: '2rem' }}
                >
                  <Typography variant="subtitle1">Back to Top</Typography>
                </Button>
                <div className="buttons-container">
                  <Link href="/bank" passHref>
                    <Button
                      href="/bank"
                      type="button"
                      variant="outlined"
                      style={{ backgroundColor: '#fff', color: '#f25767', borderColor: '#f25767' }}
                      disableElevation
                    >
                      <Typography variant="subtitle1">
                        Searches not matching your needs? You can
                        {' '}
                        <strong>explore our repository manually</strong>
                      </Typography>
                    </Button>
                  </Link>
                  <Link href="/case" passHref>
                    <Button
                      href="/case"
                      type="button"
                      variant="outlined"
                      style={{
                        backgroundColor: '#fff', color: '#f25767', borderColor: '#f25767', marginTop: '1rem',
                      }}
                      disableElevation
                    >
                      <Typography variant="subtitle1">
                        Or you can
                        {' '}
                        <strong>engage our volunteers</strong>
                      </Typography>
                    </Button>
                  </Link>
                </div>

              </Container>
            ) : (
              <Typography
                variant="h5"
                color="primary"
                style={{ fontWeight: 700 }}
              >
                No results matching your search.
              </Typography>
            )
          )}
        </div>
        )}
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
            padding: 1.1rem;
            text-align: center;
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

          .slider-container {
            padding: 1rem 40px;
          }

          .buttons-container {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 20%;
          }
        `}
      </style>
    </>
  );
};

// export async function getServerSideProps(context) {
//   const queryWithRelevance = {...context.query, relevance: 20 };
//   const res = await axios.post('https://schemessg-v2.herokuapp.com/schemespredict', queryWithRelevance);

//   const queryResults = await res.data;
//   return {
//     props: {
//       queryResults,
//       query: context.query.query ? {Query: queryWithRelevance } : null,
//     },
//   };
// }

export default Pal;
