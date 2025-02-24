import React, { useState } from 'react';

export default function About() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contact-my">
                <div className="email">
                    <h3>Email</h3>
                    <p>yogendrabairwa1222  @gmail.com</p>
                </div>
                <div className="phone">
                    <h3>Phone</h3>
                    <p>+91 9351710503</p>
                </div>
                <div className="address">
                    <h3>Address</h3>
                    <p>plot no.1, Govindvihar C, Govindpura, Sanganer, Jaipur, Rajasthan, India (302029)</p>
                </div>
            </div>
            <div className="contact-you">
                <h3>Get In Touch</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Your Name*" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email*" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="tel" 
                        placeholder="Your Phone Number*" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <textarea 
                        placeholder="Your Message*" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
