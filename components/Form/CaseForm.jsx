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
import {
  checkName,
  checkEmail,
  checkCase,
} from '../../utils/dataValidation';

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
  // set state variable for form input
  const [form, setForm] = useState({ Name: '', Email: '', Case: '' });
  // open, setOpen: for SnackBar open/close state
  const [open, setOpen] = useState(false);
  // set state var for request to track return status for SnackBar Alert
  const [success, setSuccess] = useState(true);
  // set state var for CSS spinner, for submit button
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
  const caseRef = useRef();

  // Fn for emptying Text Input fields upon successful submission
  const clearInputs = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    caseRef.current.value = '';
    setForm({ Name: '', Email: '', Case: '' });
  };

  // Fn for shutting off Snackbar display
  const handleClose = () => {
    // when user clicks to close SnackBar, change
    // open state to false
    setOpen(false);
    clearInputs();
  };

  // FN: set CheckedOutcomes
  const setInputs = () => {
    const checkedOutcomes = {
      name: checkName(form.Name),
      email: checkEmail(form.Email),
      scheme: checkCase(form.Case),
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

  // Fn for handling text input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setInputs();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setInputs();
    if (count === 3) {
      console.log(count);
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
    } else if (count < 3) {
      setCount(0);
      console.log('else Counted =', count);
    }
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
          helperText={(checkName(form.Name) === 'PASS') ? '' : checkName(form.Name)}
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
          helperText={(checkEmail(form.Email) === 'PASS') ? '' : checkEmail(form.Email)}
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
          helperText={(checkCase(form.Case) === 'PASS') ? '' : checkCase(form.Case)}
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
          type="button"
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
