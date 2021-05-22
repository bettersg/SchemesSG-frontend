import React from 'react';
import Prismic from '@prismicio/client';
import { Container, Typography, Menu, MenuItem } from '@material-ui/core';
import { client } from '../../utils/prismic';
import Layout from '../../components/Layout/Layout';
import PageHero from '../../components/Sections/PageHero';
import UpdatesCard from '../../components/Card/UpdatesCard';
import { updateColors } from '../../constants/design';

const options = ['Add listing', 'Edit listing', 'System update'];

const Blog = ({ updates }) => {
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
        <section className='Blog-content'>
          <Container maxWidth='lg'>
            <div className='updates-container'>
              <Typography variant='h6' gutterBottom>
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
                  <UpdatesCard update={update} />
                ))}
            </div>
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

          .updates-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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

export async function getServerSideProps() {
  const updates = await client.query(
    Prismic.Predicates.at('document.type', 'updates'),
    {
      orderings: '[my.updates.updated_on desc]',
      pageSize: 99,
    }
  );

  return {
    props: {
      updates: updates.results,
    },
  };
}
