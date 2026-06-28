import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import gsap from 'gsap';

const quickTags = [
  'Bachelor of Computer Applications (BCA)',
  'Third Year',
  'Kerala, India',
];

const aboutText = [
  'I am a BCA Third Year student passionate about building modern software solutions through hands-on projects and continuous learning.',
  'My primary interests lie in Full-Stack Web Development, Artificial Intelligence & Machine Learning, and Computer Vision. I enjoy exploring modern development workflows and building practical applications that solve real-world problems.',
];

const interests = [
  'Full-Stack Web Development',
  'Artificial Intelligence & Machine Learning',
  'Computer Vision',
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

const skills = [
  'Vibe Coding',
  'AI-Assisted Development',
  'Python (Basic Knowledge)',
  'C (Basic Knowledge)',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MongoDB Atlas',
  'Supabase',
  'MySQL',
  'Git',
  'GitHub',
  'VS Code',
  'Vercel',
];

const exploring = [
  'I am currently exploring and strengthening my skills in:',
  'Full-Stack Web Development',
  'Artificial Intelligence & Machine Learning',
  'Computer Vision',
  'Data Structures & Algorithms',
  'System Design',
  'Scalable Software Development',
  'through hands-on projects and continuous learning.',
];

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.16, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.16, ease: 'power3.out' });

    const moveCursor = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
      const target = event.target as HTMLElement;
      cursor.classList.toggle(
        'is-target',
        Boolean(target.closest('a, button, .project-card, .skill-pill, .tag-pill')),
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

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
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />

      <section className="master-card" aria-label="Pranav R Kurup portfolio">
        <div className="paper-grain" aria-hidden="true" />
        <div className="corner-note corner-note-left scrap-animate" aria-hidden="true" />
        <div className="corner-note corner-note-right scrap-animate" aria-hidden="true" />

        <header className="hero-grid">
          <div className="quick-tags" aria-label="Identity">
            {quickTags.map((tag, index) => (
              <span key={tag} className={`tag-pill scrap-animate tag-${index + 1}`}>
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

          <div className="portrait-wrap scrap-animate" aria-label="Portrait">
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-dot portrait-dot-one" aria-hidden="true" />
            <div className="portrait-dot portrait-dot-two" aria-hidden="true" />
            <div className="portrait-dot portrait-dot-three" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                ref={portraitImageRef}
                src="/src/assets/images/pranav-portrait.jpg"
                alt="Portrait"
                onError={() => portraitImageRef.current?.classList.add('is-missing')}
              />
              <div className="portrait-fallback" aria-hidden="true" />
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
            <ul className="interest-list">
              {interests.map((interest) => (
                <li key={interest}>
                  <span aria-hidden="true">*</span>
                  {interest}
                </li>
              ))}
            </ul>
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
            <h2 id="skills-title">
              <span className="heading-dot" aria-hidden="true" /> Skills
            </h2>
            <div className="skills-cloud" aria-label="Skills">
              {skills.map((skill, index) => (
                <span
                  className={`skill-pill skill-${(index % 9) + 1}`}
                  key={skill}
                  style={{ '--spin': `${((index % 7) - 3) * 1.4}deg` } as CSSProperties}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="scrap-footer">
          <div className="exploring-strip scrap-animate" aria-label="Currently Exploring">
            <div className="marquee-track">
              {[...exploring, ...exploring].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </footer>

        <a
          className="github-pill scrap-animate"
          href="https://github.com/pranavrkurup"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </section>
    </main>
  );
}

export default App;
