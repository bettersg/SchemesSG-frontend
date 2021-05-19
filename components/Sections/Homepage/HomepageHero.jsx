import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import HeroContainer from '../../Container/HeroContainer';
import { breakpoints } from '../../../constants/design';

const useStyles = makeStyles(() => ({
  mgBtm: {
    marginBottom: '21px',
  },
  input: {
    width: '280px',
    marginRight: 8,
  },
}));
const HomepageHero = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <section className='HomepageHero-root'>
        <HeroContainer blue>
          <Grid container spacing={2} alignItems='center'>
            <Grid item lg={6}>
              <Typography
                variant='h2'
                variantMapping={{ h2: 'h1' }}
                color='inherit'
                style={{ fontWeight: 700 }}
                gutterBottom>
                Schemes <span className='ss-blue'>SG</span>
              </Typography>

              <Typography variant='h6' className={classes.mgBtm}>
                One stop directory to quickly search for assistance schemes in
                Singapore, from government agencies, to VWOs, charities,
                self-help groups and more.
              </Typography>
              <form className='query-container' action='/pal'>
                <TextField
                  className={classes.input}
                  id='query-input'
                  label='Enter your query'
                  name='query'
                  value={value}
                  onChange={handleChange}
                  variant='outlined'
                />
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  disableElevation>
                  <Typography variant='subtitle1'>Search</Typography>
                </Button>
              </form>
              <Typography variant='body2' color='textSecondary'>
                e.g. "financial assistance for dialysis"
              </Typography>
            </Grid>

            <Grid item lg={6}>
              <img
                alt='Image placeholder'
                src='/static/images/homepage/undraw_back_to_school_inwc (1).svg'
              />
            </Grid>
          </Grid>
        </HeroContainer>
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
          }
        `}
      </style>
    </>
  );
};

export default HomepageHero;
