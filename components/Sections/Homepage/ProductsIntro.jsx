import React from 'react';
import axios from 'axios';
import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Paper,
} from '@material-ui/core';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import IconContainer from '../../Container/IconContainer';
import { Description, Info, Pageview } from '@material-ui/icons';
import Link from 'next/link';
const ProductsIntro = () => {
  const [form, setForm] = React.useState({ Name: '', Email: '', Case: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'https://script.google.com/macros/s/AKfycbyqGHt2p224ebUahB6XDOgxtru9fvXm3YonCKcPus--p8e57TFB/exec',
      form
    );

    const data = await res.data;
    console.log(data);
  };
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
                  <b>[Beta] Schemes Pal</b>
                  <br />
                  your AI referral companion
                </Typography>
                <div className='feature-description'>
                  <IconContainer icon={<RecordVoiceOverIcon />} />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    You can tell us about your needs and our AI engine will
                    trawl through our collated listings to search for schemes
                    that could be relevant to you.
                  </Typography>
                </div>
                <div className='feature-description'>
                  <IconContainer icon={<Info />} />
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
              We've consolidated public-domain listings of schemes provided by
              government, VWOs, self-help groups and other assistance sources,
              and made them filterable so that you can quickly zero in on your
              needs. This list is constantly being updated. Currently this is
              best viewed on Desktop (if you are on mobile, tap once on the main
              area of the Bank to activate the inner scrollbar and scroll to
              look through the listings).
            </Typography>
          </div>
          <iframe
            src='https://datastudio.google.com/embed/reporting/5621beb1-3a1e-486b-9121-66f25382eab0/page/v0CAC'
            frameborder='0'
          />
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
                  <b>[Beta] Schemes Case</b>
                  <br />
                  Engage one of our volunteers
                </Typography>
                <Typography variant='body1'>
                  Can't find anything you need using Schemes Pal? Trawled
                  through Schemes Bank and no schemes exist for your needs?
                </Typography>
                <div className='feature-description'>
                  <IconContainer icon={<Description />} />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    There might be a case for further research to assist you and
                    also to update our Schemes Bank
                  </Typography>
                </div>
                <div className='feature-description'>
                  <IconContainer icon={<Pageview />} />
                  <Typography variant='body1' style={{ marginLeft: 12 }}>
                    Drop us a note and our volunteers will help to search. If it
                    is a new trend or area, we might also do more research to
                    shed light on it.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper elevation={3}>
                <form className='cases-container' onSubmit={handleSubmit}>
                  <TextField
                    id='outlined-full-width'
                    onChange={handleChange}
                    label='Name'
                    placeholder='e.g. John Tan'
                    fullWidth
                    margin='normal'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                    required
                    name='Name'
                  />
                  <TextField
                    id='outlined-full-width'
                    onChange={handleChange}
                    label='Email (optional, if you want us to reply you)'
                    placeholder='e.g. abc@123.com'
                    fullWidth
                    margin='normal'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                    name='Email'
                  />
                  <TextField
                    id='outlined-full-width'
                    onChange={handleChange}
                    label='What area of need do you think needs more research in?'
                    placeholder="e.g. I can't find schemes for caregivers with chronic conditions etc..."
                    multiline
                    rows={3}
                    fullWidth
                    margin='normal'
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='outlined'
                    required
                    name='Case'
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    style={{ marginTop: 16 }}
                    disableElevation>
                    <Typography variant='subtitle1'>Submit</Typography>
                  </Button>
                </form>
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
            height: 620px;
          }

          .cases-container {
            padding: 2rem;
          }
        `}
      </style>
    </section>
  );
};

export default ProductsIntro;
