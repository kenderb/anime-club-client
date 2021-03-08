import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { MenuOutline } from 'react-ionicons';
import { logoutUser } from '../../actions';
import './NavBar.style.css';

const NavBar = ({ user }) => (
  <>
    <nav className="navBar-container">
      <ul className="d-flex">
        {!user.loggedIn ? ' '
          : (
            <li>
              <MenuOutline
                color="#00000"
                height="30px"
                width="30px"
              />
            </li>
          )}
      </ul>
    </nav>
  </>
);
const mapStateToprops = state => ({
  user: state.user,
});
NavBar.propTypes = {
  user: PropType.instanceOf(Object).isRequired,
};

export default connect(mapStateToprops, { logoutUser })(NavBar);
