
import React from 'react';
import classesNavbar from '../styles/navbar.module.css';
import applogo from '../assets/appLogo.png';

function Navbar() {
  return (
    <nav className={classesNavbar.navbar}>
      <div className={classesNavbar.logoContainer}>
        <img src={applogo} alt="Logo" className={classesNavbar.logo} />
      </div>
    </nav>
  );
}

export default Navbar;
