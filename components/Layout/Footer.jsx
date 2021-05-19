import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  Typography,
  Divider,
  Grid,
  Hidden,
} from '@material-ui/core';
import { colors } from '../../constants/design';
import TextLink from '../Links/TextLink';

const useStyles = makeStyles(() => ({
  footerHeader: {
    fontWeight: 700,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className='footer-root'>
      <AppBar position='static' elevation={0} color='transparent'>
        <Container maxWidth='lg'>
          <div className='footer-top'>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <div className='address'>
                  <Typography variant='body1'>
                    <b>Schemes SG</b> is a product made by someone who cares
                    about the social sector and wants to help those in need
                    access assistance more quickly. We hope you find it helpful!
                  </Typography>
                </div>
              </Grid>
              <Hidden smDown>
                <Grid item md={2} />
              </Hidden>
              <Grid item md={2} xs={4}>
                <Typography variant='h6' className={classes.footerHeader}>
                  Products
                </Typography>
                <div className='footer-links-container'>
                  <div>
                    <TextLink
                      text='Schemes Pal'
                      href='/pal'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                  <div>
                    <TextLink
                      text='Schemes Bank'
                      href='/bank'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                  <div>
                    <TextLink
                      text='Schemes Case'
                      href='/case'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                </div>
              </Grid>
              <Grid item md={2} xs={4}>
                <Typography variant='h6' className={classes.footerHeader}>
                  Info
                </Typography>
                <div className='footer-links-container'>
                  <div>
                    <TextLink
                      text='About'
                      href='/about'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                  <div>
                    <TextLink
                      text='Our team'
                      href='/team'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                  <div>
                    <TextLink
                      text='Updates'
                      href='/updates'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                </div>
              </Grid>
              <Grid item md={2} xs={4}>
                <Typography variant='h6' className={classes.footerHeader}>
                  Contact
                </Typography>
                <div className='footer-links-container'>
                  <div>
                    <TextLink
                      text='Add a listing'
                      href='/listing'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                  <div>
                    <TextLink
                      text='Provide feedback'
                      href='/feedback'
                      color='inherit'
                      variant='body1'
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <div className='footer-btm'>
            <Typography variant='subtitle2'>
              © Copyright 2021, <b>Schemes SG</b>.
            </Typography>
          </div>
        </Container>
      </AppBar>
      <style jsx>
        {`
          .footer-root {
            position: relative;
            background-color: ${colors.primary.dark};
            color: #fff;
          }

          .footer-top,
          .footer-btm {
            padding: 1.5rem 0;
          }

          .icon-w-text {
            display: flex;
            align-items: center;
          }

          .address,
          .footer-links-container > div {
            margin-top: 6px;
          }

          .address {
            height: 100%;
            display: flex;
            align-items: center;
          }

          a:hover {
            opacity: 0.8;
          }

          .footer-links-container {
            margin-top: 0.8rem;
          }

          .social-media {
            display: flex;
          }

          .social-media > a {
            color: inherit;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
