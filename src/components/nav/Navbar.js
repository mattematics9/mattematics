import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'

const Navbar = () => { 

    const location = useLocation();
    const pathname = location.pathname;
    let page = pathname.substring(1);
    page = page === ''? 'home': page;

    useEffect(() => {
        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, [])

    useEffect(() => {
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.className = 'nav-link';
        })
        document.getElementById(`${page}-link`).className = 'nav-link active-nav-link'; 
    },[page])

    return (
        <>
            <nav className='nav-wrapper'>
                <Link to="#" className="brand-logo" style={{marginLeft: "30px"}}>MATTEMATICS</Link>
                <Link to="#" className="sidenav-trigger" data-target="mobile-nav">
                    <i className="material-icons">menu</i>
                </Link>
                <ul className='right hide-on-med-and-down'>
                    <li className='nav-link' id='home-link'><Link to='/'>HOME</Link></li>
                    <li className='nav-link' id='about-link'><Link to='/about'>ABOUT</Link></li>
                    <li className='nav-link' id='work-link'><Link to='/work'>WORK</Link></li>
                    <li className='nav-link' id='contact-link'><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </nav>
            <MobileNav/>
        </>
    );
};

export default Navbar;

