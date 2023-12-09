import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import NavbarElements from './NavbarElements';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        backgroundColor: 'hotpink',
        marginTop: '0px',
      }}
    >
      {/* DELETE aboutSection or use it as "back to top button" */}
      <Link to="aboutSection" smooth duration={1000}>
        About
      </Link>
      {/* <Link to="featureSection" smooth duration={1000}>
        About
      </Link> */}
      {/* <Link to="mediaSection" smooth duration={1000}>
        Team
      </Link> */}
      <Link to="teamSection" smooth duration={1000}>
        Team
      </Link>
    </nav>
  );
};

export default Navbar;
