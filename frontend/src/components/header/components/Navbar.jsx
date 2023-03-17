import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillEmojiWinkFill, BsFillStickiesFill, BsFillEnvelopeFill } from 'react-icons/bs';
import Gui from '@assets/Navbar/Gui.png';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="navbar__body">
                <div className="navbar__bodyRight">
                    <NavLink to="/"><img src={Gui} alt="Avatar de Guillaume Pichaud" style={{ width: 50 }} /></NavLink>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <NavLink to="/" className="navbar__link"><BsFillEmojiWinkFill className='navbar__icon' /><span className='navbar__text'>About</span></NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/portfolio" className="navbar__link"><BsFillStickiesFill className='navbar__icon' /><span className='navbar__text'>Portfolio</span></NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/contact" className="navbar__link"><BsFillEnvelopeFill className='navbar__icon' /><span className='navbar__text'>Contact</span></NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="https://www.linkedin.com/in/guillaume-pichaud-627b308a/" className="navbar__link"><AiFillLinkedin className="navbar__text" /><span className="navbar__icon">LinkedIn</span></NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="https://github.com/GuiPich" className="navbar__link"><AiFillGithub className="navbar__text" /><span className="navbar__icon">GitHub</span></NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;