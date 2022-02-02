import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { addContact } from 'redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getLoadingForAdd,
} from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import { Box, TextField, Button } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getFilteredContacts);
  const loadingForAdd = useSelector(getLoadingForAdd);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      clearForm();
      return toast.warning(`${name} is already in contacts!`);
    }

    dispatch(addContact({ name, number }));
    toast.success('Contact added successfully!');
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      sx={{ width: '350px', m: '0 auto' }}
      onSubmit={handleSubmit}
    >
      <TextField
        required
        label="Enter name and surname to add contact"
        size="small"
        margin="dense"
        fullWidth
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      />
      <TextField
        required
        label="Enter number in format '000-000-0000'"
        size="small"
        margin="dense"
        fullWidth
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: '170px', display: 'block', m: '15px auto' }}
        type="submit"
      >
        {loadingForAdd ? (
          <TailSpin
            color="#00BFFF"
            height="18"
            width="18"
            wrapperStyle={{
              display: 'inline',
              marginRight: '10px',
            }}
          />
        ) : (
          <AddReactionIcon sx={{ mr: '5px', height: '20px' }} />
        )}
        Add contact
      </Button>
    </Box>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
