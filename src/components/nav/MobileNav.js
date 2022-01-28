import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const MobileNav = (props) => {

    useEffect(() => {    
        document.getElementById(`mobile-${props.activeLink}-link`).className = 'active-mobile-nav-link';   
    }, [props.activeLink])

    const handleClick = (e) => {
        document.getElementById(`mobile-${props.activeLink}-link`).className = '';
        document.getElementById(`${props.activeLink}-link`).className = '';
        props.setActiveLink(e.target.innerText.toLowerCase());        
    }

    return (
        <div>
            <ul className="sidenav" id="mobile-nav">
                <li onClick={handleClick} id='mobile-home-link'><Link to='/'>HOME</Link></li>
                <li onClick={handleClick} id='mobile-about-link'><Link to='/about'>ABOUT</Link></li>
                <li onClick={handleClick} id='mobile-work-link'><Link to='/work'>WORK</Link></li>
                <li onClick={handleClick} id='mobile-developers-link'><Link to='/developers'>DEVELOPERS</Link></li>
                <li onClick={handleClick} id='mobile-contact-link'><Link to='/contact'>CONTACT</Link></li>
            </ul>
        </div>
    )
};

export default MobileNav;
