import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchPage } from '../../redux/actions';

const MobileNav = ({page, dispatch}) => {

    useEffect(() => {
        page = page === ''? 'home': page;
        document.getElementById(`mobile-${page}-link`).className = 'active-mobile-nav-link';
    }, [page])

    const handleClick = (e) => {
        let nextPage = e.target.innerText.toLowerCase();
        dispatch(switchPage(nextPage));
    }

    return (
        <div>
            <ul className="sidenav" id="mobile-nav">
                <li onClick={handleClick} id='mobile-home-link'><Link to='/'>HOME</Link></li>
                <li onClick={handleClick} id='mobile-about-link'><Link to='/about'>ABOUT</Link></li>
                <li onClick={handleClick} id='mobile-work-link'><Link to='/work'>WORK</Link></li>
                <li onClick={handleClick} id='mobile-contact-link'><Link to='/contact'>CONTACT</Link></li>
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        page: state.page
    }
}

const mapDispatchToProps = dispatch => {
    return{dispatch}
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
