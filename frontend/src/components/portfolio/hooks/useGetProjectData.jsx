import { useState } from 'react';
import axios from "axios";

export const useGetProjectsData = () => {
    const [projectData, setProjectData] = useState([]);

    const getProjects = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/projets/`
            );
            setProjectData(res.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    return { getProjects, projectData };
};