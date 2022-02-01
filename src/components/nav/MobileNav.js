import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

const MobileNav = () => {

    const location = useLocation();
    const pathname = location.pathname;
    let page = pathname.substring(1);
    page = page === ''? 'home': page;

    useEffect(() => {
        document.querySelectorAll('.mobile-nav-link').forEach(mobileNavLink => {
            mobileNavLink.className = 'mobile-nav-link';
        })
        document.getElementById(`mobile-${page}-link`).className = 'mobile-nav-link active-mobile-nav-link'; 
    },[page])

    return (
        <div>
            <ul className="sidenav" id="mobile-nav">
                <li className = 'mobile-nav-link' id='mobile-home-link'><Link to='/'>HOME</Link></li>
                <li className = 'mobile-nav-link' id='mobile-about-link'><Link to='/about'>ABOUT</Link></li>
                <li className = 'mobile-nav-link' id='mobile-work-link'><Link to='/work'>WORK</Link></li>
                <li className = 'mobile-nav-link' id='mobile-contact-link'><Link to='/contact'>CONTACT</Link></li>
            </ul>
        </div>
    )
};

export default MobileNav;
