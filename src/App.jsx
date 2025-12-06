import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="profile-section">
            <div className="profile-image">
              <div className="avatar">WR</div>
            </div>
            <div className="profile-info">
              <h1>Wahid Rahmani</h1>
              <p className="title">Full Stack Developer</p>
              <div className="contact-info">
                <a href="mailto:wahid@example.com" className="contact-link">
                  📧 wahid@example.com
                </a>
                <a href="tel:+1234567890" className="contact-link">
                  📱 +1 (234) 567-890
                </a>
                <a href="https://github.com/wahidrahmani" className="contact-link" target="_blank" rel="noopener noreferrer">
                  💻 GitHub
                </a>
                <a href="https://linkedin.com/in/wahidrahmani" className="contact-link" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="section">
            <h2>About</h2>
            <p>
              Passionate full stack developer with expertise in modern web technologies. 
              Dedicated to creating efficient, scalable, and user-friendly applications.
            </p>
          </section>

          <section className="section">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Senior Full Stack Developer</h3>
              <p className="company">Tech Company Inc. | 2020 - Present</p>
              <ul>
                <li>Developed and maintained web applications using React, Node.js, and PostgreSQL</li>
                <li>Led a team of 5 developers in agile development practices</li>
                <li>Improved application performance by 40% through optimization</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Full Stack Developer</h3>
              <p className="company">StartupXYZ | 2018 - 2020</p>
              <ul>
                <li>Built responsive web applications from scratch</li>
                <li>Implemented RESTful APIs and database schemas</li>
                <li>Collaborated with cross-functional teams to deliver high-quality products</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">University Name | 2014 - 2018</p>
              <p>Graduated with honors, specialized in Software Engineering</p>
            </div>
          </section>

          <section className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">Agile</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Projects</h2>
            <div className="project-item">
              <h3>E-Commerce Platform</h3>
              <p>Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
            <div className="project-item">
              <h3>Task Management App</h3>
              <p>Collaborative task management application with real-time updates and team collaboration features.</p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Wahid Rahmani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

