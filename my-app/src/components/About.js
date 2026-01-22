import React from 'react';
import styles from './About.module.css';
import DumeeImage from '../Images/tharukee.jpg'; 

function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={DumeeImage} alt="Dumeesha Tharukee" />
        </div>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Fullstack Developer & UI/UX Designer</h3>
          <p className={styles.description}>
           I'm Dumeetha Tharukee, an enthusiastic and dedicated undergraduate student at the Institute of Technology, University of Moratuwa,pursuing a diploma in IT with a focus on Full Stack Development.
           With hands-on experience in both front-end and back-end technologies. My foundation in software development practices allows me to approach challenges with a structured mindset and deliver efficient, real-world solutions. 
           I’m always eager to learn, grow, and contribute to innovative tech-driven projects that make a difference.
          </p>
                  Technical Skills

                    <li>Front-End Development:

                        HTML5, CSS3, JavaScript

                        React.js, Bootstrap, Tailwind CSS

                        Responsive Web Design, UI/UX (Figma)</li>

                    <li>Back-End Development:

                        Node.js,Springboot,Express.js

                        RESTful APIs,

                        PHP</li>

                    <li> Database Management:

                        MySQL, MongoDB

                        phpMyAdmin</li>

        </div>
      </div>
    </section>
  );
}

export default About;