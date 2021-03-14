import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { MenuOutline } from 'react-ionicons';
import { logoutUser } from '../../actions';
import './SideBar.style.css';
import userImage from '../../assets/images/userDefault.svg';

const SideBar = ({ logoutUser, user }) => {
  const [sideActive, setsideActive] = useState(false);
  const [menuActive, setmenuActive] = useState('Dashboard');
  const handleonclick = () => {
    setsideActive(false);
    logoutUser();
  };
  const handleActiveMenu = name => {
    setmenuActive(name);
    setsideActive(!sideActive);
  };
  const displayMenu = () => (
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
            <img src={userImage} alt={user.name} className="user-image" />
            <p>
              {user.name}
            </p>
          </li>
          <li className={menuActive === 'favorites' ? 'active-mark' : ' '}>
            <Link to="/favorites" onClick={() => handleActiveMenu('favorites')}>My favorites</Link>
          </li>
          <li className={menuActive === 'Dashboard' ? 'active-mark' : ' '}>
            <Link to="/" onClick={() => handleActiveMenu('Dashboard')}>Dashboard</Link>
          </li>
          <li className={menuActive === 'Messages' ? 'active-mark' : ' '}>
            <Link to="/" onClick={() => handleActiveMenu('Messages')}>Messages</Link>
          </li>
          <li className="separator" />
          <li>
            <button type="button" onClick={handleonclick}> Logout </button>
          </li>
        </ul>
        <div className="bg-black" onClick={() => setsideActive(!sideActive)} role="presentation" />
      </aside>
    </>
  );
  return (
    !user.loggedIn ? '' : displayMenu()
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
