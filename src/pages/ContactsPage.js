import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Typography } from '@mui/material';

function ContactsPage() {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Typography
          variant="h3"
          color="secondary"
          sx={{ mb: '15px', textAlign: 'center' }}
        >
          Phonebook
        </Typography>
        <ContactForm />
      </div>
      {filteredContacts.length > 0 ? (
        <div>
          <Typography
            variant="h3"
            color="secondary"
            sx={{ mb: '15px', textAlign: 'center' }}
          >
            Contacts
          </Typography>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <Typography
          variant="h4"
          color="secondary"
          sx={{ mb: '15px', textAlign: 'center' }}
        >
          You don't have contacts
        </Typography>
      )}
    </>
  );
}

export default ContactsPage;
