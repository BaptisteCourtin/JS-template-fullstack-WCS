import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { onSubmitProject } from '../hooks/usePostNewProject';
import { useGetProjectsData } from '@components/portfolio/hooks/useGetProjectData';

const DashProjects = () => {
    const { register, handleSubmit } = useForm();
    const { getProjects, projectData } = useGetProjectsData();

    useEffect(() => {
        getProjects();
    }, []);

    const deleteMessage = (id) => {
        try {
            axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/projet/delete/${id}`
            );
            toast.success("Le projet a bien été supprimé");
        } catch (err) {
            toast.error(err.message);
        }
    };


    return (
        <div className='dashProjects'>
            <h4>Projets</h4>
            <div className="dashProjectsContainer">
                <div className="ajoutProject">
                    <h5>Ajout d'un nouveau projet</h5>
                    <form className="formProject" onSubmit={handleSubmit(onSubmitProject)}>
                        <div className="divInput">
                            <label htmlFor="nom" className="labelFormProject">Nom</label>
                            <input id="projectName"
                                type="text"
                                {...register("nom", { required: true })} />
                        </div>
                        <div className="divInput">
                            <label htmlFor="photo" className="labelFormProject">Photo</label>
                            <input id="projectPhoto"
                                type="text"
                                {...register("photo", { required: true })} />
                        </div>
                        <div className="divInput">
                            <label htmlFor="description" className="labelFormProject">Description</label>
                            <input id="projectDescription"
                                type="text"
                                {...register("description", { required: true })} />
                        </div>
                        <div className="divInput">
                            <label htmlFor="lien" className="labelFormProject">Lien</label>
                            <input id="projectLink"
                                type="text"
                                {...register("lien", { required: true })} />
                        </div>
                        <button id="btnAjout" type="submit">Ajouter</button>
                    </form>
                </div>
                <div className="deleteProject">
                    <h5>Suppression d'un projet</h5>
                    {projectData && projectData.map((el) => (
                        <li key={el.id}>
                            <div>{el.nom}</div>
                            <button type="button" onClick={() => { deleteMessage(el.id) }}>Supprimer</button>
                        </li>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default DashProjects;