import React from 'react';
import Prismic from '@prismicio/client';
import { Container, Typography, Menu, MenuItem, Grid } from '@material-ui/core';
import { client } from '../../utils/prismic';
import Layout from '../../components/Layout/Layout';
import PageHero from '../../components/Sections/PageHero';
import UpdatesCard from '../../components/Card/UpdatesCard';
import { colors, updateColors } from '../../constants/design';
import BlogpostCard from '../../components/Card/BlogpostCard';

const options = ['Add listing', 'Edit listing', 'System update'];

const Blog = ({ posts, updates }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Layout title='Blog & Updates | Schemes SG'>
        <PageHero
          title='Schemes Blog & Updates'
          subtitle='Documenting our journey so that other builders can take reference in future :)'
        />
        <section className='blogposts-container'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4}>
                  <BlogpostCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section className='updates-container'>
          <Container maxWidth='lg'>
            <Typography
              variant='h6'
              gutterBottom
              style={{ marginBottom: '2rem' }}>
              Showing{' '}
              <span
                className='updates-select'
                style={{
                  border: `1px solid ${updateColors[options[selectedIndex]]}`,
                  color: updateColors[options[selectedIndex]],
                }}
                onClick={handleClick}>
                {' '}
                {options[selectedIndex]}
              </span>{' '}
              updates
            </Typography>
            <Menu
              id='lock-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
            {updates
              .filter(
                (option) => option.data.category === options[selectedIndex]
              )
              .map((update) => (
                <UpdatesCard update={update} key={update.data.title[0].text} />
              ))}
          </Container>
        </section>
      </Layout>

      <style jsx>
        {`
          .Blog-root {
            position: relative;
          }

          section {
            padding: 3rem 0;
          }

          .blogposts-container {
            background-color: ${colors.background.light};
          }

          .updates-select {
            padding: 0.2rem 0.6rem;
            border: 1px solid red;
            border-radius: 8px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts'),
    {
      orderings: '[my.blog_posts.updated_on desc]',
      pageSize: 99,
    }
  );

  const updates = await client.query(
    Prismic.Predicates.at('document.type', 'updates'),
    {
      orderings: '[my.updates.updated_on desc]',
      pageSize: 99,
    }
  );

  return {
    props: {
      posts: posts.results,
      updates: updates.results,
    },
  };
}
