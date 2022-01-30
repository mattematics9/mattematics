import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'
import { connect } from 'react-redux'
import { switchPage } from '../../redux/actions';

const Navbar = ({page, dispatch}) => { 

    useEffect(() => {
        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, [])

    useEffect(() => {
        page = page === ''? 'home': page;
        document.getElementById(`${page}-link`).className = 'active-nav-link'; 
    }, [page])


    const handleClick = (e) => {
        let nextPage = e.target.innerText.toLowerCase();
        dispatch(switchPage(nextPage));
    }

    return (
        <>
            <nav className='nav-wrapper'>
                <Link to="#" className="brand-logo" style={{marginLeft: "30px"}}>MATTEMATICS</Link>
                <Link to="#" className="sidenav-trigger" data-target="mobile-nav">
                    <i className="material-icons">menu</i>
                </Link>
                <ul className='right hide-on-med-and-down'>
                    <li onClick={handleClick} id='home-link'><Link to='/'>HOME</Link></li>
                    <li onClick={handleClick} id='about-link'><Link to='/about'>ABOUT</Link></li>
                    <li onClick={handleClick} id='work-link'><Link to='/work'>WORK</Link></li>
                    <li onClick={handleClick} id='contact-link'><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </nav>
            <MobileNav/>
        </>
    );
};


const mapStateToProps = (state) => {
    return{
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return{dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

