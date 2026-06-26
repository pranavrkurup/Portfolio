import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(textRef.current?.children || [],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        }
      }
    );

    gsap.fromTo(visualRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        }
      }
    );

  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 p-8 md:p-16 border-t border-border overflow-hidden">
      
      {/* Top Divider / Number */}
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-accent-red" />
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">02 — ABOUT</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center pt-16">
        
        {/* Left Column: Typography Block */}
        <div ref={textRef} className="col-span-1 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="font-heading text-6xl md:text-[6rem] leading-[0.9] tracking-tighter text-primary mb-16 uppercase">
            Background
          </h2>
          
          <div className="space-y-12 max-w-2xl">
            <div className="border-l-2 border-primary pl-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-2">Name</p>
              <p className="text-2xl text-primary font-medium tracking-wide uppercase">Pranav R Kurup</p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-2">Education</p>
              <p className="text-xl text-primary tracking-wide">BCA Third Year</p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4">Focus</p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-secondary text-justify">
                I'm a student exploring full-stack development with a strong emerging focus on Artificial Intelligence and Computer Vision. I am actively building projects, solving complex problems, and expanding my technical foundation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Minimal Abstract Illustration */}
        <div className="col-span-1 lg:col-span-5 relative h-[50vh] flex items-center justify-center order-1 lg:order-2" ref={visualRef}>
          <div className="relative w-full aspect-square border border-border flex items-center justify-center p-12 overflow-hidden bg-white/30 backdrop-blur-sm">
            {/* Minimal CSS Geometric Art */}
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-border" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border" />
            
            <div className="relative w-full h-full border border-primary/10 rounded-full flex items-center justify-center group" data-cursor="HOVER">
              <div className="w-3/4 h-3/4 border border-primary/20 rounded-full transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-accent-red rounded-full mix-blend-multiply transition-transform duration-[2s] group-hover:-translate-x-8 group-hover:translate-y-8" />
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
