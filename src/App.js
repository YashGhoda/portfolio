import React, { useState, useEffect } from 'react';
import './App.css';
import htmlLogo from './assets/html.svg';
import jsLogo from './assets/javascript.svg';
import reactLogo from './assets/react.svg';
import nodeLogo from './assets/node.svg';
import expressLogo from './assets/express.svg';
import mongodbLogo from './assets/mongodb.svg';
import sqlLogo from './assets/mysql.svg';
import cssLogo from './assets/css.svg';
import pythonLogo from './assets/python.svg';
import paper from './assets/paper.png';
import aiquizzer from './assets/aiquizzer.png';
import aiResumeChecker from './assets/airesumechecker.png';
import youtubebackend from './assets/youtubebackend.png';
import hero from './assets/hero.png';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App beautiful-bg ${theme}`}>
      <Analytics />
      <header className="hero-section">
        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        <div className="hero-content">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Profile" className="profile-img" />
          <div>
            <h1>Yash A Ghoda</h1>
            <p className="subtitle">Full Stack Developer & Problem Solver</p>
            <div className="hero-buttons">
              <a href="#projects" className="cta-btn">View My Work</a>
              <a href="/resume.pdf" download className="cta-btn secondary">Download Resume</a>
            </div>
          </div>
        </div>
      </header>
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
         I'm a passionate Backend Developer and AI enthusiast with hands-on experience in building scalable web applications and intelligent systems. I love solving real-world problems through technology, whether it's creating robust APIs, designing efficient database structures, or integrating AI into everyday solutions.
         Currently, I'm focused on developing projects that combine backend engineering with smart automation, helping users simplify complex tasks. I'm always eager to learn new technologies, collaborate on exciting projects, and take on challenging roles in the tech industry.
        </p>
      </section>
      <section className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill"><img src={htmlLogo} alt="HTML" /><span>HTML</span></div>
          <div className="skill"><img src={cssLogo} alt="CSS" /><span>CSS</span></div>
          <div className="skill"><img src={jsLogo} alt="JavaScript" /><span>JavaScript</span></div>
          <div className="skill"><img src={pythonLogo} alt="Python" /><span>Python</span></div>
          <div className="skill"><img src={reactLogo} alt="React" /><span>React</span></div>
          <div className="skill"><img src={nodeLogo} alt="Node.js" /><span>Node.js</span></div>
          <div className="skill"><img src={expressLogo} alt="Express" /><span>Express</span></div>
          <div className="skill"><img src={mongodbLogo} alt="MongoDB" /><span>MongoDB</span></div>
          <div className="skill"><img src={sqlLogo} alt="SQL" /><span>SQL</span></div>
        </div>
      </section>
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={aiquizzer} alt="AI-Quizzer" className="project-img" />
            <h3>AI-Quizzer</h3>
            <p>An AI-driven quiz platform that generates topic-based quizzes and adapts difficulty based on user performance history. It helps users practice effectively and plans to include a hint feature for guided learning.</p>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">View Project</a> */}
          </div>
          <div className="project-card">
            <img src={aiResumeChecker} alt="AI-Resume Checker" className="project-img" />
            <h3>AI-Resume Checker</h3>
            <p>An AI-powered resume screening platform that analyzes resumes against job descriptions and evaluates relevance. It provides users with actionable feedback, score-based analysis, and plans to integrate personalized resume improvement suggestions soon.</p>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">View Project</a> */}
          </div>
          <div className="project-card">
            <img src={youtubebackend} alt="YouTube-Type Backend System" className="project-img" />
            <h3>YouTube-Type Backend System</h3>
            <p>A backend system for handling user-uploaded videos, managing video metadata, and supporting streaming functionality. It ensures smooth video delivery, user authentication, and plans to include a recommendation system based on viewing history.</p>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">View Project</a> */}
          </div>
        </div>
      </section>
      <section className="internship-section" id="internships">
        <h2>Internships</h2>
        <div className="internship-item">
          <h3>MERN Stack Developer Intern</h3>
          <p><strong>Brainybeam Infotech</strong> | May 2025 - June 2025</p>
          <ul>
            <li>Developed and maintained scalable APIs for a high-traffic web application.</li>
            <li>Collaborated with the team to design and implement new database schemas.</li>
            <li>Optimized application performance, reducing API response times by 20%.</li>
          </ul>
        </div>
        <div className="internship-item">
          <h3>Research Intern</h3>
          <p><strong>Charusat University</strong> | May 2024 - July 2024</p>
          <ul>
            <li>Focuses on restoring blurred images using deep learning-based deconvolution methods. The study leverages DCGAN (Deep Convolutional Generative Adversarial Network) to reconstruct sharper images from degraded inputs.</li>
            <li>The study demonstrates the potential of GANs in image restoration tasks, providing a robust framework for image enhancement and restoration.</li>
          </ul>
        </div>
      </section>
      <section className="research-section" id="research">
        <h2>Research Publications</h2>
        <div className="research-card">
          <img src={paper} alt="Research Paper" className="research-img" />
          <div className="research-content">
            <h3>Image Deconvolution Using Deep Learning Techniques</h3>
            <p>This research focuses on restoring blurred images using deep learning-based deconvolution methods. The study leverages DCGAN (Deep Convolutional Generative Adversarial Network) to reconstruct sharper images from degraded inputs. By training the model on blurred-clear image pairs, the system learns to generate high-quality, deblurred outputs, demonstrating the potential of GANs in image restoration tasks.</p>
            <a href="/paper.pdf" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read Paper</a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Yash A Ghoda. All rights reserved.</p>
          <div className="footer-socials">
            Contact me on:<a href="https://www.linkedin.com/in/yashaghoda/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            <a href="mailto:yashaghoda@gmail.com">
              <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
