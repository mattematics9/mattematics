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
                <div className="col s12 l6">
                    <h2 className="indigo-text text-darken-4">Website Design</h2>
                    <p>Boost sales by hightlighting your company's best attributes!  A great design captures the users attention and maximizes time spent on your site.</p>
                </div>
                <div className="col s12 l4 push-l1">
                    <img src={WebsiteDesign} alt="Website Design Pic" className="responsive-img"/>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l6 offset-l1 push-l5" id='typesOfWork-middle-text'>
                    <h2 className="indigo-text text-darken-4">Web Apps</h2>
                    <p>Add functionality and user interaction to your website: user logins, social media, forums, e-commerce, data visualzation, and much much more.  Nothing is too complex!</p>
                </div>
                <div className="col s12 l4 pull-l6">
                    <img src={App} alt="App Pic" className="responsive-img"/>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l6">
                    <h2 className="indigo-text text-darken-4">Crypto/Web3</h2>
                    <p>Cryptocurrencies and decentralized applications utilizing blockchain technology.  Would love to explore with you this rapidly growing field and help build the next wave of the web.</p>
                </div>
                <div className="col s12 l4 push-l1">
                    <img src={Bitcoin} alt="Bitcoin Pic" className="responsive-img"/>
                </div>
            </div>
            <div className='center' style={{marginTop: '40px'}}><Link className="btn-large view-work-btn" to='/work'>VIEW WORK</Link></div>
        </div>

  )
};

export default TypesOfWork
