import React from "react";
import { FaCloudShowersHeavy, FaCloudSunRain, FaCloudSun, FaInstagram, FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <header className="header">
      <div className="header__icons">
        <FaCloudShowersHeavy/>
        <FaCloudSunRain/>
        <FaCloudSun/>
      </div>
      <div className="header__left">
      <FaGithub/>
      <FaInstagram/>
      </div>
      </header>
    </>
  );
}

export default Navbar;
