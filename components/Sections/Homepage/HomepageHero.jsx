import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import IconContainer from '../../Container/IconContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Info, RecordVoiceOver, Search } from '@material-ui/icons';
import InputAdornment from "@material-ui/core/InputAdornment";

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
                Search for assistance schemes in
                Singapore easily.
              </Typography>
              <form
                className="query-container"
                action="/pal#search-results"
                onSubmit={() => setLoading(true)}
              >
                <TextField
                  className={sm ? classes.smInput : classes.input}
                  id="query-input"
                  label=""
                  placeholder="Dialysis patient need financial assistance and food after being retrenched due to COVID 19"
                  name="query"
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  style={{ width: 450}}
                  multiline
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Button
                          className={sm ? classes.smButton : ''}
                          type="submit"
                          variant="contained"
                          color="primary"
                          disableElevation
                          disabled={loading}
                        >
                          <Typography variant="subtitle1" className={classes.btnText}>
                            {loading ? <CircularProgress style={{ height: 32, width: 32 }} /> : <IconContainer icon={<Search style={{ width: 20 }} />} />}
                          </Typography>
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />

              </form>


              <div className='feature-description'>
                <IconContainer
                  icon={<RecordVoiceOver style={{ width: 20 }} />}
                />
                <Typography variant='body1' style={{ marginLeft: 12 }}>
                  Tell us the help you need.
                </Typography>
              </div>
              <div className='feature-description'>
                <IconContainer icon={<Info style={{ width: 20 }} />} />
                <Typography variant='body1' style={{ marginLeft: 12 }}>
                  Be specific (see e.g. above). Don't give identifiable info.
                </Typography>
              </div>


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
            background-color: #fafafa
          }

          .feature-description {
            display: flex;
            align-items: center;
            margin: 1rem auto;
            text-align: left;
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
