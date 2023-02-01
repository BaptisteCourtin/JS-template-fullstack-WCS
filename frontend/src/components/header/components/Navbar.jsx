import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Gui from '@assets/Navbar/Gui.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarBody">
                <div className="navbarBodyRight">
                    <NavLink to="/"><img src={Gui} alt="Avatar de Guillaume Pichaud" style={{ width: 50 }} /></NavLink>
                </div>
                <div className="navbarBodyLeft">
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="https://www.linkedin.com/in/guillaume-pichaud-627b308a/"><AiFillLinkedin className="navbarIcon" /></NavLink>
                    <NavLink to="https://github.com/GuiPich"><AiFillGithub className="navbarIcon" /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;