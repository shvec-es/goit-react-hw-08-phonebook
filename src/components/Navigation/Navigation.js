import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/register" className={s.link}>
          Register
        </NavLink>
        <NavLink to="/login" className={s.link}>
          Login
        </NavLink>
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      </nav>
      <hr />
    </>
  );
}

export default Navigation;
