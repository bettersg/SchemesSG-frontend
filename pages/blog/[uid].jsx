/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import React from 'react';
import Prismic from '@prismicio/client';
import { Container } from '@material-ui/core';
import { RichText } from 'prismic-reactjs';
import { client } from '../../utils/prismic';
import Layout from '../../components/Layout/Layout';
import PageHero from '../../components/Sections/PageHero';
import BlogpostHandler from '../../components/Card/BlogpostHandler';
import DeviceDetect from '../../utils/devicedetect';
import { breakpoints } from '../../constants/design';

// FN to adjust clone of incoming post
const tweakImgUrl = (array, vwPortWidth) => {
  for (let i = 0; i < array.data.post_content.length; i += 1) {
    if (array.data.post_content[i].type === 'image') {
      // get width
      const oriWidth = array.data.post_content[i].dimensions.width;
      // get height
      const oriHeight = array.data.post_content[i].dimensions.height;
      // get aspect ratio (ar) of image (width: height)
      const ar = oriWidth / oriHeight;
      // calculate scaled height based on current
      // viewport width
      const newWidth = vwPortWidth;
      const newHeight = newWidth / ar;

      // replace old dim. with new dim.
      array.data.post_content[i].dimensions.width = newWidth;
      array.data.post_content[i].dimensions.height = newHeight;

      // grab current url
      const oriUrl = array.data.post_content[i].url;
      const newUrl = `${oriUrl}&rect=0,0,${oriWidth.toString()},${oriHeight.toString()}&w=${newWidth.toString()}&h=${newHeight.toString()}`;
      array.data.post_content[i].url = newUrl;
    }
  }
};

const Blogpost = ({ post }) => {
  // grab viewport width before react elements are generated
/*   useEffect(() => {
    const currentWidth = window.innerWidth;
    tweakImgUrl(postClone, currentWidth);
  }, []); */

  console.log('post =', post);
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
        ogUrl={`https://schemes.sg/blog/${post.uid}`}
      >
        <PageHero
          title={RichText.asText(post.data.title)}
          subtitle={RichText.asText(post.data.excerpt)}
        />
        <section>
          <Container maxWidth="lg">
            <BlogpostHandler post={post} />
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

          @media only screen and (min-width: ${breakpoints.width.md}px) {
            
            section {
              padding: 3rem 1rem;
              word-spacing: 3px;
              line-height: 1.8;
              font-size: 120%
            }
          }
        `}
      </style>
    </>
  );
};

export default Blogpost;

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts'),
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
  console.log('Device ReadOut Backend =', DeviceDetect());
  // set all image displays to be 360px in width
  /* tweakImgUrl(post, 360); */
  return {
    props: {
      post,
    },
    // **** Incremental Static Regeneration (ISR)****
    // Next.js allows you to create or update static pages after you've
    // built your site.
    // info: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    // Next.js will attempt to re-generate the page:
    // - when a request comes in
    // - at most once every 5 seonds
    /* revalidate: 5, // in secs   */
  };
}
