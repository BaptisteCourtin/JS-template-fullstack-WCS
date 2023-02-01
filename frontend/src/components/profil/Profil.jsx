import React from 'react';
import Gui from '@assets/Navbar/Gui.png';

const Profil = () => {
    return (
        <div className='profil'>
            <div className="profilCard">
                <div className="cardRight">
                    <h3>Hi ! I'M GUILLAUME PICHAUD</h3>
                    <p>A fullstack Web Developer building the Frontend and the Backend of Websites and Web Apllications that leads to the succes of your product</p>
                </div>
                <div className="cardLeft">
                    <img src={Gui} alt="illustration de Guillaume" className="photoLandingPage" />
                </div>
            </div>
        </div>
    );
};

export default Profil;