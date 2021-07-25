import React from 'react'
import logo from './images/ALAT.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='f-logo'>
                <img alt='logo' src={logo}/>
            </div>
            <div>Make something awesome.</div>
        </div>
    )
}

export default Footer
