import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillEmojiWinkFill, BsFillStickiesFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>

      <ul className="footer__list">
        <li className="footer__item">
          <NavLink to="/" className="footer__link"><FaHome className='footer__icon'
          /><span className='footer__text'>© Guillaume Pichaud - 2023</span></NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/" className="footer__link"><BsFillEmojiWinkFill className='footer__icon' /><span className='footer__text'>About</span></NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/portfolio" className="footer__link"><BsFillStickiesFill className='footer__icon' /><span className='footer__text'>Portfolio</span></NavLink>
        </li>
        <li className="footer__item">
          <NavLink to="/contact" className="footer__link"><BsFillEnvelopeFill className='footer__icon' /><span className='footer__text'>Contact</span></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;