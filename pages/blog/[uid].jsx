import React from 'react';
import Prismic from '@prismicio/client';
import { client, linkResolver } from '../../utils/prismic';
import Layout from '../../components/Layout/Layout';
import PageHero from '../../components/Sections/PageHero';
import { Container } from '@material-ui/core';
import { RichText } from 'prismic-reactjs';

const Blogpost = ({ post }) => {
  return (
    <>
      <Layout
        title={post.data.meta_title ? post.data.meta_title : undefined}
        description={
          post.data.meta_description ? post.data.meta_description : undefined
        }
        ogTitle={
          post.data.open_graph_title ? post.data.open_graph_title : undefined
        }
        ogDescription={
          post.data.open_graph_description
            ? post.data.open_graph_description
            : undefined
        }
        ogImage={
          post.data.open_graph_image.url
            ? post.data.open_graph_image.url
            : undefined
        }
        ogUrl={`https://schemes.sg/blog/${post.uid}`}>
        <PageHero
          title={RichText.asText(post.data.title)}
          subtitle={RichText.asText(post.data.excerpt)}
        />
        <section>
          <Container maxWidth='lg'>
            {RichText.render(post.data.post_content, linkResolver)}
          </Container>
        </section>
      </Layout>

      <style jsx>
        {`
          .Blogpost-root {
            position: relative;
          }

          section {
            padding: 3rem 1rem;
            word-spacing: 3px;
            line-height: 1.8;
          }

        `}
      </style>
    </>
  );
};

export default Blogpost;

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts')
  );
  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await client.getByUID('blog_posts', params.uid);

  return {
    props: {
      post: post,
    },
  };
}
