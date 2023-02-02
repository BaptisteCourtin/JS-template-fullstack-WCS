-- -----------------------------------------------------

-- Schema checkpoint4

-- -----------------------------------------------------

DROP SCHEMA IF EXISTS `checkpoint4` ;

-- -----------------------------------------------------

-- Schema checkpoint4

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `checkpoint4` DEFAULT CHARACTER SET utf8;

USE `checkpoint4` ;

-- -----------------------------------------------------

-- Table `checkpoint4`.`profil`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`profil` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`profil` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(45) NOT NULL,
        `prenom` VARCHAR(45) NOT NULL,
        `bio` VARCHAR(45) NOT NULL,
        `photo` VARCHAR(45),
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `checkpoint4`.`techno`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`techno` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`techno` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `checkpoint4`.`projet`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`projet` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`projet` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `nom` VARCHAR(45) NOT NULL,
        `photo` VARCHAR(150) NOT NULL,
        `description` TEXT(250) NOT NULL,
        `lien` VARCHAR(150) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `checkpoint4`.`projet_techno`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `checkpoint4`.`projet_techno` ;

CREATE TABLE
    IF NOT EXISTS `checkpoint4`.`projet_techno` (
        `id_projet` INT NOT NULL,
        `id_techno` INT NOT NULL,
        INDEX `id_projet_idx` (`id_projet` ASC) VISIBLE,
        INDEX `id_techno_idx` (`id_techno` ASC) VISIBLE,
        CONSTRAINT `id_projet` FOREIGN KEY (`id_projet`) REFERENCES `checkpoint4`.`projet` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `id_techno` FOREIGN KEY (`id_techno`) REFERENCES `checkpoint4`.`techno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-------------------------------------------------------

INSERT INTO
    `profil` (`nom`, `prenom`, `bio`, `photo`)
VALUES (
        `pichaud`,
        `guillaume`,
        `A fullstack Web Developer building the Frontend and the Backend of Websites and Web Apllications that leads to the succes of your product
`,
        `https://i.imgur.com/G0b6ldn.png`
    );

-------------------------------------------------------

INSERT INTO
    projet (
        `nom`,
        `photo`,
        `description`,
        `lien`
    )
VALUES (
        `Le Nez Dans Les Lettres`,
        `https://i.imgur.com/zEo757d.jpg`,
        `Notre premier projet réalisé à la Wild Code School de Nantes. Nous avions pour mission de concevoir un site vitrine statique pour une librairie de quartier. Nous devions respecter un cahier des charges graphiques et le site devait être responsive (adaptable aux téléphones et tablettes). Notre groupe pour ce projet : Naomi Santos, Philippe Berra, Jonathan Scattolini, Daniel Gomez Rodríguez et moi-même. Nous avons uniquement utilisés du HTML, CSS et Javascript pour ce dernier. Pour ma part, j'ai conçu le wireframe via Whimsical et je me suis occupé des sections 'Qui Suis-Je' et 'Ma séléction'. Nous avons aussi eu l'occasion d'utiliser Git et GitHub pour ce projet.`,
        `https://phildev777.github.io/Bibliotheque/`
    );

--------------------------------------------------------
INSERT INTO
    projet (
        `nom`,
        `photo`,
        `description`,
        `lien`
    )
VALUES (
        `WildMovies`,
        `https://i.imgur.com/UIBmfU2.png`,
        `Voici notre deuxième projet à la Wild Code School : la conception d'un site dynamique utilisant une Api. Pour ceux qui ne saurait pas de quoi il retourne, une Api (Application Programming Interface) est une interface logiciel à un autre logiciel, qui dans le cas choisi ici, permets de se connecter à une base de donnée. Nous avons choisi une base de donnée sur les films et les séries The Movie DataBase. Notre projet était de permettre à l'utilisateur de faire une recherche de film, série, acteur ou membre d'équipe technique et de le afficher un ensemble de données (tels que le titre, durée, genre, synopsis, possibilité de regarder la bande annonce, ...). Nous indiquons également s'il est possible de regarder le film ou la série sur une des quatres principales plateforme de streaming en France (Amazon, Netflix, Disney ou Canal+), avec un lien vers celle-ci. Nous avons réalisé le site en utilisant le librairie React et le préprocesseur Sass. J'ai pour ma part créer le wireframe via Whimsical et la maquette version mobile sur Figma. Je me suis occuper de la création de la page affichée lors de la sélection d'un film ou d'une série. Je tiens à remercier mon équipe pour ce projet Adam Giromanay, Jonathan Scattolini, Thibaud Brault et Vincent ROUGET. Ce fut un réel plaisir de travailler avec eux sur celui-ci.`,
        `https://wild-movies.netlify.app/`
    );