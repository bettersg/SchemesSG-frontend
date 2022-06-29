/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
// import axios from 'axios';
import {
  Typography,
  Button,
  TextField,
  Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { breakpoints } from '../../constants/design';
import { createFormData } from '../../utils';
import {
  checkName,
  checkEmail,
  checkScheme,
  checkOrg,
  checkDescript,
  checkUrl,
  checkKeywords,
} from '../../utils/dataValidation';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// FN: style for CircularProgress indicator inside AddListing button
const useStyles = makeStyles(() => ({
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AddListingForm = () => {
  // set state var. for form input
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Scheme: '',
    Agency: '',
    Description: '',
    URL: '',
    Tags: '',
  });
  // set state var. for SnackBar open/close state
  const [open, setOpen] = useState(false);
  // set state var. for request to track return status for SnackBar Alert
  const [success, setSuccess] = useState(true);
  // set state var for CSS spinner, for AddListing submit button
  const [loading, setLoading] = useState(false);

  // DV: set stateVariable for counting correct inputs
  const [count, setCount] = useState(0);
  // DV: statevariable for checked result object of inputs
  const [outcomesArr, setOutcomesArr] = useState([]);

  // create variable to call useStyles to set makeStyles
  const classes = useStyles();

  // useRefs for textInput value control
  const nameRef = useRef();
  const emailRef = useRef();
  const schemeRef = useRef();
  const agencyRef = useRef();
  const descriptRef = useRef();
  const urlRef = useRef();
  const tagsRef = useRef();

  // Fn for emptying Text Input fields upon successful submission
  const clearInputs = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    schemeRef.current.value = '';
    agencyRef.current.value = '';
    descriptRef.current.value = '';
    urlRef.current.value = '';
    tagsRef.current.value = '';
    setForm({});
  };

  // Fn for shutting off Snackbar
  const handleClose = () => {
    setOpen(false);
  };

  // FN: set CheckedOutcomes
  const setInputs = () => {
    const checkedOutcomes = {
      name: checkName(form.Name),
      email: checkEmail(form.Email),
      scheme: checkScheme(form.Scheme),
      agency: checkOrg(form.Agency),
      description: checkDescript(form.Description),
      URL: checkUrl(form.URL),
      Keywords: checkKeywords(form.Tags),
    };
    setOutcomesArr(Object.values(checkedOutcomes));
    console.log('outcomesArr =', outcomesArr);
    setCount(0);
    for (let i = 0; i < outcomesArr.length; i += 1) {
      if (outcomesArr[i] === 'PASS') {
        setCount(count => count += 1);
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setInputs();
  };

  const handleSubmit = async (e) => {
    await setInputs();
    if (count === 7) {
      e.preventDefault();
      setLoading(true);
      console.log('No. of valid input fields =', count);
      const scriptURLadd = 'https://script.google.com/macros/s/AKfycbzc8abpu0k4c9zs3ELG4aRY0HkjZksEIMQbam2sA31C4kqFzrwU/exec';

      fetch(scriptURLadd, {
        method: 'POST',
        body: createFormData(form),
        mode: 'no-cors',
      })
        .then((response) => {
          if (response.status === 200) {
            clearInputs();
            setOpen(true);
            setSuccess(true);
            setLoading(false);
          } else {
            setOpen(true);
            setSuccess(false);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error!', error.message);
          setOpen(true);
          setSuccess(false);
          setLoading(false);
        });
    } else if (count < 7) {
      setCount(0);
      console.log('else Counted =', count);
    }
  };
  return (
    <>
      <form className="AddListingForm-root">
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Name
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkName(form.Name) !== 'PASS'}
          helperText={(checkName(form.Name) === 'PASS') ? '' : checkName(form.Name)}
          placeholder="e.g. John Tan"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant="outlined"
          required
          name="Name"
          inputRef={nameRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Email (optional, if you want us to reply you)
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkEmail(form.Email) !== 'PASS'}
          helperText={(checkEmail(form.Email) === 'PASS') ? '' : checkEmail(form.Email)}
          type="email"
          placeholder="e.g. abc@123.com"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant="outlined"
          name="Email"
          inputRef={emailRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Scheme Name
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkScheme(form.Scheme) !== 'PASS'}
          helperText={(checkScheme(form.Scheme) === 'PASS') ? '' : checkScheme(form.Scheme)}
          placeholder="e.g. ABC Financial Assistance"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant="outlined"
          required
          name="Scheme"
          inputRef={schemeRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Providing Agency
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          placeholder="e.g. ABC Charity Singapore"
          error={checkScheme(form.Agency) !== 'PASS'}
          helperText={(checkScheme(form.Agency) === 'PASS') ? '' : checkScheme(form.Agency)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          style={{ marginTop: 5, marginBottom: 15 }}
          required
          name="Agency"
          inputRef={agencyRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Description of the scheme
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkDescript(form.Description) !== 'PASS'}
          helperText={(checkDescript(form.Description) === 'PASS') ? '' : checkDescript(form.Description)}
          placeholder="e.g. Financial assistance for low income, etc."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          style={{ marginTop: 5, marginBottom: 15 }}
          required
          name="Description"
          inputRef={descriptRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          URL
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkUrl(form.URL) !== 'PASS'}
          helperText={(checkUrl(form.URL) === 'PASS') ? '' : checkUrl(form.URL)}
          placeholder="e.g. http://www.abccharity.com.sg"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant="outlined"
          required
          name="URL"
          inputRef={urlRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Help us add a few keywords so that we can organise our data systems
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkKeywords(form.Tags) !== 'PASS'}
          helperText={(checkKeywords(form.Tags) === 'PASS') ? '' : checkKeywords(form.Tags)}
          placeholder="e.g. Low Income, Healthcare"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant="outlined"
          required
          name="Tags"
          inputRef={tagsRef}
        />
        <span>
          <Button
            type="button"
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
            disableElevation
            disabled={loading}
            onClick={(e) => { handleSubmit(e); }}
          >
            <Typography variant="subtitle1" className={classes.btnText}>
              {loading ? <CircularProgress style={{ height: 20, width: 20 }} color="#fff" /> : 'Add Listing'}
            </Typography>
          </Button>
        </span>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
          {success
            ? 'Added listing!'
            : 'Apologies! An error occur during submission'}
        </Alert>
      </Snackbar>
      <style jsx>
        {`
          .AddListingForm-root {
            width: 100%;
            padding: 0 2rem 2rem;
            text-align: center;
          }

          @media only screen and (max-width: ${breakpoints.width.sm}px) {
            .AddListingForm-root {
              padding: 0 0 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default AddListingForm;
