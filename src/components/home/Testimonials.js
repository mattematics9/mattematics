import React, { useEffect } from 'react';
import Earth from '../../img/earth.jpg'

const Testimonials = () => {

    useEffect(() => {
        const parallaxs = document.querySelectorAll('.parallax');
        M.Parallax.init(parallaxs, {});
    }, [])

    return(
        <div id='testimonials'>
            <div className='row' style={{paddingBottom: '50px'}}>
                <div className='col s12 l4'>
                    <blockquote>
                        "Lorem ipsum dolor sit amet, scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."
                        <cite>-Some Guy</cite>
                    </blockquote>                
                </div>
                <div className='col s12 l4'>
                    <blockquote>
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua." 
                        <cite>-The Dude</cite>
                    </blockquote>
                </div>
                <div className='col s12 l4'>
                    <blockquote>
                        "ut labore et dolore magna aliqua. Ut enim ad minim veniam, ris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        <cite>-Shorty</cite>
                    </blockquote>
                </div>
            </div>
        </div>

        
    ) 
};

export default Testimonials;

        {/* <div className="testimonials">
            <h2 id="heading-testimonials-page">WHAT OUR MEMBERS HAVE TO SAY</h2>
            <div className="row testimonials-first-row">
                <div className="col span-1-of-3">
                    <blockquote>
                        This club means the world to me and has helped shape me into the person and player I am today. It has provided a professional environment to develop my play, given me so many friends, and most importantly has become part of my family.
                        <cite><img src="resources/img/andrew-tinari.jpg">Andrew Tinari<br><br>- Professional Soccer Player for the Tampa Bay Rowdies</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                        LGN is the best! Over the years I have watched my three boys progress more than I could have imagined.  The trainers are so knowledgeable and great with children! I am so happy I found a second home for my kids to learn values and develop as soccer players.
                        <cite><img src="resources/img/telma.jpg">Telma Velasquez<br><br>- LGN Parent</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                        The competitive and hard working environment that this club creates helped develop my character and prepared me to be a D1 athlete.  The coaches are sincerely invested in the success of their players, on and off the field.  Moving to LGN was one of the best decisions I ever made.
                        <cite><img src="resources/img/jillian.jpg">Jillian Colucci<br><br>- D1 College Soccer Player at Marist Univerity</cite>
                    </blockquote>
                </div>
            </div>
            <div className="row testimonials-second-row">
                <div className="col span-1-of-3">
                    <blockquote>
                        This club was a big part of my growth as a player and as a person.  It not only provided me with a competitive learning environment, but the coaches always pushed me and helped me focus on what I wanted. I have created bonds with my teamates who are now my friends still today.  
                        <cite><img src="resources/img/jake-barros.jpg">Jake Barros<br><br>- Professional Soccer Player for Ethnikos Assias</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                        Jessica's journey started at LGN at the age of 5.  She was very passionate early on.  She is committed, dedicated, and always excited to take on any challenge that comes her way.  The trainers here at LGN are excellent.  They really connect with her and help all the players grow on an individual and team level.  Anthony pushes her to be a better player.  She has had so many great opportunities and experiences here with this club and we are looking forward to see what this year will bring for her and her team.  
                        <cite><img src="resources/img/brian-patanjo.jpg">Brian Patanjo<br><br>- LGN Parent</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>
                        Lake Grove helped evolve my soccer skills as well as my character.  I am a D1 athlete today due to the training and opportunities this club has provided for me.  They are now my family and I know I can still count on them in my future endeavors.
                        <cite><img src="resources/img/amanda.jpg">Amanda Spitaleri<br><br>- D1 College Soccer Player at Bryant University</cite>
                    </blockquote>
                </div>
            </div>
        </div> */}
