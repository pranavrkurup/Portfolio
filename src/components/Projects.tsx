import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Stop Line Violation Detection System",
      tech: ["Python", "YOLOv8", "OpenCV", "NumPy"],
      desc: "An image-based traffic violation detection system that utilizes YOLOv8 and OpenCV to accurately detect vehicles crossing stop lines during red traffic signals in real-time.",
      image: "/project1.png",
    },
    {
      title: "LocalFix Home Service Booking",
      tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
      desc: "A full-stack MERN application connecting customers with local service providers. Features include location-based discovery, real-time booking, and role-based secure dashboards.",
      image: "/project2.png",
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

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
            start: 'top 75%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-accent-red" />
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">07 — PROJECTS</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 flex flex-col gap-40 px-8 md:px-16">
        
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={el => { projectsRef.current[index] = el; }}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            
            {/* Numbering and Image Column (30% width) */}
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="font-heading text-8xl md:text-[12rem] leading-[0.8] tracking-tighter text-accent-red mb-8">
                {index + 1}.
              </div>
              <div className="w-full aspect-[4/3] bg-[#EAE6DB] border border-border p-2 group overflow-hidden" data-cursor="VIEW">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-[1.02] group-hover:scale-100"
                />
              </div>
            </div>

            {/* Typography Column (70% width) */}
            <div className="w-full lg:w-[70%] flex flex-col pt-4 lg:pt-32">
              <h3 className="font-heading text-4xl md:text-6xl leading-[1] tracking-tighter text-primary mb-12 uppercase break-words">
                {project.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-8 mb-12">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4">Description</p>
                  <p className="text-lg text-primary font-light leading-relaxed text-justify">
                    {project.desc}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4">Stack</p>
                  <div className="flex flex-col gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-sm font-mono uppercase tracking-widest text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <a href="#" className="group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-primary" data-cursor="hover">
                  <span className="w-8 h-[1px] bg-primary group-hover:w-16 transition-all duration-300" />
                  Live Demo
                </a>
                <a href="#" className="group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors" data-cursor="hover">
                  <span className="w-8 h-[1px] bg-secondary group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
