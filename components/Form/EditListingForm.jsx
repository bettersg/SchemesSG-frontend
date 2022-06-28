/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
// import axios from 'axios';
import {
  Typography, Button, TextField, Snackbar,
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
  checkUpdate,
} from '../../utils/dataValidation';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// FN: set styles for CircularProgress indicator inside EditListing button
const useStyles = makeStyles(() => ({
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const EditListingForm = () => {
  // set state var. for form input
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Scheme: '',
    Update: '',
  });
  // set state var. for SnackVar open/close state
  const [open, setOpen] = useState(false);
  // set state var. for request to track return status for SnackBar Alert
  const [success, setSuccess] = useState(true);
  // set state var. for CSS Spinner, for EditListing submit Button
  const [loading, setLoading] = useState(false);

  // DV: set stateVariable for counting correct inputs
  const [count, setCount] = useState(0);
  // DV: statevariable for checked result object of inputs
  const [outcomesArr, setOutcomesArr] = useState([]);

  // create variable to useStyles to set makeStyles
  const classes = useStyles();

  // useRefs for textInput value control
  const nameRef = useRef();
  const emailRef = useRef();
  const schemeRef = useRef();
  const updateRef = useRef();

  // Fn for emptying Text Input fields upon successful submission
  const clearInputs = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    schemeRef.current.value = '';
    updateRef.current.value = '';
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
      update: checkUpdate(form.Update),
    };
    setOutcomesArr(Object.values(checkedOutcomes));
    console.log('outcomesArr =', outcomesArr);
    setCount(0);
    for (let i = 0; i < outcomesArr.length; i += 1) {
      if (outcomesArr[i] === 'PASS') {
        setCount((count) => count += 1);
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setInputs();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setInputs();
    if (count === 4) {
      console.log(count);
      setLoading(true);
      const scriptURLedit = 'https://script.google.com/macros/s/AKfycbyXWqdWuzjOgOyiF46jY_LuGk9u0dzDpFnBgWSvQoGu2IBg4Q8/exec';

      fetch(scriptURLedit, {
        method: 'POST',
        body: createFormData(form),
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
    } else if (count < 4) {
      setCount(0);
      console.log('else Counted =', count);
    }
  };
  return (
    <>
      <form className="EditListingForm-root">
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
          Name of Scheme to Edit
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
          Updated name/description/organisation info of the scheme
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkUpdate(form.Update) !== 'PASS'}
          helperText={(checkUpdate(form.Update) === 'PASS') ? '' : checkUpdate(form.Update)}
          placeholder="e.g. Original listing mentions that this scheme provides X. Actually it provides Y instead etc."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          name="Update"
          inputRef={updateRef}
        />
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
            {loading ? <CircularProgress style={{ height: 20, width: 20 }} color="#fff" /> : 'Edit Listing'}
          </Typography>
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
          {success
            ? 'Edited listing!'
            : 'Apologies! An error occur during submission'}
        </Alert>
      </Snackbar>
      <style jsx>
        {`
          .EditListingForm-root {
            width: 100%;
            padding: 0 2rem 2rem;
            text-align: center;
          }

          @media only screen and (max-width: ${breakpoints.width.sm}px) {
            .EditListingForm-root {
              padding: 0 0 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default EditListingForm;
