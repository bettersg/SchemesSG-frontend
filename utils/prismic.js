import Prismic from '@prismicio/client';
import moment from 'moment';

export const apiEndpoint = 'https://schemes.cdn.prismic.io/api/v2';

export const client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  // Define the url depending on the document type
  if (doc.type === 'blog') {
    return '/blog';
  } else if (doc.type === 'blog_posts') { // eslint-disable-line no-else-return
    return '/blog/' + doc.uid; // eslint-disable-line prefer-template
  }

  // Default to homepage
  return '/';
};

export const convertDate = (str) => moment(str).format('MMMM D, YYYY');
