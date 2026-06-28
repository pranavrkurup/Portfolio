import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const interests = [
    { text: "FULL-STACK WEB DEVELOPMENT", justify: "justify-start", color: "text-primary" },
    { text: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING", justify: "justify-start md:justify-center", color: "text-secondary" },
    { text: "COMPUTER VISION", justify: "justify-start md:justify-end", color: "text-accent-red" }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    itemsRef.current.forEach((el, index) => {
      if (!el) return;
      
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    });

  }, []);

  return (
    <section id="interests" ref={sectionRef} className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 md:top-16 left-8 md:left-24 z-10 w-full flex items-center gap-6">
        <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-secondary uppercase">03 — INTERESTS</div>
        <div className="flex-1 h-[1px] bg-border mr-8 md:mr-24" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full flex flex-col justify-center gap-24 md:gap-32 pt-24 pb-16 px-8 md:px-24">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            ref={el => { itemsRef.current[index] = el; }}
            className={`w-full flex flex-col md:flex-row items-start md:items-baseline gap-6 md:gap-12 ${interest.justify}`}
          >
            <div className="text-xs font-mono tracking-widest text-secondary mt-2 md:mt-0 flex-shrink-0">
              [0{index + 1}]
            </div>
            <h3 className={`font-heading font-light text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] leading-[1] tracking-tighter uppercase whitespace-normal md:whitespace-nowrap ${interest.color} cursor-default transition-all duration-700 ease-out hover:-translate-y-2`}>
              {interest.text}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
}
