import React, { useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { useGetProjectsData } from './hooks/useGetProjectData';

const Projects = () => {
    const { getProjects, projectData } = useGetProjectsData();

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div className='projects'>
            <h3>Portfolio</h3>
            <ProjectCard data={projectData} />
        </div>
    );
};

export default Projects;