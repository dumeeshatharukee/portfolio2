import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Copyright © {new Date().getFullYear()} | All Rights Reserved by Dumeesha Tharukee</p>
        <p>Located in Diyagama, Sri Lanka</p>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63414.190443729654!2d79.98701940613724!3d6.598745010573776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2360c0408e6e3%3A0x10b588453b27d19c!2sDiyagama!5e0!3m2!1sen!2slk!4v1730116993424!5m2!1sen!2slk"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;