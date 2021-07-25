import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  Hidden,
} from '@material-ui/core';
import { breakpoints } from '../../../constants/design';

const useStyles = makeStyles(() => ({
  mgBtm: {
    marginBottom: '21px',
  },
  input: {
    width: '280px',
    marginRight: 8,
  },
  smInput: {
    width: '100%',
    marginRight: 0,
  },
  smButton: {
    marginTop: '0.4rem',
  },
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
const HomepageHero = () => {
  const sm = useMediaQuery(`(max-width: ${breakpoints.width.sm}px)`);

  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <section className="HomepageHero-root">
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item md={6} xs={12}>
              <Typography
                variant="h2"
                variantMapping={{ h2: 'h1' }}
                color="inherit"
                style={{ fontWeight: 700 }}
                gutterBottom
              >
                Schemes
                {' '}
                <span className="ss-blue">SG</span>
              </Typography>

              <Typography variant="h6" className={classes.mgBtm}>
                One stop directory to quickly search for assistance schemes in
                Singapore, from government agencies, to VWOs, charities,
                self-help groups and more.
              </Typography>
              <form
                className="query-container"
                action="/pal#search-results"
                onSubmit={() => setLoading(true)}
              >
                <TextField
                  className={sm ? classes.smInput : classes.input}
                  id="query-input"
                  label="Enter your query"
                  name="query"
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Button
                  className={sm ? classes.smButton : ''}
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
              <Typography variant="body2" color="textSecondary">
                e.g. "financial assistance for dialysis"
              </Typography>
            </Grid>

            <Hidden smDown>
              <Grid item md={6}>
                <img
                  alt="placeholder"
                  src="/static/images/homepage/undraw_back_to_school_inwc (1).svg"
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </section>

      <style jsx>
        {`
          .HomepageHero-root {
            position: relative;
          }

          .HomepageHero-content {
            padding: 0 5rem;
            text-align: center;
            color: #fff;
          }

          section {
            padding: 3rem 0;
          }

          img {
            width: 100%;
          }

          .query-container {
            display: flex;
            align-items: center;
            margin-bottom: 0.4rem;
          }

          @media only screen and (max-width: ${breakpoints.width.md}px) {
            .HomepageHero-content {
              padding: 0 1rem;
            }

            .query-container {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              margin-bottom: 0.4rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default HomepageHero;
