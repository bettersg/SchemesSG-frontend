import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Layout from '../components/Layout/Layout';

const Schemespal = ({ data }) => {
  console.log(data);
  return (
    <>
      <Layout title='Schemes SG'>
        <Container maxWidth='lg'>hihi</Container>
      </Layout>

      <style jsx>
        {`
          .Schemespal-root {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.post(
    'https://schemessg-v2.herokuapp.com/schemespredict',
    context.query
  );

  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}

export default Schemespal;
