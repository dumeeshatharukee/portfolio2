import React from 'react';
import styles from './Hero.module.css';
import DumeeImage from '../Images/tharukee.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Dumeesha Tharukee -Fullstack Developer.pdf';
    link.download = 'Dumeesha Tharukee -Fullstack Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Hi,  welcome to my portfolio!</h1>
        <h2 className={styles.subtitle}>Dumeesha Tharukee</h2>
        <p className={styles.description}>I'm a Full Stack Developer</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/share/19DJ8E19ya/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com/in/dumeesha-tharukee-186599306/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/dumeeshatharukee/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:ng.dumeeshatharukee@gmail.com" className={styles.socialButton}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <button className={styles.downloadButton} onClick={handleDownloadCV}>Download CV</button>
      </div>
      <div className={styles.heroImage}>
        <img src={DumeeImage} alt="Dumeesha Tharukee" />
      </div>
    </section>
  );
}

export default Hero;