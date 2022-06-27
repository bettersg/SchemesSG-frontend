/* eslint-disable brace-style */
/* eslint-disable no-useless-escape */

export const checkName = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter your name.';
  }
  // ensure user fills up full name
  else if (inputString.trim().split(' ').length < 2) {
    output = 'Please provide your full name.';
  }
  // name contains only alpha characters
  else if (/^[A-Za-z ]+$/.test(inputString) !== true) {
    output = 'Name entries should not contain any special characters or numbers.';
  }
  return output;
};

export const checkEmail = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter your email.';
  }
  // check for valid email address
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputString) === false) {
    output = 'Please enter a valid email.';
  }
  return output;
};

export const checkScheme = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter name of the scheme.';
  }
  // check for invalid scheme number
  //  1)Contains only numbers
  else if (isNaN(Number(inputString)) !== true) { // eslint-disable-line no-restricted-globals
    output = 'Scheme names should not consist of numbers only.';
  }
  //  2) Contains only special chars
  else if (/^[^a-zA-Z0-9]+$/.test(inputString) === true) {
    output = 'Scheme names should not only consist of special characters.';
  }
  //  3) Contains only special chars & numbers
  else if (/^[^a-zA-Z]+$/.test(inputString) === true) {
    output = 'Scheme names should contain alphabetical letters or words.';
  }
  return output;
};

export const checkOrg = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter name of the organsation.';
  }
  return output;
};

export const checkDescript = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please provide a short description of the scheme.';
  }
  return output;
};

export const checkUrl = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter a url.';
  }
  // Check for valid URL:
  else if (/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(inputString) !== true) {
    output = 'Please enter a valid url.';
  }
  return output;
};

export const checkKeywords = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please provide keyword/s for your listing.';
  }
  return output;
};

export const checkUpdate = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter the update information for the listing to update.';
  }
  return output;
};

export const checkFeedback = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please enter your feedback in the feedback input field.';
  }
  return output;
};

export const checkPalQuery = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please type the help you need into the text input field before hitting the submit button.';
  }
  return output;
};

export const checkCase = (inputString) => {
  let output;
  // check for empty string
  if (inputString === '') {
    output = 'Please fill up the area that requires more research in the text input field before hitting the submit buitton.';
  }
  return output;
};
