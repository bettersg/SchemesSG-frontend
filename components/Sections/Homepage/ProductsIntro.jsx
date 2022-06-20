/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper,
  Hidden,
} from '@material-ui/core';
import {
  Description,
  Pageview,
} from '@material-ui/icons';
import IconContainer from '../../Container/IconContainer';
import CaseForm from '../../Form/CaseForm';
import { breakpoints } from '../../../constants/design';

const ProductsIntro = () => {
  return (
    <section>
      <section className="ProductsIntro-root">
        <Container maxWidth="lg">

          <div className="product-intro-container">
            <Typography variant="h4" color="primary" gutterBottom>
              <b>Explore our listings</b>
            </Typography>
            <div className="feature-description bank-subtitle">
              <Typography variant="body1">
                Our Schemes Bank collects and refreshes public listings of government, VWO, various charity schemes. Best viewed on Desktop. If using mobile, tap on the main area to activate the inner scrollbar.
              </Typography>
            </div>

            <Hidden xsDown>
              <iframe
                title="HiddenXsDown"
                src="https://datastudio.google.com/embed/reporting/5621beb1-3a1e-486b-9121-66f25382eab0/page/v0CAC"
                frameBorder="0"
              />
            </Hidden>
            <Hidden smUp>
              <iframe
                title="HiddenSmUp"
                src="https://datastudio.google.com/embed/reporting/e9511193-d184-432c-9db7-12061cd74d93/page/0V2DC"
                frameBorder="0"
              />
            </Hidden>
          </div>
        </Container>
      </section>
      <section className="whiteBG">
        <Container maxWidth="lg" style={{ backgroundColor: '#fafafa' }}>
          <div className="product-intro-container">
            <Grid container spacing={4}>
              <Grid
                item
                md={6}
                xs={12}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div className="content">
                  <Typography variant="h4" color="primary" gutterBottom>
                    <b>Ask our volunteers</b>
                  </Typography>
                  <Typography variant="body1">
                    Can't find relevant assistance through the AI or even by manually filtering?
                  </Typography>
                  <div className="feature-description">
                    <IconContainer icon={<Description style={{ width: 20 }} />} />
                    <Typography variant="body1" style={{ marginLeft: 12 }}>
                      Our volunteers can help you to search.
                    </Typography>
                  </div>
                  <div className="feature-description">
                    <IconContainer icon={<Pageview style={{ width: 20 }} />} />
                    <Typography variant="body1" style={{ marginLeft: 12 }}>
                      If it is an unmet social need, we might also conduct further research.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                {/* <Paper elevation={0}> */}
                <CaseForm />
                {/* </Paper> */}
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <style jsx>
        {`
          .ProductsIntro-root {
            position: relative;
            text-align: center;
          }

          .whiteBG {
            position: relative;
            background-color: #fafafa;
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
