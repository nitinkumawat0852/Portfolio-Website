import React from 'react';
import './Hero.css'
import profile from '../../Assets/Untitled design (1).png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Hero() {
    return (
        <div id='home' className='hero'>
            <img src= {profile}/>
            <h1><span>I'm Nitin Kumawat </span> , frontend devloper based in India.</h1>
            <p>A Frontend Developer builds the visual and interactive parts of websites and web applications using technologies like HTML, CSS, and JavaScript. and performance, ensuring everything looks good and works smoothly on different devices and browsers.</p>
            <div className='hero-action'>
                <div className='hero-connect'>
                   <AnchorLink className="anchor-link" offset={50} href="#contact"> Connect with me</AnchorLink> 
                </div>
                <div className='hero-resume'>My Resume</div>
            </div>
        </div>
    );
}

export default Hero;