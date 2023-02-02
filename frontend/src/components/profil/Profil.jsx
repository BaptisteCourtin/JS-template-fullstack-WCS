import React, { useEffect } from 'react';
import { useGetProfilsData } from './hooks/useGetProfilsData';

const Profil = () => {
    const { getProfils, profilData } = useGetProfilsData();

    useEffect(() => {
        getProfils();
    }, []);

    return (
        <div className='profil'>
            <div className="profilCard">
                {profilData && profilData.map((element) => (
                    <li key={element.id}>
                        <div className="cardRight">
                            <h3>Hi ! I'M {element.nom.toUpperCase()} {element.prenom.toUpperCase()}</h3>
                            <p>{element.bio}</p>
                        </div>
                        <div className="cardLeft">
                            <img src={element.photo} alt="illustration de Guillaume" className="photoLandingPage" />
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Profil;