import React from 'react';
import './porto.css';
import { MdHome, MdPerson, MdWork, MdSchool, MdCode, MdContactMail } from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';

const navItems = [
  { id: 'home', icon: <MdHome />, label: 'Home' },
  { id: 'about', icon: <MdPerson />, label: 'About' },
  { id: 'experience', icon: <MdWork />, label: 'Experience' },
  { id: 'education', icon: <MdSchool />, label: 'Education' },
  { id: 'projects', icon: <MdCode />, label: 'Projects' },
  { id: 'contact', icon: <MdContactMail />, label: 'Contact' },
];

const projects = [
  {
    title: 'Adasa Rose Website',
    description:
      'Developed with React 19, Tailwind CSS, Framer Motion, and Vite with a fully responsive, RTL-supported layout and blog features like filtering and pagination.',
    link: 'https://adasa-rose.vercel.app/',
  },
  {
    title: 'Shopsy UI Website',
    description:
      'Built with React (Vite) as a responsive multi-category product layout, including search and cart user interface elements.',
    link: 'https://shopsy-jade.vercel.app/',
  },
  {
    title: 'Planto Website',
    description:
      'Implemented a component-based architecture with interactive UI sections and responsive layout using custom typography and promotional blocks.',
    link: 'https://ahmed-adel23.github.io/planto_website/',
  },
];

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git & GitHub',
  'API Integration',
  'Responsive Web Design',
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Portfolio = () => {
  return (
    <div className="app-container">
      <nav className="floating-dock">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="dock-item"
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
            type="button"
          >
            {item.icon}
            <span className="dock-tooltip">{item.label}</span>
          </button>
        ))}
      </nav>

      <section id="home" className="hero-section py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <h1 className="display-4 fw-bold mb-2">Ahmed Adel Abd Elhameed</h1>
          <p className="lead mb-3">Front-End Developer</p>
          <p className="mb-4" style={{ maxWidth: 800 }}>
            Front-End Developer with hands-on experience in React.js, Next.js, and TypeScript, focused on building
            scalable and responsive web applications.
          </p>
          <a href="/Ahmed Adel.pdf" download className="btn btn-primary me-2">
            Download CV
          </a>
          <button className="btn btn-outline-light" onClick={() => scrollTo('contact')} type="button">
            Contact Me
          </button>
        </Container>
      </section>

      <section id="about" className="py-5">
        <Container>
          <h2>Summary</h2>
          <p>
            Background in technical support at SEF Academy, providing code debugging, mentoring, and best-practice
            guidance. Strong in API integration, performance optimization, and clean code principles.
          </p>
        </Container>
      </section>

      <section id="experience" className="py-5">
        <Container>
          <h2>Work Experience</h2>
          <h5>Technical Support (React & JavaScript Tracks) — SEF Academy</h5>
          <p>January 2024 – November 2024</p>
          <ul>
            <li>Provided technical support to students in React and JavaScript tracks.</li>
            <li>Assisted with debugging in HTML, CSS, JavaScript, and React.</li>
            <li>Explained components, hooks, routing, and API integration.</li>
            <li>Reviewed projects for clean code, best practices, and responsive design.</li>
            <li>Guided students in using Git, GitHub, and deployment platforms.</li>
          </ul>
        </Container>
      </section>

      <section id="education" className="py-5">
        <Container>
          <h2>Education</h2>
          <h5>Bachelor of Computer Science</h5>
          <p className="mb-1">Faculty of Computers and Information, Zagazig University</p>
          <p className="mb-1">
            Relevant coursework: Data Structures, Algorithms, Database Systems, Operating Systems, Software
            Engineering, and Web Development.
          </p>
          <p>GPA: 3.0</p>
        </Container>
      </section>

      <section id="projects" className="py-5">
        <Container>
          <h2>Projects</h2>
          <Row className="g-4 mt-1">
            {projects.map((project) => (
              <Col key={project.title} md={6} lg={4}>
                <div className="project-card h-100 p-3 border rounded">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <Container>
          <h2>Skills & Contact</h2>
          <p>
            <strong>Location:</strong> 10th of Ramadan City, Egypt
            <br />
            <strong>Phone:</strong> +20 109 841 4634
            <br />
            <strong>Email:</strong> AhmedAdelgxhero@gmail.com
          </p>
          <h5>Core Skills</h5>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="badge bg-secondary">
                {skill}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Portfolio;
