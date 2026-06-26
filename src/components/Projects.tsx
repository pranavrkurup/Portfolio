import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const projects = [
    {
      title: "Stop Line Violation Detection System",
      tech: ["Python", "YOLOv8", "OpenCV", "NumPy"],
      desc: "An image-based traffic violation detection system that utilizes YOLOv8 and OpenCV to accurately detect vehicles crossing stop lines during red traffic signals in real-time.",
      image: "/project1.png",
      link: "https://github.com/pranavrkurup/stop-line-violation-detection",
    },
    {
      title: "LocalFix Home Service Booking",
      tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
      desc: "A full-stack MERN application connecting customers with local service providers. Features include location-based discovery, real-time booking, and role-based secure dashboards.",
      image: "/project2.png",
      link: "https://github.com/pranavrkurup/LocalFix",
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      projectsRef.current.forEach((el) => {
        if (el) gsap.set(el, { y: 0, opacity: 1 });
      });
      return;
    }

    projectsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      
      <div className="absolute top-8 md:top-12 left-6 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-accent-red" />
        <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase">07 — PROJECTS</div>
        <div className="flex-1 h-[1px] bg-border mr-6 md:mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 md:pt-16 flex flex-col gap-12 md:gap-32 px-4 md:px-16">
        
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => { projectsRef.current[index] = el; }}
            className={`group relative flex flex-col lg:flex-row gap-8 lg:gap-24 items-start p-6 md:p-12 border border-transparent hover:border-secondary hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] md:hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer bg-bg hover:bg-bg/50 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            
            {/* Numbering and Image Column (30% width) */}
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="font-heading text-6xl md:text-[12rem] leading-[0.8] tracking-tighter text-accent-red mb-6 md:mb-8 transition-transform duration-500 md:group-hover:scale-105 group-hover:text-primary origin-left">
                {index + 1}.
              </div>
              <div className="w-3/4 sm:w-1/2 lg:w-full aspect-[4/3] bg-[#EAE6DB] border border-border p-2 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-90 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700 ease-out scale-100 md:scale-[1.02] md:group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Typography Column (70% width) */}
            <div className="w-full lg:w-[70%] flex flex-col pt-4 lg:pt-32 relative">
              <h3 className="font-heading text-3xl md:text-6xl leading-[1.1] md:leading-[1] tracking-tighter text-primary mb-8 md:mb-12 uppercase break-words inline-flex items-start gap-4 transition-transform duration-300 md:group-hover:translate-x-1">
                {project.title}
                <span className="opacity-100 translate-x-0 translate-y-0 md:opacity-0 md:-translate-x-8 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0 transition-all duration-500 text-accent-red flex-shrink-0 mt-1 md:mt-2 w-8 h-8 md:w-12 md:h-12">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-border pt-6 md:pt-8">
                <div>
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-3 md:mb-4">Description</p>
                  <p className="text-base md:text-lg text-primary font-light leading-relaxed text-left md:text-justify">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-3 md:mb-4">Stack</p>
                    <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs md:text-sm font-mono uppercase tracking-widest text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-secondary group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      GitHub Repository <span className="md:hidden">↗</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

