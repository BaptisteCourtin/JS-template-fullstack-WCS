import axios from "axios";
import { toast } from 'react-hot-toast';

export const onSubmitProject = async (d) => {
    const { nom, photo, description, lien } = d;
    try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/projet/new`, {
            nom, photo, description, lien,
        })
        console.warn(res.data);
        toast.success("Votre projet à bien été ajouté !");
    }
    catch (err) {
        console.error(err.response);
        toast.error(err.message)
    };

    return { onSubmitProject };
};