import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { Wrapper } from 'styles';
import Navigation from 'components/Navigation';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
import {
  getError,
  // getFilteredContacts,
  getLoadingForFetch,
} from 'redux/contacts/contacts-selectors';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

function App() {
  // const filteredContacts = useSelector(getFilteredContacts);
  const loadingForFetch = useSelector(getLoadingForFetch);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && toast.error(error)}
      {loadingForFetch ? (
        <TailSpin
          color="#00BFFF"
          height="50"
          width="50"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        />
      ) : (
        <Wrapper>
          <ToastContainer autoClose={2000} theme="colored" />
          <Navigation />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
          {/* <div>
            <Title>Phonebook</Title>
            <ContactForm />
          </div>
          {filteredContacts.length > 0 ? (
            <div>
              <Title>Contacts</Title>
              <Filter />
              <ContactList />
            </div>
          ) : (
            <Title>You don't have contacts</Title>
          )} */}
        </Wrapper>
      )}
    </>
  );
}

export default App;
