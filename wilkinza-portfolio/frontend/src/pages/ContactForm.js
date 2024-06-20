import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phoneNumber: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '', phoneNumber: '' });
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
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input 
                        type="tel" 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="123-456-7890"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
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
