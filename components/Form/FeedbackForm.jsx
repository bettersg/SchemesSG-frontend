import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  TextField,
  Snackbar,
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { breakpoints } from '../../constants/design';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const FeedbackForm = () => {
  const classes = useStyles();

  const [form, setForm] = React.useState({ NPS: '5' });
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURLfeedback =
      'https://script.google.com/macros/s/AKfycbwN3CXj_MHbWqSU_HuoIMUbjrPFZc0WKKs6d0HLiW2qXZ0ih_5G/exec';

    fetch(scriptURLfeedback, {
      method: 'POST',
      body: form,
    })
      .then((response) => {
        if (response.status == 200) {
          setOpen(true);
          setSuccess(true);
        } else {
          setOpen(true);
          setSuccess(false);
        }
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setOpen(true);
        setSuccess(false);
      });
  };
  return (
    <>
      <form className='FeedbackForm-root' onSubmit={handleSubmit}>
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='Name'
          placeholder='e.g. John Tan'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Name'
        />
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='Email (optional, if you want us to reply you)'
          type='email'
          placeholder='e.g. abc@123.com'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          name='Email'
        />
        <FormControl
          variant='outlined'
          margin='normal'
          className={classes.formControl}>
          <InputLabel htmlFor='nps-field-label'>
            From 1 (least likely) to 10 (most likely), how likely are you to
            recommend this app to someone else?
          </InputLabel>
          <Select
            native
            name='NPS'
            value={form.NPS}
            onChange={handleChange}
            label='From 1 (least likely) to 10 (most likely), how likely are you to
            recommend this app to someone else?'
            inputProps={{
              name: 'NPS',
              id: 'nps-field-label',
            }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option selected value='5'>
              5
            </option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Select>
        </FormControl>
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='Feedback'
          placeholder='Any other general feedback for us?'
          multiline
          rows={3}
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Feedback'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ marginTop: 16 }}
          disableElevation>
          <Typography variant='subtitle1'>Submit Feedback</Typography>
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