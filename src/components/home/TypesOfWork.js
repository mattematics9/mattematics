import React, { useEffect } from 'react';
import WebsiteDesign from '../../img/website-design.jpg'
import App from '../../img/app.jpg'
import Bitcoin from '../../img/bitcoin.jpg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchPage } from '../../redux/actions';


const TypesOfWork = ({dispatch}) => {

    useEffect(() => {
        const scrollspy = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scrollspy);
    },[])

    const handleClick = () => {
        dispatch(switchPage('work'))
    }

  return(
        <div className="container section scrollspy" id="typesOfWork">
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col s12 l4">
                    <img src={WebsiteDesign} alt="Website Design Pic" className="responsive-img"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <h2 className="indigo-text text-darken-4">Website Design</h2>
                    <p>A good design will guide the eye of a website's users and keep them engaged and wanting to stay.  We love to help companies develop and showcase their brand and best attributes so customers keep coming back.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 push-l7">
                    <img src={App} alt="App Pic" className="responsive-img"/>
                </div>
                <div className="col s12 l6 pull-l4 right-align">
                    <h2 className="indigo-text text-darken-4">Web Apps</h2>
                    <p>Create a website with greater functionality: user logins, social media, forums, e-commerce, data visualzation, and much much more.  There is no limit to what can be created!</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4">
                    <img src={Bitcoin} alt="Bitcoin Pic" className="responsive-img"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <h2 className="indigo-text text-darken-4">Crypto/Web3</h2>
                    <p>Cryptocurrencies and applications that utilize blockchain technology to bring value and functionality in a dentralized way.  We would love to explore with you this new evergrowing technology and help build the next wave of the internet.</p>
                </div>
            </div>
            <div className='center' style={{marginTop: '40px'}}><Link onClick={handleClick} className="btn-large view-work-btn" to='/work'>VIEW WORK</Link></div>
        </div>

  )
};

const mapDispatchToProps = (dispatch) => {
    return{dispatch}
}

export default connect(null, mapDispatchToProps)(TypesOfWork);
