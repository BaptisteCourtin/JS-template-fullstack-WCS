import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerBody'>
        <p className="footerSignature">© Guillaume Pichaud - 2023</p>
        <NavLink to="/">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Footer;