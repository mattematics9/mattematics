import React, { useEffect } from 'react';
import WebsiteDesign from '../../img/website-design.jpg'
import App from '../../img/app.jpg'
import Bitcoin from '../../img/bitcoin.jpg'
import { Link } from 'react-router-dom'

const TypesOfWork = () => {

    useEffect(() => {
        const scrollspy = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scrollspy);
    },[])

  return(
        <div className="container section scrollspy" id="typesOfWork">
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col s12 l4">
                    <img src={WebsiteDesign} alt="Website Design Pic" className="responsive-img"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <h2 className="indigo-text text-darken-4">Website Design</h2>
                    <p>A good design highlights a companies best attributes and guides the eye of their users, making it effortless to navigate the website.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l7">
                    <img src={App} alt="App Pic" className="responsive-img"/>
                </div>
                <div className="col s12 l6 pull-l4 right-align" id='typesOfWork-middle-text'>
                    <h2 className="indigo-text text-darken-4">Web Apps</h2>
                    <p>Add functionality: user logins, social media, forums, e-commerce, data visualzation, and much much more.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4">
                    <img src={Bitcoin} alt="Bitcoin Pic" className="responsive-img"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <h2 className="indigo-text text-darken-4">Crypto/Web3</h2>
                    <p>Cryptocurrencies and decentralized applications utilizing blockchain technology.  We would love to explore with you this rapidly growing field and help build the next wave of the web.</p>
                </div>
            </div>
            <div className='center' style={{marginTop: '40px'}}><Link className="btn-large view-work-btn" to='/work'>VIEW WORK</Link></div>
        </div>

  )
};

export default TypesOfWork
