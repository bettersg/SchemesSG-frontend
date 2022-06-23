/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import React from 'react';
/* import { RichText } from 'prismic-reactjs'; */
import { v4 as uuidv4 } from 'uuid';
/* import { linkResolver } from '../../utils/prismic'; */
import { breakpoints } from '../../constants/design';

const BlogpostHandler = ({ post }) => {
  return (
    <>
      {post.data.post_content.map((object, i) => {
        if (object.type === 'image') { return <img src={`${object.url}`} alt={`img${i}`} key={uuidv4()} />; }
        return (
          <p key={uuidv4()}>
            <section>
              {object.text}
            </section>
          </p>
        );
      })}
      <style jsx>
        {`
          img {
            width: 90vw;
            height: auto;
          }


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

export default BlogpostHandler;
