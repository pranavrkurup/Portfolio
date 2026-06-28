import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const infoRefs = useRef<(HTMLDivElement | HTMLSpanElement | null)[]>([]);
  const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(titleRef.current?.children || [], { y: 0, opacity: 1 });
      gsap.set(infoRefs.current.filter(Boolean), { y: 0, opacity: 1 });
      gsap.set(socialRefs.current.filter(Boolean), { y: 0, opacity: 1 });
      return;
    }

    gsap.fromTo(titleRef.current?.children || [],
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    const elementsToAnimate = [...infoRefs.current, ...socialRefs.current].filter(Boolean);
    if (elementsToAnimate.length > 0) {
      gsap.fromTo(elementsToAnimate,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-[90svh] py-24 md:py-32 border-t border-border flex flex-col justify-between overflow-hidden">
      
      <div className="absolute top-8 md:top-12 left-6 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-accent-red" />
        <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase">10 — CONNECT</div>
        <div className="flex-1 h-[1px] bg-border mr-6 md:mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center items-center md:items-start px-6 md:px-16 mt-16 md:mt-24">
        
        <h2 ref={titleRef} className="font-heading text-[18vw] sm:text-[14vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase text-primary mb-12 md:mb-16 text-center md:text-left">
          <span className="block hover:text-accent-red transition-colors duration-500">LET'S</span>
          <span className="block">CONNECT.</span>
        </h2>

        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <a 
            href="mailto:pranavrkurup6@gmail.com"
            data-cursor="hover"
            className="group w-full md:w-auto inline-flex items-center justify-between md:justify-start gap-6 px-8 md:px-12 py-5 md:py-6 border border-primary bg-primary text-background transition-colors duration-500 hover:bg-transparent hover:text-primary"
          >
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em]">Get In Touch</span>
            <span className="text-xl transition-transform duration-500 group-hover:translate-x-3">→</span>
          </a>
        </div>

      </div>

      {/* Footer Info Grid */}
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-primary/30 pt-10 px-6 md:px-16 mt-24">
        <div ref={el => { infoRefs.current[0] = el; }} className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase">Name</span>
          <span className="text-xs md:text-sm font-sans text-primary uppercase tracking-widest">Pranav R Kurup</span>
        </div>
        <div ref={el => { infoRefs.current[1] = el; }} className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase">Location</span>
          <span className="text-xs md:text-sm font-sans text-primary uppercase tracking-widest">Kerala, India</span>
        </div>
        <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-2 items-center md:items-end text-center md:text-right">
          <span ref={el => { infoRefs.current[2] = el; }} className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase hidden md:block">Social</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 w-full">
            {[
              { label: "Email", url: "mailto:pranavrkurup6@gmail.com" },
              { label: "GitHub", url: "https://github.com/pranavrkurup" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/pranav-r-kurup-4065553a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { label: "Instagram", url: "https://www.instagram.com/_prnvv?igsh=anM5eWJ1NmkyMmd4" }
            ].map((link, index) => (
              <a
                key={link.label}
                ref={el => { socialRefs.current[index] = el; }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group relative text-xs md:text-sm font-sans text-primary uppercase tracking-widest hover:text-accent-red transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-red scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
