import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [phoneNumber, setNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message, phoneNumber }),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
            setNumber('');
        } else {
            setStatus('Failed to send message.');
        }
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <p>Send me a message if you like the website and would like one of your own! Rates and what they purchase below.</p>
                <p>
                    <strong>Simple Website:</strong> $50/hr
                    <ul>
                        <li><strong>Number of Pages:</strong> Fewer pages (typically 1-10).</li>
                        <li><strong>Design:</strong> Basic design, using standard templates with minimal customization.</li>
                        <li><strong>Functionality:</strong> Limited functionality; mainly static content with simple forms (e.g., contact forms).</li>
                        <li><strong>Interactivity:</strong> Minimal interactivity; basic user interactions like form submissions and simple navigation.</li>
                        <li><strong>Content Management:</strong> Basic or no content management system (CMS) integration.</li>
                        <li><strong>Examples:</strong> Personal blogs, small business websites, portfolios, landing pages.</li>
                    </ul>
                </p>
                <p>
                    <strong>Complex Website:</strong> $100/hr
                    <ul>
                        <li><strong>Number of Pages:</strong> Larger number of pages (10+).</li>
                        <li><strong>Design:</strong> Custom and intricate design with unique layouts and significant graphic design work.</li>
                        <li><strong>Functionality:</strong> Advanced functionality; dynamic content, user authentication, databases, and integrations with external APIs.</li>
                        <li><strong>Interactivity:</strong> High level of interactivity; features like user accounts, e-commerce, real-time updates, interactive dashboards, etc.</li>
                        <li><strong>Content Management:</strong> Robust CMS integration or custom-built content management solutions.</li>
                        <li><strong>Examples:</strong> E-commerce sites, social networking sites, large corporate websites, web applications, content-heavy sites with user-generated content.</li>
                    </ul>
                </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input 
                        type="tel" 
                        value={phoneNumber}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="123-456-7890"
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default ContactForm;
