import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

const Dashboard = ({ user }) => (
  <div>
    User logged In ?:
    {' '}
    {`${user.loggedIn}`}
    <h1>Hello from Dashboard component</h1>
  </div>
);
const mapStateToprops = state => ({
  user: state.user,
});

Dashboard.propTypes = {
  user: PropType.instanceOf(Object).isRequired,
};
export default connect(mapStateToprops)(Dashboard);
