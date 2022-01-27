import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);

      case 'email':
        return setEmail(e.target.value);

      case 'password':
        return setPassword(e.target.value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2>Форма регистрации</h2>

      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Введите имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          {' '}
          Введите email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          {' '}
          Введите пароль
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}

export default RegisterPage;
