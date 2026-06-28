import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FloatingSocials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ delay: 2.5 }); // Delay to wait for loading screen

    tl.fromTo(linksRef.current,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    ).fromTo(lineRef.current,
      { height: 0, opacity: 0 },
      { height: 96, opacity: 1, duration: 1, ease: 'power3.inOut' },
      "-=0.4"
    );
  }, []);

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/_prnvv?igsh=anM5eWJ1NmkyMmd4' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pranav-r-kurup-4065553a5?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Email', url: 'mailto:pranavrkurup6@gmail.com' }
  ];

  return (
    <div 
      ref={containerRef} 
      className="fixed left-6 md:left-8 bottom-6 md:bottom-0 z-[100] flex flex-row md:flex-col items-center gap-4 md:gap-6"
    >
      <div className="flex flex-row md:flex-col gap-6 items-center">
        {socials.map((social, index) => (
          <a
            key={social.name}
            ref={el => { linksRef.current[index] = el; }}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="text-secondary hover:text-accent-red font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-1 opacity-0 max-md:px-2 md:[writing-mode:vertical-rl] md:rotate-180"
          >
            {social.name}
          </a>
        ))}
      </div>
      <div ref={lineRef} className="w-[1px] h-24 bg-border mt-2 opacity-0" />
    </div>
  );
}
