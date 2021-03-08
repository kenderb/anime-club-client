import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { logoutUser } from '../../actions';
import './SideBar.style.css';

const SideBar = ({ logoutUser, user }) => {
  const handleonclick = () => {
    logoutUser();
  };
  return (
    <aside>
      <ul className="side-menu">
        <li>
          <img src="" alt={user.name} />
          {user.name}
        </li>
        <li>
          <Link to="/favorites">My favorites</Link>
        </li>
        <li>
          <button type="button" onClick={handleonclick}> Logout </button>
        </li>
      </ul>
    </aside>
  );
};

const mapStateToprops = state => ({
  user: state.user,
});
SideBar.propTypes = {
  logoutUser: PropType.func.isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

export default connect(mapStateToprops, { logoutUser })(SideBar);
