/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
// import axios from 'axios';
import {
  Typography, Button, TextField, Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createFormData } from '../../utils';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// Style for Circular Progress Indicator inside the Submit Button
const useStyles = makeStyles(() => ({
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CaseForm = () => {
  // setState for form input
  const [form, setForm] = useState({ Name: '', Email: '', Case: '' });
  // open, setOpen: for SnackBar open/close state
  const [open, setOpen] = useState(false);
  // setState for request to track return status for SnackBar Alert
  const [success, setSuccess] = useState(true);
  // setState for CSS spinner, for submit button
  const [loading, setLoading] = useState(false);

  // useRefs for textInput value control
  const nameRef = useRef();
  const emailRef = useRef();
  const caseRef = useRef();

  // Fn for emptying Text Input fields upon successful submission
  const clearInputs = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    caseRef.current.value = '';
  };

  // Fn for shutting off Snackbar when user selects close
  const handleClose = () => {
    // when user clicks to close SnackBar, change
    // open state to false
    setOpen(false);
    clearInputs();
  };

  // create variable to call useStyles to set makeStyles
  const classes = useStyles();

  // Fn for handling text input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURLschemescase = 'https://script.google.com/macros/s/AKfycbyqGHt2p224ebUahB6XDOgxtru9fvXm3YonCKcPus--p8e57TFB/exec';

    fetch(scriptURLschemescase, {
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
  };
  return (
    <>
      <form className="CaseForm-root">
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Name
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          placeholder="e.g. John Tan"
          style={{ marginTop: 5, marginBottom: 15 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          name="Name"
          inputRef={nameRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Email (optional, if you want us to reach you)
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          type="email"
          placeholder="e.g. abc@123.com"
          fullWidth
          style={{ marginTop: 5, marginBottom: 15 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          name="Email"
          inputRef={emailRef}
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          What area requires more research?
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          placeholder="e.g. I can't find schemes for caregivers with chronic conditions etc..."
          multiline
          rows={3}
          fullWidth
          style={{ marginTop: 5, marginBottom: 15 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          name="Case"
          inputRef={caseRef}
        />
        <Button
          type="onClick"
          variant="contained"
          color="primary"
          disableElevation
          disabled={loading} /* if loading=True, button is greyed out and not selectable */
          onClick={handleSubmit}
        >
          <Typography variant="subtitle1" className={classes.btnText}>
            {loading ? <CircularProgress style={{ height: 20, width: 20 }} /> : 'Submit'}
          </Typography>
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
          {success
            ? 'We have received your message!'
            : 'Apologies! An error occurred during submission'}
        </Alert>
      </Snackbar>
      <style jsx>
        {`
          .CaseForm-root {
            padding: 1rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default CaseForm;
