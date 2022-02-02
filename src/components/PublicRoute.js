import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;

  return shouldNavigate ? <Navigate to="/contacts" /> : children;
}

export default PublicRoute;
