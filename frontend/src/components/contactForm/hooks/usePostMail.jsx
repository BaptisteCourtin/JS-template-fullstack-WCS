import axios from "axios";
import { toast } from 'react-hot-toast';

export const onSubmitData = async (d) => {
    const { prenom, nom, mail, texte } = d;
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact/send`, {
            prenom,
            nom,
            mail,
            texte,
        })
        console.warn(res.data);
        toast.success("Votre message à bien été envoyé par email à Guillaume, merci !");
    }
    catch (err) {
        console.error(err.response);
        toast.error(err.message)
    };

    return { onSubmitData };
};