import React from 'react';
// import axios from 'axios';
import { Typography, Button, TextField, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { breakpoints } from '../../constants/design';
import { createFormData } from '../../utils';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
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
  const [form, setForm] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURLadd =
      'https://script.google.com/macros/s/AKfycbzc8abpu0k4c9zs3ELG4aRY0HkjZksEIMQbam2sA31C4kqFzrwU/exec';

    fetch(scriptURLadd, {
      method: 'POST',
      body: createFormData(form),
    })
      .then((response) => {
        if (response.status == 200) {
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
      <form className='AddListingForm-root' onSubmit={handleSubmit}>
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
          label='Scheme Name'
          placeholder='e.g. ABC Financial Assistance'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Scheme'
        />
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='Providing Agency'
          placeholder='e.g. ABC Charity Singapore'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Agency'
        />
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='Description of the scheme'
          placeholder='e.g. Financial assistance for low income, etc.'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Description'
        />
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='URL'
          placeholder='e.g. http://www.abccharity.com.sg'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='URL'
        />
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label='Help us add a few keywords so that we can organise our data systems'
          placeholder='e.g. Low Income, Healthcare'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Tags'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ marginTop: 16 }}
          disableElevation
          disabled={loading}>
          <Typography variant='subtitle1' className={classes.btnText}>
            {loading ? <CircularProgress style={{ height: 20, width: 20 }} /> : "Add Listing"}
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
