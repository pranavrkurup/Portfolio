import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

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
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen py-32 border-t border-border flex flex-col justify-between overflow-hidden">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-accent-red" />
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">10 — CONNECT</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center px-8 md:px-16 mt-16">
        
        <h2 ref={titleRef} className="font-heading text-[12vw] leading-[0.8] tracking-tighter uppercase text-primary mb-16">
          <span className="block hover:text-accent-red transition-colors duration-500">LET'S</span>
          <span className="block">CONNECT.</span>
        </h2>

        <div>
          <a 
            href="mailto:pranavrkurup6@gmail.com"
            data-cursor="hover"
            className="group inline-flex items-center gap-6 px-12 py-6 border border-primary bg-primary text-background transition-colors duration-500 hover:bg-transparent hover:text-primary"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em]">Get In Touch</span>
            <span className="text-xl transition-transform duration-500 group-hover:translate-x-3">→</span>
          </a>
        </div>

      </div>

      {/* Footer Info Grid */}
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-primary pt-12 px-8 md:px-16">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">Name</span>
          <span className="text-sm font-sans text-primary uppercase tracking-widest">Pranav R Kurup</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">Location</span>
          <span className="text-sm font-sans text-primary uppercase tracking-widest">Kerala, India</span>
        </div>
        <div className="flex flex-col gap-2 col-span-2 md:col-span-2 items-start md:items-end">
          <span className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">Social</span>
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Email", url: "mailto:pranavrkurup6@gmail.com" },
              { label: "GitHub", url: "https://github.com/pranavrkurup" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/pranav-r-kurup-4065553a5" },
              { label: "Instagram", url: "https://www.instagram.com/_prnvv" }
            ].map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group relative text-sm font-sans text-primary uppercase tracking-widest hover:text-accent-red transition-colors"
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
