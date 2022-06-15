import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./medias/profil.jpg' alt=''/>
                    <h3>Jean-Baptiste</h3>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className="fas fa-home"><span>Accueil</span></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/competences">
                            <i className="fas fa-mountain"><span>Compétences</span></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                            <i className="fas fa-images"><span>Portfolio</span></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/jean-baptiste-lafont-7b1b97130/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/Bapt07' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>Baptman - 2022 </p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;