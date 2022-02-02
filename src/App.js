import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import Navigation from 'components/Navigation';
import { getError } from 'redux/contacts/contacts-selectors';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { getFetchingCurrent } from 'redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { Container } from '@mui/material';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

function App() {
  const error = useSelector(getError);
  const isFetchingCurrent = useSelector(getFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container fixed sx={{ mb: '15px' }}>
        <ToastContainer autoClose={2000} theme="colored" />
        <Navigation />

        {!isFetchingCurrent && (
          <>
            <Suspense
              fallback={
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
              }
            >
              <Routes>
                <Route
                  path="/register"
                  element={
                    <PublicRoute restricted>
                      <RegisterPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute>
                      <ContactsPage />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/register" />} />
              </Routes>
            </Suspense>
          </>
        )}
      </Container>

      {error && toast.error(error)}
    </>
  );
}

export default App;
