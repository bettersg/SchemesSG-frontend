/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { expect } from 'chai';
import {
  checkName,
  checkEmail,
  checkScheme,
  checkOrg,
  checkDescript,
  checkUrl,
  checkKeywords,
  checkUpdate,
  checkFeedback,
  checkPalQuery,
  checkCase,
} from '../utils/dataValidation';

describe('Data Validation:', () => {
  describe('-Name Input Field:', () => {
    it('Catch Null Input.', () => {
      const message = checkName('');
      expect(message).to.equal('Please enter your name.');
    });

    it('-Reject Partial Names', () => {
      const message = checkName('John');
      expect(message).to.equal('Please provide your full name.');
    });

    it('Reject numbers in name', () => {
      const message = checkName('John Tan27');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: %', () => {
      const message = checkName('John Tan%');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: @', () => {
      const message = checkName('John Tan@');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: &', () => {
      const message = checkName('John Tan&');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: ^', () => {
      const message = checkName('John Tan^');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: $', () => {
      const message = checkName('John Tan$');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: #', () => {
      const message = checkName('John Tan#');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: !', () => {
      const message = checkName('John Tan!');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: *', () => {
      const message = checkName('John Tan*');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: (', () => {
      const message = checkName('John Tan(');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: )', () => {
      const message = checkName('John Tan)');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: -', () => {
      const message = checkName('John Tan-');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: _', () => {
      const message = checkName('John Tan_');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: +', () => {
      const message = checkName('John Tan+');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: =', () => {
      const message = checkName('John Tan=');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: ?', () => {
      const message = checkName('John Tan?');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: <', () => {
      const message = checkName('John Tan<');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: >', () => {
      const message = checkName('John Tan>');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: /', () => {
      const message = checkName('John Tan/');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: |', () => {
      const message = checkName('John Tan|');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: [', () => {
      const message = checkName('John Tan[');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: ]', () => {
      const message = checkName('John Tan]');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: {', () => {
      const message = checkName('John Tan{');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: }', () => {
      const message = checkName('John Tan}');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: ,', () => {
      const message = checkName('John Tan,');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: :', () => {
      const message = checkName('John Tan:');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: ;', () => {
      const message = checkName('John Tan;');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });

    it('Reject special character: .', () => {
      const message = checkName('John Tan.');
      expect(message).to.equal('Name entries should not contain any special characters or numbers.');
    });
  });

  describe('Email Input Field', () => {
    it('Catch Null Input', () => {
      const message = checkEmail('');
      expect(message).to.equal('Please enter your email.');
    });

    it('Reject invalid email: Missing @', () => {
      const message = checkEmail('janeAtGoogle.Com');
      expect(message).to.equal('Please enter a valid email.');
    });

    it("Reject TLD starts with '.'", () => {
      const message = checkEmail('jane@.com.google');
      expect(message).to.equal('Please enter a valid email.');
    });

    it("Reject No Char before '@'", () => {
      const message = checkEmail('@.google.com');
      expect(message).to.equal('Please enter a valid email.');
    });

    it('Reject Invalid TLD', () => {
      const message = checkEmail('jane@google.c');
      expect(message).to.equal('Please enter a valid email.');
    });

    it("Reject email starts with '.'", () => {
      const message = checkEmail('.jane@google.com');
      expect(message).to.equal('Please enter a valid email.');
    });

    it('Reject regex in email input', () => {
      const message = checkEmail('jane()*@google.com');
      expect(message).to.equal('Please enter a valid email.');
    });

    it("Reject '..' in email", () => {
      const message = checkEmail('jane..12@google.com');
      expect(message).to.equal('Please enter a valid email.');
    });
  });

  describe('Scheme Name Input Field', () => {
    it('Catch Null Input', () => {
      const message = checkScheme('');
      expect(message).to.equal('Please enter name of the scheme.');
    });

    it('Reject Invalid Scheme Name: only numbers', () => {
      const message = checkScheme('0123456789');
      expect(message).to.equal('Scheme names should not consist of numbers only.');
    });

    it('Reject Invalid Scheme Name: only special char', () => {
      const message = checkScheme('#$!@%()[]{}*');
      expect(message).to.equal('Scheme names should not only consist of special characters.');
    });

    it('Reject Invalid Scheme Name: no alphabets', () => {
      const message = checkScheme('0123456789#$!@%()[]{}`*');
      expect(message).to.equal('Scheme names should contain alphabetical letters or words.');
    });
  });

  describe('Organisation Name Input Field', () => {
    it('Catch Null Input', () => {
      const message = checkOrg('');
      expect(message).to.equal('Please enter name of the organsation.');
    });
  });

  describe('Description Input Field', () => {
    it('Catch Null Input', () => {
      const message = checkDescript('');
      expect(message).to.equal('Please provide a short description of the scheme.');
    });
  });

  describe('URL Input Field', () => {
    it('Catch Null Input', () => {
      const message = checkUrl('');
      expect(message).to.equal('Please enter a url.');
    });

    it('Reject invalid URL: missing domain', () => {
      const message = checkUrl('www.google');
      expect(message).to.equal('Please enter a valid url.');
    });

    it('Reject invalid URL: missing prefix', () => {
      const message = checkUrl('google.com');
      expect(message).to.equal('Please enter a valid url.');
    });

    it('Reject invalid URL: missing domain (2)', () => {
      const message = checkUrl('http://www.google');
      expect(message).to.equal('Please enter a valid url.');
    });

    it('Reject invalid URL: missing url syntax', () => {
      const message = checkUrl('http://google');
      expect(message).to.equal('Please enter a valid url.');
    });

    it('Reject invalid URL: invalid domain name', () => {
      const message = checkUrl('http://www.google#.com');
      expect(message).to.equal('Please enter a valid url.');
    });
  });

  describe('Keyword input Field', () => {
    it('Catch empty field', () => {
      const message = checkKeywords('');
      expect(message).to.equal('Please provide keyword/s for your listing.');
    });
  });

  describe('Updates input Field', () => {
    it('Catch empty field', () => {
      const message = checkUpdate('');
      expect(message).to.equal('Please enter the update information for the listing to update.');
    });
  });

  describe('Feedback Input Field', () => {
    it('Catch empty field', () => {
      const message = checkFeedback('');
      expect(message).to.equal('Please enter your feedback in the feedback input field.');
    });
  });

  describe('SearchPal Input Field', () => {
    it('Catch empty field', () => {
      const message = checkPalQuery('');
      expect(message).to.equal('Please type the help you need into the text input field before hitting the submit button.');
    });
  });

  describe('Case Input Field', () => {
    it('Catch empty field', () => {
      const message = checkCase('');
      expect(message).to.equal('Please fill up the area that requires more research in the text input field before hitting the submit buitton.');
    });
  });
});
