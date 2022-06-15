import React from 'react';

const Experiences = () => {
    return (
        <div className='experience'>
            <h3>Expérience</h3>
            <div className='exp1'>
                <h4>Développeur web</h4>
                <h5>2021-2022</h5>
                <p>Création d'un site internet avec l'utilisation de l'API de la nasa. L'utilisateur peut découvrir chaque jour une nouvelle image issue de la base de donnée de la nasa avec un descriptif de l'image du jour. Réalisé avec ReactJs</p>
            </div>
            <div className='exp2'>
                <h4>Développeur web</h4>
                <h5>2021-2022</h5>
                <p>Nouvelle application web avec une API sur les pays. Affichage de chaque drapeaux. L'utilisateur peut choisir le nombre de pays à afficher, et selon les continents qu'il souhaite voir. En cliquant sur un drapeau on découvre le nom du pays, sa capitale et son nombre d'habitants. Réalisé avec ReactJs</p>
            </div>
            <div className='exp3'>
                <h4>Développeur web</h4>
                <h5>2021-2022</h5>
                <p>Un réseau social personnel, réalisé avec ReactJs et Redux pour le frontend, NodeJs et Express pour le backend. Site pour suivre l'actualité d'autres personnes du réseau social, partage de photos, de vidéos ou de message</p>
            </div>
        </div>
    );
};

export default Experiences;