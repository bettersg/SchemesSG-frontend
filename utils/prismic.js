import Prismic from '@prismicio/client';
import moment from 'moment';

export const apiEndpoint = 'https://schemes.cdn.prismic.io/api/v2';

export const client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  // Define the url depending on the document type
  if (doc.type === 'updates') {
    return '/updates/' + doc.uid;
  } else if (doc.type === 'blog') {
    return '/blog/' + doc.uid;
  }

  // Default to homepage
  return '/';
};

export const convertDate = (str) => {
  return moment(str).format('MMMM D, YYYY');
};
