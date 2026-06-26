import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ThankYou() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    gsap.fromTo(textRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="thankyou" ref={sectionRef} className="relative min-h-[90vh] p-8 md:p-16 flex flex-col justify-between border-t border-border">
      
      <div className="absolute top-16 left-8 md:left-16 z-10 w-full mb-16">
        <div className="text-sm font-heading tracking-widest uppercase opacity-50">09 / Fin</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative w-full">
        <h2 ref={textRef} className="font-heading text-[6rem] md:text-[14rem] lowercase tracking-tighter text-accent flex flex-col md:flex-row items-center gap-4 md:gap-8 leading-none mix-blend-difference">
          thank you
          <span className="w-8 h-8 md:w-12 md:h-12 bg-accent rounded-full inline-block mt-4 md:mt-0" />
        </h2>
      </div>
      
      <div className="flex justify-between items-end w-full border-t border-border pt-8 mt-16 text-xs md:text-sm font-heading uppercase tracking-widest text-secondary">
        <div>
          <p>Pranav R Kurup</p>
        </div>
        <div>
          <p className="text-right">Portfolio 2026 Edition</p>
        </div>
      </div>
    </section>
  );
}
