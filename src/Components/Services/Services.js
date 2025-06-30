import React from 'react';
import './Services.css'
import theme_parrten from '../../Assets/about.svg'
function Services() {
    return (
        <div className='servies'>
            <div className='servies-title'>
                <h1>My Services</h1>
                <img src={theme_parrten}/>
            </div>
        </div>
    );
}

export default Services;