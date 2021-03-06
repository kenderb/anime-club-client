import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { MenuOutline } from 'react-ionicons';
import { logoutUser } from '../actions';
import './NavBar.style.css';

const NavBar = ({ logoutUser, user }) => {
  const handleonclick = () => {
    logoutUser();
  };

  return (
    <nav className="nav-base">
      <ul className="d-flex">
        {!user.loggedIn ? ' '
          : (
            <li>
              <MenuOutline
                color="#00000"
                height="30px"
                width="30px"
              />
              <Link to="/favorites">My favorites</Link>
              <button type="button" onClick={handleonclick}> Logout </button>
            </li>
          )}
      </ul>
    </nav>
  );
};
const mapStateToprops = state => ({
  user: state.user,
});
NavBar.propTypes = {
  logoutUser: PropType.func.isRequired,
  user: PropType.instanceOf(Object).isRequired,
};

export default connect(mapStateToprops, { logoutUser })(NavBar);
