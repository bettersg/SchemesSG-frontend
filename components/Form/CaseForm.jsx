/* eslint-disable no-console */
import React from 'react';
// import axios from 'axios';
import {
  Typography, Button, TextField, Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { createFormData } from '../../utils';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
    const scriptURLschemescase = 'https://script.google.com/macros/s/AKfycbyqGHt2p224ebUahB6XDOgxtru9fvXm3YonCKcPus--p8e57TFB/exec';

    fetch(scriptURLschemescase, {
      method: 'POST',
      body: createFormData(form),
    })
      .then((response) => {
        if (response.status === 200) {
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
      <form className="CaseForm-root" onSubmit={handleSubmit}>
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
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          <Typography variant="subtitle1">Submit</Typography>
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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
