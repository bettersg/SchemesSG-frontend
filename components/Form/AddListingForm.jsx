/* eslint-disable no-console */
import React, { useState } from 'react';
// import axios from 'axios';
import {
  Typography, Button, TextField, Snackbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { breakpoints } from '../../constants/design';
import { createFormData } from '../../utils';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  btnText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AddListingForm = () => {
  const classes = useStyles();

  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Scheme: '',
    Agency: '',
    Description: '',
    URL: '',
    Tags: '',
  });
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURLadd = 'https://script.google.com/macros/s/AKfycbzc8abpu0k4c9zs3ELG4aRY0HkjZksEIMQbam2sA31C4kqFzrwU/exec';

    fetch(scriptURLadd, {
      method: 'POST',
      body: createFormData(form),
    })
      .then((response) => {
        if (response.status === 200) {
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
      <form className="AddListingForm-root" onSubmit={handleSubmit}>
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Name
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.Name}
          label=""
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
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Email (optional, if you want us to reply you)
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.Email}
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
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Scheme Name
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.Scheme}
          label=""
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
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Providing Agency
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.Agency}
          label=""
          placeholder="e.g. ABC Charity Singapore"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          style={{ marginTop: 5, marginBottom: 15 }}
          required
          name="Agency"
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Description of the scheme
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.Description}
          label=""
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
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          URL
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.URL}
          label=""
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
        />
        <Typography variant="body1" style={{ textAlign: 'left' }}>
          Help us add a few keywords so that we can organise our data systems
        </Typography>
        <TextField
          id="outlined-full-width"
          onChange={handleChange}
          value={form.Tags}
          label=""
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
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
          disableElevation
          disabled={loading}
          onClick={handleSubmit}
        >
          <Typography variant="subtitle1" className={classes.btnText}>
            {loading ? <CircularProgress style={{ height: 20, width: 20 }} /> : 'Add Listing'}
          </Typography>
        </Button>
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
