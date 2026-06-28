import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const skills = {
  workflow: ['Vibe Coding', 'AI-Assisted Development'],
  languages: ['Python', 'C'],
  web: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
  databases: ['MongoDB Atlas', 'Supabase', 'MySQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Vercel']
};

const projects = [
  {
    title: 'Stop Line Violation Detection System',
    description: 'Developed an image-based traffic violation detection system using YOLOv8 and OpenCV to detect vehicles crossing stop lines during red traffic signals.',
    tech: ['Python', 'YOLOv8', 'OpenCV'],
    link: 'https://github.com/pranavrkurup'
  },
  {
    title: 'LocalFix – Home Service Booking Platform',
    description: 'Built a full-stack MERN application connecting customers with local service providers through location-based service discovery and secure role-based dashboards.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    link: 'https://github.com/pranavrkurup'
  }
];

const exploring = ['Data Structures', 'System Design', 'Scalable Software Development'];

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set('.reveal-up', { opacity: 1, visibility: 'visible' });
      return;
    }

    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((el) => {
      gsap.set(el as Element, { y: 20 });
      gsap.to(el as Element, {
        scrollTrigger: {
          trigger: el as Element,
          start: 'top 90%',
        },
        y: 0,
        opacity: 1,
        visibility: 'visible',
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <>
      <div className="container-main pb-24">
        {/* Section 1: Hero */}
        <section className="section-gap flex flex-col items-center text-center reveal-up">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-2 border-[var(--border-subtle)]">
            <img 
              src="/src/assets/images/pranav-portrait.jpg" 
              alt="Pranav R Kurup" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23141414"/></svg>';
              }}
            />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4 tracking-tight">
            Hi, I'm Pranav R Kurup.<br />Welcome to my portfolio.
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl">
            AI-Assisted Developer & Full-Stack Builder.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/pranavrkurup" target="_blank" rel="noreferrer" className="social-icon">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pranav-r-kurup-4065553a5" target="_blank" rel="noreferrer" className="social-icon">
              <FiLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/_prnvv" target="_blank" rel="noreferrer" className="social-icon">
              <FiInstagram size={24} />
            </a>
            <a href="mailto:pranavrkurup6@gmail.com" className="social-icon">
              <FiMail size={24} />
            </a>
          </div>
        </section>

        {/* Section 2: About */}
        <section className="section-gap reveal-up">
          <h2 className="text-2xl mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-[var(--text-primary)] mb-8">
            I am a BCA Third Year student passionate about building modern software solutions through hands-on projects and continuous learning. My primary interests lie in Full-Stack Web Development, Artificial Intelligence & Machine Learning, and Computer Vision. I enjoy exploring modern development workflows and building practical applications that solve real-world problems.
          </p>
          <div className="flex flex-col gap-2 mono-text">
            <span>EDUCATION: Bachelor of Computer Applications (BCA) Third Year</span>
            <span>LOCATION: Kerala, India</span>
          </div>
        </section>

        {/* Section 3: Bento Skills */}
        <section className="section-gap reveal-up">
          <h2 className="text-2xl mb-10">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bento-card p-8 flex flex-col gap-6">
              <h3 className="text-xl">Core Workflow & Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[...skills.workflow, ...skills.languages].map(skill => (
                  <span key={skill} className="tech-tag mono-text">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bento-card p-8 flex flex-col gap-6 lg:col-span-2">
              <h3 className="text-xl">Web Development & Databases</h3>
              <div className="flex flex-wrap gap-3">
                {[...skills.web, ...skills.databases].map(skill => (
                  <span key={skill} className="tech-tag mono-text">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bento-card p-8 flex flex-col gap-6 lg:col-span-3">
              <h3 className="text-xl">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map(skill => (
                  <span key={skill} className="tech-tag mono-text">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Experience */}
        <section className="section-gap">
          <h2 className="text-2xl mb-12 reveal-up">Case Studies</h2>
          <div className="flex flex-col gap-32">
            {projects.map((project) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                key={project.title}
                className="project-card flex flex-col md:flex-row group reveal-up"
              >
                <div className="w-full md:w-5/12 aspect-video bg-[#0A0A0A] border-b md:border-b-0 md:border-r border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden">
                  <span className="mono-text absolute text-[var(--text-secondary)]">Project Screenshot</span>
                  {/* Placeholder for screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(255,255,255,0.02)] to-transparent"></div>
                </div>
                <div className="p-8 md:p-12 w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold pr-8">{project.title}</h3>
                    <FiArrowUpRight size={28} className="project-arrow flex-shrink-0" />
                  </div>
                    <p className="mb-8">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag mono-text">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Section 5: Footer */}
      <footer>
        <div className="marquee-container reveal-up">
          <div className="marquee-content">
            {[...exploring, ...exploring, ...exploring, ...exploring].map((item, index) => (
              <div key={index} className="marquee-item">
                <span className="mono-text text-sm">{item}</span>
                <div className="marquee-dot"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container-main py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 reveal-up">
          <div className="flex flex-col gap-2 mono-text">
            <a href="mailto:pranavrkurup6@gmail.com" className="link-accent text-sm">pranavrkurup6@gmail.com</a>
            <span className="text-sm">Kerala, India</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <a href="https://github.com/pranavrkurup" target="_blank" rel="noreferrer" className="link-accent mono-text text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/pranav-r-kurup-4065553a5" target="_blank" rel="noreferrer" className="link-accent mono-text text-sm">LinkedIn</a>
            <a href="https://www.instagram.com/_prnvv" target="_blank" rel="noreferrer" className="link-accent mono-text text-sm">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
}
