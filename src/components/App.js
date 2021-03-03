import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './auth/LogIn';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LogIn} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
