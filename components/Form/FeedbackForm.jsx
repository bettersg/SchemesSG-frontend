/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  TextField,
  Snackbar,
  Select,
  FormControl,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { breakpoints } from '../../constants/design';
import { createFormData } from '../../utils';
import {
  checkName,
  checkFeedback,
} from '../../utils/dataValidation';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FeedbackForm = () => {
  // set state var. for form input
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    NPS: '5',
    Feedback: '',
  });
  // set state var. for SnackVar open/close state
  const [open, setOpen] = useState(false);
  // set state var. for request to track return status for SnackBar Alert
  const [success, setSuccess] = useState(true);
  // set state var. for CSS spinnger for Feedback submit button
  const [loading, setLoading] = useState(false);

  // DV: set stateVariable for counting correct inputs
  const [count, setCount] = useState(0);
  // DV: statevariable for checked result object of inputs
  const [outcomesArr, setOutcomesArr] = useState([]);

  // create variable to useStyles to makeStyles
  const classes = useStyles();

  // useRefs for textInput value control
  const nameRef = useRef();
  const emailRef = useRef();
  const feedbackRef = useRef();

  // Fn for emptying Text Input fields upon successful submission
  const clearInputs = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    feedbackRef.current.value = '';
    setForm({ NPS: '5' });
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
      feedback: checkFeedback(form.Feedback),
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
    await setInputs();
    if (count === 3) {
      e.preventDefault();
      setLoading(true);
      console.log('Number of valid input fields =', count);
      const scriptURLfeedback = 'https://script.google.com/macros/s/AKfycbwN3CXj_MHbWqSU_HuoIMUbjrPFZc0WKKs6d0HLiW2qXZ0ih_5G/exec';

      fetch(scriptURLfeedback, {
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
    } else if (count < 3) {
      setCount(0);
      console.log('else Counted =', count);
    }
  };
  return (
    <>
      <form className="FeedbackForm-root">
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
          variant="outlined"
          style={{ marginTop: 5, marginBottom: 15 }}
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
          From 1 (least likely) to 10 (most likely), how likely are you to
          recommend this app to someone else?
        </Typography>
        <FormControl
          variant="outlined"
          margin="normal"
          className={classes.formControl}
        >
          <Select
            native
            name="NPS"
            value={form.NPS}
            onChange={handleChange}
            style={{ marginTop: -8, marginBottom: 8 }}
            inputProps={{
              name: 'NPS',
              id: 'nps-field-label',
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option selected value="5">
              5
            </option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Select>
        </FormControl>
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Feedback
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          label=""
          error={checkFeedback(form.Feedback) !== 'PASS'}
          helperText={(checkFeedback(form.Feedback) === 'PASS') ? '' : checkFeedback(form.Feedback)}
          placeholder="Any other general feedback for us?"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant="outlined"
          required
          name="Feedback"
          inputRef={feedbackRef}
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
            {loading ? <CircularProgress style={{ height: 20, width: 20 }} /> : 'Submit Feedback'}
          </Typography>
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
          {success
            ? 'Feedback Submitted!'
            : 'Apologies! An error occur during submission'}
        </Alert>
      </Snackbar>
      <style jsx>
        {`
          .FeedbackForm-root {
            width: 100%;
            padding: 0 2rem 2rem;
            text-align: center;
          }

          @media only screen and (max-width: ${breakpoints.width.sm}px) {
            .FeedbackForm-root {
            padding: 0 0 2rem;
          }
        `}
      </style>
    </>
  );
};

export default FeedbackForm;
