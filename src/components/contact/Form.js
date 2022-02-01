import React from 'react';

const Form = () => {
    return(
        <div id='contact-form' className='container scrollspy'>
            <div className='row' style={{paddingTop: '80px', paddingBottom: '50px'}}>
                <div className='col s12 l5'>
                    <h2 className="indigo-text text-darken-4">Get In Touch</h2>
                    <p>We would love to hear from you!  Reach out to us if you are curious about what services we can provide to you or your company.  We believe in positivity and transparency, and are passionate about working with like-minded individuals.</p>
                </div>
                <div className='col s12 l5 offset-l2'>
                    <form action="" style={{marginTop: '50px'}}>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id="email"/>
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">message</i>
                            <textarea id="message" className="materialize-textarea"></textarea>
                            <label for="message">Your Message</label>
                        </div>
                        <div className="input-field center">
                            <button className="btn-large contact-form-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) 
};

export default Form;
