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

const EditListingForm = () => {
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
    const scriptURLedit =
      'https://script.google.com/macros/s/AKfycbyXWqdWuzjOgOyiF46jY_LuGk9u0dzDpFnBgWSvQoGu2IBg4Q8/exec';

    fetch(scriptURLedit, {
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
      <form className='EditListingForm-root' onSubmit={handleSubmit}>
        <Typography variant='body1' style={{ textAlign: 'left' }}>
          Name
        </Typography>
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label=''
          placeholder='e.g. John Tan'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant='outlined'
          required
          name='Name'
        />
        <Typography variant='body1' style={{ textAlign: 'left' }}>
          Email (optional, if you want us to reply you)
        </Typography>
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label=''
          type='email'
          placeholder='e.g. abc@123.com'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant='outlined'
          name='Email'
        />
        <Typography variant='body1' style={{ textAlign: 'left' }}>
          Name of Scheme to Edit
        </Typography>
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label=''
          placeholder='e.g. ABC Financial Assistance'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 5, marginBottom: 15 }}
          variant='outlined'
          required
          name='Scheme'
        />
        <Typography variant='body1' style={{ textAlign: 'left' }}>
          Updated name/description/organisation info of the scheme
        </Typography>
        <TextField
          id='outlined-full-width'
          onChange={handleChange}
          label=''
          placeholder='e.g. Original listing mentions that this scheme provides X. Actually it provides Y instead etc.'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          name='Update'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ marginTop: 16 }}
          disableElevation
          disabled={loading}>
          <Typography variant='subtitle1' className={classes.btnText}>
            {loading ? <CircularProgress style={{ height: 20, width: 20 }} /> : "Edit Listing"}
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
