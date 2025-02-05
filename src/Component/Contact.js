import React, { useState } from 'react';
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack
// import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const { enqueueSnackbar } = useSnackbar(); // Initialize enqueueSnackbar

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send form data to Google Sheets
        const response = await fetch('https://script.google.com/macros/s/AKfycbxjjMXbF9TDx_nDGwh073FQIUgKcbfBihaPYhgWC_HIvo_Q4-8pO5Tvmj_GSfTGrLAy/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            mode: 'no-cors'
        });
        console.log(response)

        if (response) {
            console.log('Data sent successfully');
            enqueueSnackbar('Your message has been sent successfully!', { variant: 'success' }); // Show success notification
            // Optionally reset the form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        } else {
            enqueueSnackbar('Error sending message. Please try again.', { variant: 'error' }); // Show error notification
            console.error('Error sending data');
        }
    };

    return (
        <section className="contact scroll-animate" id="Contact">
            <div className="contact-container">

                <h1 className='title' style={{ marginTop: '20px' }}>Contact Me</h1>
                <p>Let's get in touch and make magic together!</p>
                <form className='p-3' onSubmit={handleSubmit}>
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
                    <button type="submit" className='mt-4'>Send Message</button>
                </form>
            </div>

        </section>
    );
};

export default Contact;