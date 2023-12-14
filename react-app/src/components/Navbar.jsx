
import React from 'react';
import classesNavbar from '../styles/navbar.module.css';

function Navbar() {
  return (
    <nav className={classesNavbar.navbar}>



      <div className={classesNavbar.logoContainer}>
        <img src="/path/to/your/logo.png" alt="Logo" className={classesNavbar.logo} />
        <h1 className={classesNavbar.appName}>TaskZen</h1>
      </div>
    </nav>
  );
}

export default Navbar;
