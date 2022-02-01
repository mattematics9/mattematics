import React from 'react';
import { Link } from 'react-router-dom'

const WordsToDescribe = () => {
    return (
        <div id='words-to-describe'>
            <div className="row" style={{marginTop: '50px'}}>
                <div className='col s12 l1'></div>
                <div className="center col s12 l3">
                    <h5 style={{marginTop: '24px'}}>WE ARE ALL ABOUT:</h5>
                </div>
                <div className="col s12 l6">
                    <marquee behavior="scroll" direction="left" style={{marginTop: '23px', fontSize: '20px'}}>
                    TEAMWORK <span>&#183;</span> CHALLENGES <span>&#183;</span> PERSEVERANCE <span>&#183;</span> DETAILS <span>&#183;</span> KINDNESS <span>&#183;</span> SOCCER <span>&#183;</span> PING PONG <span>&#183;</span> LARRY DAVID <span>&#183;</span> WAIT, WE GOT OFF TOPIC... CLICK THE "ABOUT" BUTTON TO LEARN MORE.
                    </marquee>     
                </div>
                <div className='center col s12 l2'>
                    <Link className='btn-large about-btn wave-effect' to='/about'>ABOUT</Link>
                </div>
            </div>
            
        </div>
    )
};

export default WordsToDescribe;
