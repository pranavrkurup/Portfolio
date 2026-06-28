import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CurrentlyExploring() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const topics = [
    "Full-Stack Web Development",
    "AI & Machine Learning",
    "Computer Vision",
    "Data Structures & Algorithms",
    "System Design",
    "Scalable Software Development"
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(listRef.current?.children || [],
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="exploring" ref={sectionRef} className="relative py-32 border-t border-border overflow-hidden bg-white/40">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">09 — ROADMAP</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
          <h2 className="font-heading text-5xl md:text-7xl leading-[0.85] tracking-tighter text-primary uppercase">
            Currently <br />
            Exploring
          </h2>
        </div>

        <div className="flex flex-col border-t border-primary" ref={listRef}>
          {topics.map((topic, index) => (
            <div key={index} className="flex justify-between items-center py-6 border-b border-border group cursor-default">
              <span className="font-heading text-2xl md:text-3xl uppercase tracking-tight text-primary transition-colors duration-300 group-hover:text-accent-red">
                {topic}
              </span>
              <span className="text-xs font-mono tracking-widest text-secondary group-hover:text-primary transition-colors">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
