import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { MenuOutline } from 'react-ionicons';
import { logoutUser } from '../../actions';
import './SideBar.style.css';

const SideBar = ({ logoutUser, user }) => {
  const [sideActive, setsideActive] = useState(false);
  const handleonclick = () => {
    logoutUser();
  };
  return (
    !user.loggedIn ? ' '
      : (
        <>
          <MenuOutline
            color="#00000"
            height="30px"
            width="30px"
            onClick={() => setsideActive(!sideActive)}
          />
          <aside className={sideActive ? '' : 'd-none'}>
            <ul className="side-menu d-flex">
              <li className=" d-flex user-container">
                <img src="" alt={user.name} />
                <p>
                  {user.name}
                </p>
              </li>
              <li>
                <Link to="/favorites" onClick={() => setsideActive(!sideActive)}>My favorites</Link>
              </li>
              <li>
                <Link to="/" onClick={() => setsideActive(!sideActive)}>Dashboard</Link>
              </li>
              <li>
                <Link to="/" onClick={() => setsideActive(!sideActive)}>Messages</Link>
              </li>
              <li className="separator" />
              <li>
                <button type="button" onClick={handleonclick}> Logout </button>
              </li>
            </ul>
            <div className="bg-black" onClick={() => setsideActive(!sideActive)} role="presentation" />
          </aside>
        </>
      )
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
