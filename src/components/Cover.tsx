import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cover() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run complex GSAP animations if user doesn't prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(".abstract-shape", { opacity: 0.5, scale: 1 });
      gsap.set(titleRef.current?.querySelectorAll('.word') || [], { opacity: 1, y: 0 });
      gsap.set(subtitleRef.current?.children || [], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();

    const nameWords = titleRef.current?.querySelectorAll('.word') || [];
    tl.fromTo(nameWords,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
    );

    tl.fromTo(".abstract-shape",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, stagger: 0.2, ease: 'power2.out' },
      "-=0.8"
    );

    const subLines = subtitleRef.current?.children || [];
    tl.fromTo(subLines,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
      "-=1.5"
    );
  }, []);

  return (
    <section id="cover" ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-center p-8 md:p-32 overflow-hidden">
      
      {/* Abstract Geometric Composition */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] opacity-[0.20]" />
        
        {/* Thin circles and lines */}
        <div className="abstract-shape absolute top-[5%] right-[-10%] md:top-[10%] md:right-[5%] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border border-border rounded-full opacity-30" />
        <div className="abstract-shape absolute bottom-0 left-[10%] md:left-1/4 w-[1px] h-[30vh] md:h-[40vh] bg-border" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Main Typography */}
        <div className="col-span-1 lg:col-span-8 flex flex-col justify-center mt-16 md:mt-0">
          <div className="mb-12 md:mb-16">
            <span className="abstract-shape inline-block w-12 md:w-24 h-[1px] bg-primary mb-6" />
          </div>

          <h1 ref={titleRef} className="font-heading font-light text-[15vw] leading-[0.8] sm:text-8xl md:text-8xl lg:text-[9rem] xl:text-[11rem] tracking-tighter text-primary uppercase mb-16 md:mb-24 overflow-hidden">
            <div className="flex flex-wrap gap-x-4 md:gap-x-12">
              <span className="word inline-block">Pranav</span>
            </div>
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 mt-2 md:mt-4">
              <span className="word inline-block text-secondary">R</span>
              <span className="word inline-block">Kurup</span>
            </div>
          </h1>

          <div ref={subtitleRef} className="flex flex-col gap-6 md:gap-8 border-l border-border pl-8 md:pl-16 max-w-4xl">
            <p className="text-xs md:text-sm font-mono tracking-[0.25em] text-secondary uppercase mb-4">
              Building at the intersection of
            </p>
            <p className="text-3xl sm:text-4xl md:text-6xl font-light text-primary tracking-tight leading-tight md:leading-tight">
              Software
            </p>
            <p className="text-3xl sm:text-4xl md:text-6xl font-light text-primary tracking-tight leading-tight md:leading-tight">
              Intelligence
            </p>
            <p className="text-3xl sm:text-4xl md:text-6xl font-light text-primary tracking-tight leading-tight md:leading-tight">
              & Vision
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12 md:mt-16">
              {[
                { label: "Instagram", url: "https://www.instagram.com/_prnvv?igsh=anM5eWJ1NmkyMmd4" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/pranav-r-kurup-4065553a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { label: "Email", url: "mailto:pranavrkurup6@gmail.com" }
              ].map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="abstract-shape px-8 py-3 rounded-full border border-border bg-background hover:bg-primary hover:text-background transition-all duration-300 text-xs font-mono uppercase tracking-[0.1em]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Portrait Treatment */}
        <div className="col-span-1 lg:col-span-4 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-[340px] aspect-[4/5] rounded-[32px] overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-border p-4 transition-transform duration-700 ease-out hover:-translate-y-2 hover:rotate-1">
            <div className="w-full h-full rounded-[20px] overflow-hidden bg-background relative">
              <img 
                src="/src/assets/images/pranav-portrait.png" 
                alt="Pranav R Kurup"
                className="w-full h-full object-cover grayscale-[20%] contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"; 
                  // Fallback in case user hasn't uploaded image yet
                }}
              />
            </div>
            
            {/* Minimal Badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-background px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.2em] shadow-lg flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
              Available
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
