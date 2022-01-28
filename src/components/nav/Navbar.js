import React, {useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

const Navbar = () => {
    
    let queryString = window.location.search === ''? 'home': window.location.search;
    const [activeLink, setActiveLink] = useState(queryString);

    useEffect(() => {
        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, [])

    useEffect(() => {    
        document.getElementById(`${activeLink}-link`).className = 'active-nav-link';   
    }, [activeLink])

    const handleClick = (e) => {
        document.getElementById(`${activeLink}-link`).className = '';
        document.getElementById(`mobile-${activeLink}-link`).className = '';
        setActiveLink(e.target.innerText.toLowerCase());        
    }

    return (
        <>
            <nav className='nav-wrapper'>
                <Link to="/" className="brand-logo" style={{marginLeft: "30px"}}>MATTEMATICS</Link>
                <Link to="" className="sidenav-trigger" data-target="mobile-nav">
                    <i className="material-icons">menu</i>
                </Link>
                <ul className='right hide-on-med-and-down'>
                    <li onClick={handleClick} id='home-link'><Link to='/'>HOME</Link></li>
                    <li onClick={handleClick} id='about-link'><Link to='/about'>ABOUT</Link></li>
                    <li onClick={handleClick} id='work-link'><Link to='/work'>WORK</Link></li>
                    <li onClick={handleClick} id='developers-link'><Link to='/developers'>DEVELOPERS</Link></li>
                    <li onClick={handleClick} id='contact-link'><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </nav>
            <MobileNav activeLink={activeLink} setActiveLink={setActiveLink}/>
        </>
    );
};

export default Navbar;

