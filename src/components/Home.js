import React from 'react';
import { Link } from 'react-router-dom';
import Registration from './auth/Registration';

const Home = () => (
  <div>
    <h1>
      Home
    </h1>
    <Registration />
    <Link to="/login">
      Login
    </Link>
  </div>
);

export default Home;
