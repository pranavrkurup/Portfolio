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
    <section id="cover" ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-center p-6 md:p-16 overflow-hidden">
      
      {/* Abstract Geometric Composition */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] opacity-[0.10] md:opacity-[0.15]" />
        
        {/* Thin circles and lines */}
        <div className="abstract-shape absolute top-[-10%] right-[-20%] md:top-[20%] md:right-[15%] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border border-border rounded-full opacity-30 md:opacity-50" />
        <div className="abstract-shape absolute top-[5%] right-[-10%] md:top-[25%] md:right-[20%] w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] border border-border rounded-full opacity-10 md:opacity-30" />
        <div className="abstract-shape absolute bottom-0 left-[10%] md:left-1/4 w-[1px] h-[30vh] md:h-[40vh] bg-border" />
        <div className="abstract-shape hidden md:block absolute top-1/3 left-0 w-[30vw] h-[1px] bg-border" />
        
        {/* Red Dot Accent */}
        <div className="abstract-shape absolute top-[15%] right-[10%] md:top-[35%] md:right-[30%] w-4 h-4 md:w-8 md:h-8 rounded-full bg-accent-red mix-blend-multiply" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Spacer */}
        <div className="hidden lg:flex col-span-1"></div>

        {/* Main Typography */}
        <div className="col-span-1 lg:col-span-11 flex flex-col justify-center lg:pl-16 mt-16 md:mt-0">
          <div className="mb-8 md:mb-12">
            <span className="abstract-shape inline-block w-12 md:w-16 h-[2px] bg-primary mb-4 md:mb-6" />
          </div>

          <h1 ref={titleRef} className="font-heading text-[13vw] leading-[0.85] sm:text-7xl md:text-7xl lg:text-[7rem] xl:text-[8rem] tracking-tighter text-primary uppercase mb-16 md:mb-32 overflow-hidden">
            <div className="flex flex-wrap gap-x-4 md:gap-x-12">
              <span className="word inline-block">Pranav</span>
            </div>
            <div className="flex flex-wrap gap-x-4 md:gap-x-12 mt-1 md:mt-0">
              <span className="word inline-block text-secondary">R</span>
              <span className="word inline-block">Kurup</span>
            </div>
          </h1>

          <div ref={subtitleRef} className="flex flex-col gap-4 md:gap-6 border-l border-border pl-6 md:pl-12 max-w-4xl mb-16 md:mb-24">
            <p className="text-xs md:text-base font-mono tracking-[0.2em] text-secondary uppercase mb-2 md:mb-4">
              Exploring
            </p>
            <p className="text-2xl sm:text-3xl md:text-5xl font-light text-primary tracking-tight leading-relaxed md:leading-relaxed">
              Full-Stack Development
            </p>
            <p className="text-2xl sm:text-3xl md:text-5xl font-light text-primary tracking-tight leading-relaxed md:leading-relaxed">
              AI & ML
            </p>
            <p className="text-2xl sm:text-3xl md:text-5xl font-light text-primary tracking-tight leading-relaxed md:leading-relaxed">
              Computer Vision
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
