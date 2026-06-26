import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GitHubSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(textRef.current?.children || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="github" ref={sectionRef} className="relative py-32 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">08 — OPEN SOURCE</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 px-8 md:px-16" ref={textRef}>
        
        <h2 className="font-heading text-4xl md:text-6xl tracking-tighter text-primary uppercase mb-4">
          GitHub
        </h2>
        
        <div 
          className="inline-block text-xl md:text-2xl font-light text-secondary mb-12 cursor-default"
        >
          github.com/pranavrkurup
        </div>

        <p className="text-lg text-primary max-w-xl mb-16 font-light leading-relaxed">
          Exploring and building projects in full-stack web development, artificial intelligence, and computer vision.
        </p>

        <a 
          href="https://github.com/pranavrkurup"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="group relative inline-flex items-center justify-center gap-6 px-10 py-5 border border-primary overflow-hidden transition-all duration-300 hover:border-accent-red"
        >
          <div className="absolute inset-0 bg-[#EAE6DB] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          <span className="relative z-10 text-sm font-mono uppercase tracking-[0.2em] text-primary transition-colors duration-300">Visit GitHub</span>
          <span className="relative z-10 text-lg text-primary transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:text-accent-red">→</span>
        </a>

      </div>
    </section>
  );
}
