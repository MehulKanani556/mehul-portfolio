import React, { useState } from 'react';
// import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <section className=" contact scroll-animate" id="Contact">
            <div className="contact-container">

            <h1 className='title'>Contact Me</h1>
            <p>Let's get in touch and make magic together!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            </div>

        </section>
    );
};

export default Contact;
