import React from 'react';
import { RichText } from 'prismic-dom';
import Link from 'next/link';
import { colors } from '../../constants/design';
import { convertDate } from '../../utils/prismic';

const BlogpostCard = ({ post }) => (
  <>
    <div className="BlogpostCard-root">
      <Link href={`/blog/${post.uid}`} passHref>
        <a href={`/blog/${post.uid}`}>
          <img
            src={post.data.featured_image.url}
            alt={post.data.featured_image.alt}
          />
          <div className="BlogpostCard-details">
            <div className="cat-and-date">
              {convertDate(post.data.updated_on)}
            </div>
            <div className="BlogpostCard-title">
              {RichText.asText(post.data.title)}
            </div>

            <p className="BlogpostCard-text">
              {RichText.asText(post.data.excerpt)}
            </p>

          </div>
        </a>
      </Link>
    </div>
    <style jsx>
      {`
          .BlogpostCard-root {
            background-color: #fff;
            margin: 0.5rem 0;
            border-radius: 8px;
          }

          a:visited {
            color: black;
          }

          img {
            width: 100%;
            object-fit: contain;
          }

          .BlogpostCard-details {
            padding: 1.5rem;
          }

          .BlogpostCard-details > a {
            margin-top: 12px;
            text-decoration: none;
            color: ${colors.primary.dark};
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 19px;
          }

          .BlogpostCard-title {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 29px;
            padding: 0.8rem 0 0 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .BlogpostCard-text {
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0;
            padding-bottom: 5rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        `}
    </style>
  </>
);

export default BlogpostCard;
