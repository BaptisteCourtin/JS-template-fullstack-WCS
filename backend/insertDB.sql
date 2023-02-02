-- -----------------------------------------------------

INSERT INTO
    profil (nom, prenom, bio, photo)
VALUES (
        `pichaud`,
        `guillaume`,
        `A fullstack Web Developer building the Frontend and the Backend of Websites and Web Apllications that leads to the succes of your product
`,
        `https://i.imgur.com/G0b6ldn.png`
    );

-- -----------------------------------------------------

INSERT INTO
    projet (nom, photo, description, lien)
VALUES (
        `Le Nez Dans Les Lettres`,
        `https://i.imgur.com/zEo757d.jpg`,
        `Notre premier projet réalisé à la Wild Code School de Nantes. Nous avions pour mission de concevoir un site vitrine statique pour une librairie de quartier. Nous devions respecter un cahier des charges graphiques et le site devait être responsive. Notre groupe pour ce projet : Naomi Santos, Philippe Berra, Jonathan Scattolini, Daniel Gomez Rodríguez et moi-même. Nous avons uniquement utilisés du HTML, CSS et Javascript pour ce dernier. Pour ma part, j'ai conçu le wireframe via Whimsical et je me suis occupé des sections 'Qui Suis-Je' et 'Ma séléction'. Nous avons aussi eu l'occasion d'utiliser Git et GitHub pour ce projet.`,
        `https://phildev777.github.io/Bibliotheque`
    ), (
        `WildMovies`,
        `https://i.imgur.com/UIBmfU2.png`,
        `Voici notre deuxième projet à la Wild Code School : la conception d'un site dynamique utilisant une Api. Nous avons choisi une base de donnée sur les films et les séries The Movie DataBase. Notre projet était de permettre à l'utilisateur de faire une recherche de film, série, acteur ou membre d'équipe technique et de le afficher un ensemble de données. Nous indiquons également s'il est possible de regarder le film ou la série sur une des quatres principales plateforme de streaming en France, Amazon, Netflix, Disney et Canal+, avec un lien vers celle-ci. Nous avons réalisé le site en utilisant le librairie React et le préprocesseur Sass. J'ai pour ma part créer le wireframe via Whimsical et la maquette version mobile sur Figma. Je me suis occuper de la création de la page affichée lors de la sélection d'un film ou d'une série. Je tiens à remercier mon équipe pour ce projet Adam Giromanay, Jonathan Scattolini, Thibaud Brault et Vincent ROUGET. Ce fut un réel plaisir de travailler avec eux sur celui-ci.`,
        `https://wild-movies.netlify.app`
    );