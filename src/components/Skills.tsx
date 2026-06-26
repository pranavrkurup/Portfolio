import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const groupsRef = useRef<(HTMLDivElement | null)[]>([]);

  const groups = [
    { title: "Development Workflow", skills: ["AI-Assisted Development", "Rapid Prototyping"] },
    { title: "Languages", skills: ["Python", "C", "JavaScript", "TypeScript"] },
    { title: "Web Development", skills: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
    { title: "Databases & Cloud", skills: ["MongoDB", "MySQL", "Supabase", "Node.js", "Express.js"] },
    { title: "Tools", skills: ["Git", "GitHub", "Vercel", "VS Code"] }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

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
            start: 'top 80%',
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
            start: 'top 80%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 p-8 md:p-16 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">04 — EXPERTISE</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
          
          {groups.map((group, index) => (
            <div 
              key={index} 
              ref={el => { groupsRef.current[index] = el; }}
              className="flex flex-col"
            >
              <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-tighter text-primary mb-6 skill-text">
                {group.title}
              </h3>
              
              <div className="flex flex-col">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group relative flex items-center justify-between py-4 cursor-default">
                    <span className="font-mono text-sm tracking-widest uppercase text-secondary group-hover:text-primary transition-colors duration-300 skill-text relative z-10 bg-background pr-4">
                      {skill}
                    </span>
                    <div className="skill-line absolute top-1/2 left-0 w-full h-[1px] bg-border origin-left z-0 group-hover:bg-primary transition-colors duration-300" />
                    <div className="w-2 h-2 rounded-full bg-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 skill-text z-10" />
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
