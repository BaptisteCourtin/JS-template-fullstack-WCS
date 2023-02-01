import React from 'react';

const ProjectCard = ({ data }) => {
    return (
        <div className="projectCard">
            {data &&
                data.map((element) => (
                    <li key={element.id}>
                        <div className="cardContainer">
                            <div className="cardBody">
                                <div className="cardBodyRight">
                                    <img src="" alt="screenshot du site réalisé" />
                                </div>
                                <div className="cardBodyLeft">
                                    <h4>{element.nom}</h4>
                                    <p>{element.description}</p>
                                    <p>{element.lien}</p>

                                </div>
                            </div>
                            <div className="cardBodyFooter"></div>
                        </div>
                    </li>))}
        </div>
    );
};

export default ProjectCard;