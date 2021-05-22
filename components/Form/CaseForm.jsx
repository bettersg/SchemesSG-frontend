import React from 'react';
// import axios from 'axios';
import { Typography, Button, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const CaseForm = () => {
  const [form, setForm] = React.useState({ Name: '', Email: '', Case: '' });
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
    const scriptURLschemescase =
      'https://script.google.com/macros/s/AKfycbyqGHt2p224ebUahB6XDOgxtru9fvXm3YonCKcPus--p8e57TFB/exec';

    fetch(scriptURLschemescase, {
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
      <form className='CaseForm-root' onSubmit={handleSubmit}>
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
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='What area of need do you think needs more research in?'
          placeholder="e.g. I can't find schemes for caregivers with chronic conditions etc..."
          multiline
          rows={3}
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Case'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ marginTop: 16 }}
          disableElevation>
          <Typography variant='subtitle1'>Submit</Typography>
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
          {success
            ? 'Case received!'
            : 'Apologies! An error occur during submission'}
        </Alert>
      </Snackbar>
      <style jsx>
        {`
          .CaseForm-root {
            width: 100%;
            padding: 2rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default CaseForm;
