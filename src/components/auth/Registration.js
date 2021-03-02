import React, { useState } from 'react';
import { connect } from 'react-redux';
import createUser from '../../actions';

const Registration = ({ createUser }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    userType: 'user',
    registrationErrors: '',
  });

  const handleSummit = e => {
    e.preventDefault();
    createUser(userData);
    console.log('submiting..', userData);
  };

  const handleOnchange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={e => handleSummit(e)}>
      <input
        type="text"
        placeholder="name"
        value={userData.name}
        name="name"
        onChange={e => handleOnchange(e)}
      />
      <input
        type="email"
        placeholder="email"
        value={userData.email}
        name="email"
        onChange={e => handleOnchange(e)}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        name="password"
        onChange={e => handleOnchange(e)}
      />
      <input
        type="password"
        placeholder="Password confirmation"
        value={userData.passwordConfirmation}
        name="passwordConfirmation"
        onChange={e => handleOnchange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(null, { createUser })(Registration);
