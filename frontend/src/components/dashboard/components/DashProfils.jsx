import React, { useEffect, useState } from 'react';
import { useGetProfilsData } from '@components/profil/hooks/useGetProfilsData';

const DashProfils = () => {
    const { getProfils, profilData } = useGetProfilsData();

    useEffect(() => {
        getProfils();
    }, []);

    return (
        <div className='dashProfils'>
            <div className="dashProfilsContainer">
                <h4>Profils</h4>

            </div>
        </div >
    );
};

export default DashProfils;