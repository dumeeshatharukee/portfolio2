import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data sent successfully');
      
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Error sending form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className={styles.submitButton} type="submit">Send</button>
      </form>
      <div className={styles.contactInfo}>
        <p>Phone: 0702227507</p>
        <p>Email: ng.dumeeshatharukee@gmail.com</p>
        <p>Location: Colombo , Sri Lanka</p>
      </div>
    </section>
  );
}

export default Contact;