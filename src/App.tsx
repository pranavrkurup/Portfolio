import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import gsap from 'gsap';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import pranavPortrait from './assets/images/pranav-portrait_7_13.png';
import CustomCursor from './components/CustomCursor';
const quickTags = [
  'Bachelor of Computer Applications (BCA)',
  'Third Year',
  'Kerala, India',
];

const aboutText = [
  'BCA Third Year student passionate about building modern software solutions. Focused on Full-Stack Web Development, AI & Machine Learning, and Computer Vision.',
];

const projects = [
  {
    title: 'Stop Line Violation Detection System',
    description:
      'Developed an image-based traffic violation detection system using YOLOv8 and OpenCV to detect vehicles crossing stop lines during red traffic signals.',
    technologies: ['Python', 'YOLOv8', 'OpenCV'],
  },
  {
    title: 'LocalFix - Home Service Booking Platform',
    description:
      'Built a full-stack MERN application connecting customers with local service providers through location-based service discovery and secure role-based dashboards.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
  },
];

const coreSkills = [
  { name: 'React.js', theme: 'blue' },
  { name: 'Node.js', theme: 'white' },
  { name: 'Express.js', theme: 'blue' },
  { name: 'Tailwind CSS', theme: 'white' },
  { name: 'HTML', theme: 'blue' },
  { name: 'CSS', theme: 'white' },
  { name: 'MongoDB', theme: 'blue' },
  { name: 'MongoDB Atlas', theme: 'white' },
  { name: 'MySQL', theme: 'blue' },
  { name: 'Supabase', theme: 'white' },
  { name: 'Python (Basic Knowledge)', theme: 'blue' },
  { name: 'C (Basic Knowledge)', theme: 'white' },
];

const toolsSkills = [
  { name: 'Prompt-Driven Development', theme: 'blue' },
  { name: 'AI-Assisted Development', theme: 'white' },
  { name: 'Git', theme: 'blue' },
  { name: 'GitHub', theme: 'white' },
  { name: 'VS Code', theme: 'blue' },
  { name: 'Vercel', theme: 'white' },
];

const exploring = [
  'Currently exploring: Data Structures, System Design, Scalable Software Development.',
];

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set('.scrap-animate', { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '.scrap-animate',
        { opacity: 0, y: 64, rotate: -7, scale: 0.84 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.25,
          stagger: 0.08,
          ease: 'elastic.out(1, 0.5)',
        },
      );

      gsap.fromTo(
        '.marquee-track',
        { xPercent: 0 },
        { xPercent: -50, duration: 24, ease: 'none', repeat: -1 },
      );
    });

    return () => context.revert();
  }, []);

  return (
    <main className="scrapbook-page">
      <CustomCursor />

      <section className="master-card" aria-label="Pranav R Kurup portfolio">
        <div className="paper-grain" aria-hidden="true" />
        <div className="corner-note corner-note-left scrap-animate" aria-hidden="true" />
        <div className="corner-note corner-note-right scrap-animate" aria-hidden="true" />

        <header className="hero-grid">
          <div className="spine-left">
            <div className="quick-tags" aria-label="Identity">
              {quickTags.map((tag) => (
                <span key={tag} className={`tag-pill scrap-animate`}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="name-lockup scrap-animate">
              <h1>
                <span className="name-first">Pranav</span>
                <span className="name-last">R Kurup</span>
              </h1>
            </div>
          </div>

          <div className="portrait-wrap scrap-animate" aria-label="Portrait">
            <div className="portrait-frame">
              <img
                src={pranavPortrait}
                alt="Portrait"
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </header>

        <section className="about-zone">
          <div className="about-block scrap-animate" aria-labelledby="about-title">
            <div className="bubble-label" id="about-title">
              more about
            </div>
            <div className="about-copy">
              {aboutText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-zone">
          <div className="experience-area scrap-animate" aria-labelledby="experience-title">
            <h2 id="experience-title">
              <span className="heading-dot" aria-hidden="true" /> Facts / Experience
            </h2>

            <div className="project-stack">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-pills" aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <span className="tech-pill" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-zone">
          <div className="skills-area scrap-animate" aria-labelledby="skills-title">
            <div className="skills-section">
              <h2 id="core-skills-title">
                <span className="icon">◉</span> Core Skills
              </h2>
              <div className="skills-cloud" aria-label="Core Skills">
                {coreSkills.map((skill, index) => (
                  <span
                    className={`skill-pill pill-${skill.theme}`}
                    key={skill.name}
                    style={{ '--spin': `${((index * 13) % 15) - 7}deg` } as CSSProperties}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h2 id="tools-skills-title">
                <span className="icon">◉</span> Tools & Workflows
              </h2>
              <div className="skills-cloud" aria-label="Tools & Workflows">
                {toolsSkills.map((skill, index) => (
                  <span
                    className={`skill-pill pill-${skill.theme}`}
                    key={skill.name}
                    style={{ '--spin': `${((index * 17) % 15) - 7}deg` } as CSSProperties}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-zone scrap-animate">
          <hr style={{ border: '2px solid black', marginBottom: '40px' }} />
          
          <div className="exploring-strip" aria-label="Currently Exploring">
            <div className="marquee-mask-wrapper">
              <div className="marquee-track">
                {[...exploring, ...exploring, ...exploring, ...exploring].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-dock">
            <a
              className="social-icon-btn"
              href="https://github.com/pranavrkurup"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              className="social-icon-btn"
              href="https://www.linkedin.com/in/pranav-r-kurup-4065553a5"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              className="social-icon-btn"
              href="https://www.instagram.com/_prnvv"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram size={22} />
            </a>
            <a
              className="social-icon-btn"
              href="mailto:pranavrkurup6@gmail.com"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default App;
