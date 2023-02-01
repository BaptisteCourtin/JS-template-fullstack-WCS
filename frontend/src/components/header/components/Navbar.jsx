import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import Gui from '@assets/Navbar/Gui.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarBody">
                <div className="navbarBodyRight">
                    <img id="photoProfil" src={Gui} alt="Avatar de Guillaume Pichaud" style={{ width: 50 }} />
                </div>
                <div className="navbarBodyLeft">
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to=""><AiOutlineLinkedin className="navbarIcon" /></NavLink>
                    <NavLink to=""><FiGithub className="navbarIcon" /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;