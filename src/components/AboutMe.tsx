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
    <section id="about" ref={sectionRef} className="relative py-32 md:py-48 p-8 md:p-24 border-t border-border overflow-hidden">
      
      {/* Top Divider / Number */}
      <div className="absolute top-12 md:top-16 left-8 md:left-24 z-10 w-full flex items-center gap-6">
        <div className="w-3 h-3 rounded-full bg-accent-red" />
        <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-secondary uppercase">02 — ABOUT</div>
        <div className="flex-1 h-[1px] bg-border mr-8 md:mr-24" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center pt-16 md:pt-24">
        
        {/* Left Column: Typography Block */}
        <div ref={textRef} className="col-span-1 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="font-heading font-light text-6xl md:text-[8rem] leading-[0.9] tracking-tighter text-primary mb-24 uppercase">
            Background
          </h2>
          
          <div className="space-y-16 max-w-2xl">
            <div className="border-l border-primary pl-8">
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-secondary mb-4">Name</p>
              <p className="text-3xl md:text-4xl text-primary font-light tracking-wide uppercase">Pranav R Kurup</p>
            </div>

            <div className="border-l border-border pl-8">
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-secondary mb-4">Education</p>
              <p className="text-2xl md:text-3xl text-primary font-light tracking-wide">BCA Third Year</p>
            </div>

            <div className="border-l border-border pl-8">
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-secondary mb-4">Location</p>
              <p className="text-2xl md:text-3xl text-primary font-light tracking-wide">Kerala, India</p>
            </div>
            
            <div className="pt-8">
              <p className="text-xl md:text-2xl font-heading font-light italic text-primary">
                "I build things that think."
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Minimal Abstract Illustration */}
        <div className="col-span-1 lg:col-span-5 relative h-[40vh] md:h-[60vh] flex items-center justify-center order-1 lg:order-2" ref={visualRef}>
          <div className="relative w-full aspect-square flex items-center justify-center p-12">
            
            <div className="relative w-full h-full border border-border/40 rounded-full flex items-center justify-center group" data-cursor="HOVER">
              <div className="w-[85%] h-[85%] border border-border/60 rounded-full transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
              <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-accent-red rounded-full mix-blend-multiply transition-transform duration-[2s] ease-out group-hover:-translate-x-12 group-hover:translate-y-12" />
              <div className="absolute bottom-[25%] left-[25%] w-4 h-4 bg-primary rounded-full transition-transform duration-[1.5s] ease-out group-hover:scale-150" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
