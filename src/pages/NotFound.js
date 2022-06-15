import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <img src='../medias/john-travolta-nba-GIF-unscreen.gif' alt='page introuvable'/>
                <h2>Pardon, je me suis perdu...</h2>
                <NavLink to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;