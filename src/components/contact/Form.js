import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../../firebase/config'

const Form = () => {
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name.length < 40){
            if(message.length > 10 && message.length < 500){
                try {
                    
                    const docRef = await addDoc(collection(db , "users"), {
                        name, name,
                        email: email,
                        message: message
                    });
                    console.log("Document written with ID: ", docRef.id);
                    document.querySelector('form').reset();
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError('');
                    setMessageSent(true);
                    setTimeout(() => {
                      setMessageSent(false);
                    }, 10000)
                } catch (e) {
                    console.error("Error adding document: ", e);
                    setError('could not send the message');
                }
            }else{
                setError('message must be between 10 and 500 characters');
            }
        }else{
            setError('name must be less than 30 characters')
        }
        
    }

    const handleChange = (e) => {
        if(e.target.id === 'contact-form-name'){
            setName(e.target.value);
        }else if(e.target.id === 'contact-form-email'){
            setEmail(e.target.value);
        }else if(e.target.id === 'contact-form-message'){
            setMessage(e.target.value);
        }
    }
    
    return(
        <div id='contact-form-container' className='container scrollspy'>
            <div className='row' style={{paddingTop: '80px', paddingBottom: '50px'}}>
                <div className='col s12 l5'>
                    <h2 className="indigo-text text-darken-4">Spark the conversation</h2>
                    <p>Reach out with any questions regarding what services can be provided to you or your company.  MATTEMATICS believes in positivity and transparency, and would absolutely love to work with like-minded individuals.</p>
                </div>
                <div className='col s12 l5 offset-l2'>
                    <form onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                        <div className="input-field">
                            <i className="material-icons prefix">person</i>
                            <input onChange={handleChange} type="text" id="contact-form-name" value={name} required/>
                            <label htmlFor="contact-form-name">Name</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input onChange={handleChange} type="email" id="contact-form-email" value={email} required/>
                            <label htmlFor="contact-form-email">Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">message</i>
                            <textarea onChange={handleChange} id="contact-form-message" className="materialize-textarea" value={message} required></textarea>
                            <label htmlFor="contact-form-message">Message</label>
                        </div>
                        <div className="input-field center">
                            <button className="btn-large contact-form-btn">Submit</button>
                        </div>
                        <div className="center red-text">{error}</div>
                        {messageSent? <div className="center green-text">Your message has been sent!  Mattematics will contact you shortly.</div>: null}
                    </form>
                </div>
            </div>
        </div>
    ) 
};

export default Form;
