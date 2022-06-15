import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'><i className='fas fa-hiking'></i><span>Marche</span></li>
                <li className='hobby'><i className='fas fa-rocket'></i><span>Espace</span></li>
                <li className='hobby'><i className='fas fa-camera'></i><span>Cinéma</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;