import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ data }) => {
    return (
        <div className="projectCard">
            {data &&
                data.map((element) => (
                    <li key={element.id}>
                        <div className="cardContainer">
                            <div className="cardBody">
                                <div className="cardBodyRight">
                                    <img src={element.photo} alt="screenshot du site réalisé" />
                                </div>
                                <div className="cardBodyLeft">
                                    <h4>{element.nom}</h4>
                                    <p>{element.description}</p>
                                    <span><NavLink to={element.lien}>{element.lien}</NavLink></span>

                                </div>
                            </div>
                            <div className="cardBodyFooter"></div>
                        </div>
                    </li>))}
        </div>
    );
};

export default ProjectCard;