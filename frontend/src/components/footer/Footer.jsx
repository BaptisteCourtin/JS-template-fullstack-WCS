import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerBody'>
        <NavLink to="/">© Guillaume Pichaud - 2023</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Footer;