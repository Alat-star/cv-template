import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from './images/ALAT.png';

function Header() {
    return (
        <div className='nav'>
            <div className='logo'>
                <img src={logo} alt='logo-img' />
            </div>
            <div>
                <h3>The Online Resume Builder You Deserve</h3>
                <p>Creating a Professional Resume Has Never Been <b>So Easy</b></p>
            </div>
        </div>
    )
}

export default Header
