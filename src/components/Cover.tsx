import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cover() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Word stagger for name
    const nameWords = titleRef.current?.querySelectorAll('.word') || [];
    tl.fromTo(nameWords,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
    );

    // Fade in abstract shapes
    tl.fromTo(".abstract-shape",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, stagger: 0.2, ease: 'power2.out' },
      "-=0.8"
    );

    // Slide up text
    const subLines = subtitleRef.current?.children || [];
    tl.fromTo(subLines,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
      "-=1.5"
    );
  }, []);

  return (
    <section id="cover" ref={sectionRef} className="relative min-h-screen flex flex-col justify-center p-8 md:p-16 overflow-hidden">
      
      {/* Abstract Geometric Composition */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.15]" />
        
        {/* Thin circles and lines */}
        <div className="abstract-shape absolute top-[20%] right-[15%] w-[40vw] h-[40vw] border border-border rounded-full opacity-50" />
        <div className="abstract-shape absolute top-[25%] right-[20%] w-[30vw] h-[30vw] border border-border rounded-full opacity-30" />
        <div className="abstract-shape absolute bottom-0 left-1/4 w-[1px] h-[40vh] bg-border" />
        <div className="abstract-shape absolute top-1/3 left-0 w-[30vw] h-[1px] bg-border" />
        
        {/* Red Dot Accent */}
        <div className="abstract-shape absolute top-[35%] right-[30%] w-8 h-8 rounded-full bg-accent-red mix-blend-multiply" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Spacer */}
        <div className="hidden lg:flex col-span-1"></div>

        {/* Main Typography */}
        <div className="col-span-1 lg:col-span-11 flex flex-col justify-center lg:pl-16">
          <div className="mb-12">
            <span className="abstract-shape inline-block w-16 h-[2px] bg-primary mb-6" />
          </div>

          <h1 ref={titleRef} className="font-heading text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] leading-[0.9] tracking-tighter text-primary uppercase mb-32 overflow-hidden">
            <div className="flex flex-wrap gap-x-6 md:gap-x-12">
              <span className="word inline-block">Pranav</span>
            </div>
            <div className="flex flex-wrap gap-x-6 md:gap-x-12 mt-2 md:mt-0">
              <span className="word inline-block text-secondary">R</span>
              <span className="word inline-block">Kurup</span>
            </div>
          </h1>

          <div ref={subtitleRef} className="flex flex-col gap-6 border-l border-border pl-8 md:pl-12 max-w-4xl mb-24">
            <p className="text-sm md:text-base font-mono tracking-[0.2em] text-secondary uppercase mb-4">
              Exploring
            </p>
            <p className="text-4xl md:text-5xl font-light text-primary tracking-tight leading-relaxed">
              Full-Stack Development
            </p>
            <p className="text-4xl md:text-5xl font-light text-primary tracking-tight leading-relaxed">
              Artificial Intelligence & Machine Learning
            </p>
            <p className="text-4xl md:text-5xl font-light text-primary tracking-tight leading-relaxed">
              Computer Vision
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
