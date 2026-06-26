import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupsRef = useRef<(HTMLDivElement | null)[]>([]);

  const groups = [
    { title: "Workflow", skills: ["AI-Assisted Development", "Rapid Prototyping"] },
    { title: "Languages", skills: ["Python", "C", "JavaScript"] },
    { title: "Web & UI", skills: ["React.js", "HTML", "CSS", "Tailwind"] },
    { title: "Backend & Cloud", skills: ["Node.js", "Express", "MongoDB", "MySQL", "Supabase"] },
    { title: "Tools", skills: ["Git", "GitHub", "Vercel", "VS Code"] }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      groupsRef.current.forEach((el) => {
        if (!el) return;
        gsap.set(el.querySelectorAll('.skill-line'), { scaleX: 1 });
        gsap.set(el.querySelectorAll('.skill-text'), { y: 0, opacity: 1 });
      });
      return;
    }

    groupsRef.current.forEach((el) => {
      if (!el) return;
      
      const lines = el.querySelectorAll('.skill-line');
      
      gsap.fromTo(lines,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo(el.querySelectorAll('.skill-text'),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-16 border-t border-border overflow-hidden">
      
      <div className="absolute top-8 md:top-12 left-6 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase">04 — EXPERTISE</div>
        <div className="flex-1 h-[1px] bg-border mr-6 md:mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-12 md:gap-y-20">
          
          {groups.map((group, index) => (
            <div 
              key={index} 
              ref={el => { groupsRef.current[index] = el; }}
              className="flex flex-col"
            >
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl uppercase tracking-tighter text-primary mb-6 skill-text">
                {group.title}
              </h3>
              
              <div className="flex flex-col border-t border-border/50">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group relative flex items-center justify-between py-3 md:py-4 cursor-default border-b border-border/20">
                    <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-secondary group-hover:text-primary transition-colors duration-300 skill-text relative z-10 bg-background pr-4">
                      {skill}
                    </span>
                    <div className="skill-line absolute top-1/2 left-0 w-full h-[1px] bg-transparent origin-left z-0 group-hover:bg-primary transition-colors duration-300" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 skill-text z-10" />
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
