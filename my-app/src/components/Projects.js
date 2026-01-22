import React from 'react';
import styles from './Projects.module.css';
import WebImage from '../Images/smartmed.png.jpeg'; 
import WebImage1 from '../Images/Web.png'; 
import WebImage2 from '../Images/quiz.jpg';
import WebImage3 from '../Images/Conference.jpg';
import AppImage1 from '../Images/weather.png';
import AppImage2 from '../Images/fruits.jpg';
import UIUXImage1 from '../Images/Food.jpg';
import UIUXImage2 from '../Images/Cloth.jpg';

const projects = [
 

  {
  type: 'Web Development',
  description: 'SMARTMED Final Project (Group)',
  shortDescription: 'Developed a web-based healthcare system to digitalize student records, enable QR-based identification, telemedicine, and pharmacy integration — improving data access, efficiency, and reducing paper use.',
  image: WebImage,
  repoLink: 'https://github.com/Dhanuka2002/SmartMed-Frontend.git',
}
,
{
  type: 'App Development',
  description: ' Real-Time Weather Dashboard Project',
  shortDescription: 'Developed an end-to-end full-stack real-time weather dashboard with automatic data updates every 1minute. Implemented a RESTful backend API using Node.js .Deployed the backend on Railway andAS EC2 (Ubuntu t3.micro) with PM2 for process management and configured AWS security groups.',
  image: AppImage1,
  repoLink: 'https://github.com/dumeeshatharukee/weather-dashboard.git',
},

  {
  type: 'Web Development',
  description: 'Conference Management System',
  shortDescription: 'A platform for managing conference schedules, registrations, and speaker details.I Used HTML,CSS  and Javascript technologies.',
  image: WebImage3,
  repoLink: 'https://github.com/dumeeshatharukee/Conference-Management-System.git',
}
,
  
  {
  type: 'Web Development',
  description: 'Portfolio website built with React',
  shortDescription: 'A personal portfolio showcasing my projects and skills using React.js.',
  image: WebImage1,
  repoLink: 'https://github.com/CpoohZchala/My-Portfolio-React-Project',
},
{
  type: 'Web Development',
  description: 'Quiz Web App',
  shortDescription: 'A React-based quiz application with multiple-choice questions and score tracking.I used React.js for build in this web app.',
  image: WebImage2,
  repoLink: 'https://github.com/dumeeshatharukee/Quiz-App.git',
},

  
{
  type: 'App Development',
  description: 'Fruits Selling E-commerce Website',
  shortDescription: 'Designed a responsive e-commerce site with a modern navbar, hero section, engaging animations, fullresponsiveness, and best practices implementation',
  image: AppImage2,
  repoLink: 'https://github.com/dumeeshatharukee/Fruits-E-commerce-Website-with-Frame-Motion.git',
},
  
  {
  type: 'UI/UX Design',
  description: 'Food Delivery App',
  shortDescription: 'A modern and intuitive UI design for a food ordering and delivery mobile app.',
  image: UIUXImage1,
  repoLink: 'https://www.figma.com/design/7Nn0Ih32gudiZpk8jBwwnH/Untitled?node-id=0-1&p=f&t=8vSgZQ3pbOWVviys-0',
},
{
  type: 'UI/UX Design',
  description: 'Clothing App Design',
  shortDescription: 'A stylish and responsive app UI for browsing and shopping clothes online.',
  image: UIUXImage2,
  repoLink: 'https://www.figma.com/design/lWq3OqCSVTCwhYNBf371Rd/Untitled?t=8vSgZQ3pbOWVviys-0',
}

];

function Projects() {
  const webProjects = projects.filter(project => project.type === 'Web Development');
  const appProjects = projects.filter(project => project.type === 'App Development');

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
      
      {/* First Row: Web Projects */}
<div className={styles.projectRow}>
  {webProjects.map((project, index) => (
    <div key={index} className={styles.projectItem}>
      <img 
        src={project.image} 
        alt={project.description} 
        className={styles.projectImage} 
      />
      
      <p className={styles.projectDescription}>{project.description}</p>
      
      {/* Add short description below main description */}
      <p className={styles.projectShortDescription}>{project.shortDescription}</p>
      
      <button 
        className={styles.viewButton} 
        onClick={() => window.open(project.repoLink, '_blank')}
      >
        View on GitHub
      </button>
    </div>
  ))}
</div>

        
  
     {/* Second Row: App Projects */}
<div className={styles.projectRow}>
  {appProjects.map((project, index) => (
    <div key={index} className={styles.projectItem}>
      <img 
        src={project.image} 
        alt={project.description} 
        className={styles.projectImage} 
      />
      
      <p className={styles.projectDescription}>{project.description}</p>
      
      {/* Add this line to show the short description */}
      <p className={styles.projectShortDescription}>{project.shortDescription}</p>
      
      <button 
        className={styles.viewButton} 
        onClick={() => window.open(project.repoLink, '_blank')}
      >
        View on LinkedIn
      </button>
    </div>
  ))}
</div>

     
      {/* UI/UX Design Projects Row */}
<h3 className={styles.title}>UI/UX Design Projects</h3>
<div className={styles.projectRow}>
  {projects
    .filter(project => project.type === 'UI/UX Design')
    .map((project, index) => (
      <div 
        key={index} 
        className={styles.projectItem} 
        onClick={() => window.open(project.repoLink, '_blank', 'noopener,noreferrer')}
        style={{ cursor: 'pointer' }}
      >
        <img src={project.image} alt={project.description} className={styles.projectImage} />
        <h4 className={styles.projectTitle}>{project.description}</h4>
        <p className={styles.projectShortDescription}>{project.shortDescription}</p>
        <button 
          className={styles.viewButton} 
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            window.open(project.repoLink, '_blank', 'noopener,noreferrer');
          }}
        >
          View on Figma
        </button>
      </div>
    ))}
</div>


    </section>
  );
}

export default Projects;