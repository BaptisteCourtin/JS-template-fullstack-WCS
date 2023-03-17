import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ data }) => {
    return (
        <div className="projectCard">
            {data &&
                data.map((element) => (
                    <li key={element.id}>
                        <div className="cardContainer">

                            <img src={element.photo} alt="screenshot du site réalisé" />

                            <div className="cardBody">
                                <h4>{element.nom}</h4>
                                <p>{element.description}</p>
                                <NavLink to={element.lien} type="button">Visit Project</NavLink>

                            </div>

                            <div className="cardBodyFooter"></div>
                        </div>
                    </li>))}
        </div>
    );
};

export default ProjectCard;