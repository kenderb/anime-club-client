import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import LogIn from './auth/LogIn';
import Dashboard from './Dashboard';
import FavoriteList from './FavoriteList';
import NavBar from './NavBar';
import Home from './Home';
import { isLoggedIn } from '../actions';

const App = ({ isLoggedIn }) => {
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LogIn} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/favorites" component={FavoriteList} exact />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isLoggedIn: PropType.func.isRequired,
};

export default connect(null, { isLoggedIn })(App);
