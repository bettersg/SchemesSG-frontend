import React from 'react';
import Link from 'next/link';
import {
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  Hidden,
} from '@material-ui/core';
import {
  Description,
  Info,
  Pageview,
  RecordVoiceOver,
} from '@material-ui/icons';
import IconContainer from '../../Container/IconContainer';
import CaseForm from '../../Form/CaseForm';
import { breakpoints } from '../../../constants/design';

const ProductsIntro = () => {
  return (
    <section className='ProductsIntro-root'>
      <Container maxWidth='lg'>
        <div className='product-intro-container'>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <img
                src='/static/images/homepage/undraw_File_searching_re_3evy.svg'
                alt='Search'
                className='illustration'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              style={{ display: 'flex', alignItems: 'center' }}>
              <div className='content'>
                <Typography variant='h4' color='primary' gutterBottom>
                  <b>Schemes Pal</b>
                  <br />
                  your AI referral companion
                </Typography>
                <div className='feature-description'>
                  <IconContainer
                    icon={<RecordVoiceOver style={{ width: 20 }} />}
                  />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    You can tell us about your needs and our AI engine will
                    trawl through our collated listings to search for schemes
                    that could be relevant to you.
                  </Typography>
                </div>
                <div className='feature-description'>
                  <IconContainer icon={<Info style={{ width: 20 }} />} />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    More details on how to use the AI search tool on the Schemes
                    Pal page.
                  </Typography>
                </div>
                <div className='cta-btn'>
                  <Link href='/pal' passHref>
                    <Button
                      href='/pal'
                      variant='contained'
                      color='primary'
                      disableElevation>
                      <Typography variant='subtitle1'>
                        Got to Schemes Pal
                      </Typography>
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className='product-intro-container'>
          <Typography variant='h4' color='primary' gutterBottom>
            The complete <b>Schemes Bank</b>
          </Typography>
          <div className='feature-description bank-subtitle'>
            <Typography variant='body1'>
              We've consolidated public listings of government, VWO, self-help group schemes and made them filterable. We constantly update the list. Best viewed on Desktop. If you're on mobile tap on the Bank's main area to activate the inner scrollbar.
            </Typography>
          </div>

          <Hidden xsDown>
            <iframe
              src='https://datastudio.google.com/embed/reporting/5621beb1-3a1e-486b-9121-66f25382eab0/page/v0CAC'
              frameBorder='0'
            />
          </Hidden>
          <Hidden smUp>
            <iframe src='https://datastudio.google.com/embed/reporting/e9511193-d184-432c-9db7-12061cd74d93/page/0V2DC' />
          </Hidden>
        </div>

        <div className='product-intro-container'>
          <Grid container spacing={4}>
            <Grid
              item
              md={6}
              xs={12}
              style={{ display: 'flex', alignItems: 'center' }}>
              <div className='content'>
                <Typography variant='h4' color='primary' gutterBottom>
                  <b>Schemes Case</b>
                  <br />
                  Engage our volunteers
                </Typography>
                <Typography variant='body1'>
                  Can't find anything that meets your needs using the AI or by manually filtering?
                </Typography>
                <div className='feature-description'>
                  <IconContainer icon={<Description style={{ width: 20 }} />} />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    We can help with further research to assist you.
                  </Typography>
                </div>
                <div className='feature-description'>
                  <IconContainer icon={<Pageview style={{ width: 20 }} />} />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    If it is a new trend or unmet social need, we might also write to shed light on it.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper elevation={3}>
                <CaseForm />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      <style jsx>
        {`
          .ProductsIntro-root {
            position: relative;
            text-align: center;
          }

          .product-intro-container {
            padding: 3rem 0;
          }

          .illustration {
            height: 350px;
            margin: 0 auto;
          }

          .content {
            text-align: left;
          }

          .feature-description {
            display: flex;
            align-items: center;
            margin: 1rem auto;
            text-align: left;
          }

          .bank-subtitle {
            margin-bottom: 2rem;
          }

          .cta-btn {
            text-align: center;
          }

          iframe {
            width: 100%;
            height: 40vw;
          }

          @media only screen and (max-width: ${breakpoints.width.sm}px) {
            iframe {
              height: 150vw;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProductsIntro;
