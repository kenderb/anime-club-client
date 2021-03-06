import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { Redirect } from 'react-router-dom';
import { loginUserAction } from '../../../actions';
import './Login.style.css';

const LogIn = ({ user, loginUserAction }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    logInErrors: '',
  });

  const handleSummit = e => {
    e.preventDefault();
    loginUserAction(userData);
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
    <main className="login-container">
      <h1>
        Sign in
      </h1>
      <p>Hello there! Sign in and start</p>
      <p>enjoying the community</p>
      <form onSubmit={e => handleSummit(e)} className="d-flex form-base">

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
          className="input-base"
        />
        <button type="submit" className="button-base">Sign in</button>
      </form>
    </main>
  );
};

LogIn.propTypes = {
  loginUserAction: PropType.func.isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

const mapStateToprops = state => ({
  user: state.user,
});

export default connect(mapStateToprops, { loginUserAction })(LogIn);
