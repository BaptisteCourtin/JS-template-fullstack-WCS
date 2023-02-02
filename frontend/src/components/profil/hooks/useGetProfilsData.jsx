import { useState } from 'react';
import axios from "axios";

export const useGetProfilsData = () => {
    const [profilData, setProfilData] = useState([]);

    const getProfils = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/profils`
            );
            setProfilData(res.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    return { getProfils, profilData };
};