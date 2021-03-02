import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import createUser from '../../actions';

const Registration = ({ user, createUser }) => {
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
  };

  const handleOnchange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  if (user.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <h1>
        User logged in?:
        {' '}
        {`${user.loggedIn}`}
      </h1>
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
    </>
  );
};

Registration.propTypes = {
  createUser: PropType.func.isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

const mapStateToprops = state => ({
  user: state.user,
});

export default connect(mapStateToprops, { createUser })(Registration);
