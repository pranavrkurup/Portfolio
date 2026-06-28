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
    <section id="projects" ref={sectionRef} className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 md:top-16 left-8 md:left-24 z-10 w-full flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-accent-red" />
        <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-secondary uppercase">07 — PROJECTS</div>
        <div className="flex-1 h-[1px] bg-border mr-8 md:mr-24" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full pt-16 md:pt-24 flex flex-col gap-24 md:gap-48 px-6 md:px-24">
        
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => { projectsRef.current[index] = el; }}
            className={`group relative flex flex-col lg:flex-row gap-12 lg:gap-32 items-start p-8 md:p-16 border border-transparent hover:border-border hover:shadow-[0_10px_40px_rgb(0,0,0,0.02)] md:hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer bg-transparent hover:bg-white/40 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            
            {/* Numbering and Image Column (35% width) */}
            <div className="w-full lg:w-[35%] flex flex-col">
              <div className="font-heading font-light text-7xl md:text-[14rem] leading-[0.75] tracking-tighter text-border mb-8 md:mb-12 transition-colors duration-700 md:group-hover:text-primary">
                0{index + 1}
              </div>
              <div className="w-4/5 sm:w-2/3 lg:w-full aspect-[4/3] bg-background border border-border p-3 overflow-hidden shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.1] opacity-90 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700 ease-out scale-[1.01] md:group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Typography Column (65% width) */}
            <div className="w-full lg:w-[65%] flex flex-col pt-6 lg:pt-40 relative">
              <h3 className="font-heading font-light text-4xl md:text-7xl leading-[1.05] md:leading-[1] tracking-tighter text-primary mb-12 md:mb-16 uppercase break-words inline-flex items-start gap-4 md:gap-6 transition-transform duration-500 md:group-hover:translate-x-2">
                {project.title}
                <span className="opacity-100 translate-x-0 translate-y-0 md:opacity-0 md:-translate-x-4 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:translate-y-0 transition-all duration-500 text-accent-red flex-shrink-0 mt-1 md:mt-2 w-8 h-8 md:w-12 md:h-12">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19L19 5M19 5V19M19 5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-t border-border pt-8 md:pt-12">
                <div className="col-span-1 md:col-span-7">
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-secondary mb-4 md:mb-6">Project Overview</p>
                  <p className="text-base md:text-xl text-primary font-light leading-[1.7] text-left">
                    {project.desc}
                  </p>
                </div>
                <div className="col-span-1 md:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-secondary mb-4 md:mb-6">Technology Stack</p>
                    <div className="flex flex-wrap md:flex-col gap-x-6 gap-y-3 md:gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs md:text-sm font-mono uppercase tracking-[0.15em] text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-secondary group-hover:text-accent-red transition-colors duration-300 flex items-center gap-3">
                      Explore Repository <span className="md:hidden">↗</span>
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

