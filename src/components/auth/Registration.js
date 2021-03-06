import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { createUser } from '../../actions';
import './Form.style.css';

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
    <main className="login-container d-flex">
      <h1 className="form-title">
        Create an account
      </h1>
      <form onSubmit={e => handleSummit(e)} className="d-flex form-base">

        <input
          type="text"
          placeholder="name"
          value={userData.name}
          name="name"
          onChange={e => handleOnchange(e)}
          className="input-base"
        />
        <input
          type="email"
          placeholder="email"
          value={userData.email}
          name="email"
          onChange={e => handleOnchange(e)}
          className="input-base"
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
          onChange={e => handleOnchange(e)}
          className="input-base orange-input"
        />
        <input
          type="password"
          placeholder="Password confirmation"
          value={userData.passwordConfirmation}
          name="passwordConfirmation"
          onChange={e => handleOnchange(e)}
          className="input-base orange-input"
        />
        <button type="submit" className="button-base">Submit</button>
        <Link to="/login" className="link-base">
          Sign in
        </Link>
      </form>
    </main>
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
