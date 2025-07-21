import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <h1>John Doe</h1>
        <p className="subtitle">Full Stack Developer & Problem Solver</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </header>
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in building web applications using React, Node.js, and modern web technologies. I love solving problems and creating beautiful, performant user experiences.
        </p>
      </section>
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A modern web app for managing tasks efficiently.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Portfolio website with a sleek, responsive design.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>
      <section className="skills-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express</div>
          <div className="skill">JavaScript</div>
          <div className="skill">HTML & CSS</div>
        </div>
      </section>
      <section className="resume-section" id="resume">
        <h2>Resume</h2>
        <a href="/resume.pdf" download className="resume-btn">Download My Resume</a>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
