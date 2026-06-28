import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupsRef = useRef<(HTMLDivElement | null)[]>([]);

  const groups = [
    { title: "Core Workflow", skills: ["Vibe Coding", "AI-Assisted Development"] },
    { title: "Languages", skills: ["Python", "C"] },
    { title: "Web Development", skills: ["MongoDB", "Express.js", "React.js", "Node.js", "HTML", "CSS", "Tailwind CSS"] },
    { title: "Databases & Cloud", skills: ["MongoDB Atlas", "Supabase", "MySQL"] },
    { title: "Tools", skills: ["Git/GitHub", "VS Code", "Vercel"] }
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
          duration: 1.5,
          ease: 'power3.out',
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
          duration: 1,
          delay: 0.1,
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
    <section id="skills" ref={sectionRef} className="relative py-32 md:py-48 px-8 md:px-24 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 md:top-16 left-8 md:left-24 z-10 w-full flex items-center gap-6">
        <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-secondary uppercase">04 — EXPERTISE</div>
        <div className="flex-1 h-[1px] bg-border mr-8 md:mr-24" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 md:gap-x-32 gap-y-16 md:gap-y-24">
          
          {groups.map((group, index) => (
            <div 
              key={index} 
              ref={el => { groupsRef.current[index] = el; }}
              className="flex flex-col"
            >
              <h3 className="font-heading font-light text-2xl md:text-4xl uppercase tracking-tighter text-primary mb-8 md:mb-12 skill-text">
                {group.title}
              </h3>
              
              <div className="flex flex-col border-t border-border/70">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group relative flex items-center justify-between py-4 md:py-6 cursor-default border-b border-border/40 transition-colors duration-300 hover:border-primary/20">
                    <span className="font-mono text-sm md:text-base tracking-[0.1em] text-secondary group-hover:text-primary transition-colors duration-300 skill-text relative z-10 bg-background pr-6">
                      {skill}
                    </span>
                    <div className="skill-line absolute top-1/2 left-0 w-full h-[1px] bg-transparent origin-left z-0 group-hover:bg-primary transition-colors duration-500" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 skill-text z-10" />
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
