import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const interests = [
    { text: "FULL-STACK DEVELOPMENT", justify: "justify-start", color: "text-primary" },
    { text: "AI & ML", justify: "justify-start md:justify-end", color: "text-secondary" },
    { text: "COMPUTER VISION", justify: "justify-start md:justify-center", color: "text-accent-red" }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    itemsRef.current.forEach((el, index) => {
      if (!el) return;
      
      gsap.fromTo(el,
        { y: 80, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    });

  }, []);

  return (
    <section id="interests" ref={sectionRef} className="relative py-32 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">03 — INTERESTS</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center gap-16 md:gap-24 pt-32 pb-16 px-8 md:px-16">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            ref={el => { itemsRef.current[index] = el; }}
            className={`w-full flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-8 ${interest.justify}`}
          >
            <div className="text-xs font-mono tracking-widest text-secondary mt-1 md:mt-0 flex-shrink-0">
              [0{index + 1}]
            </div>
            <h3 className={`font-heading text-4xl md:text-5xl lg:text-[5rem] leading-[1.1] tracking-tighter uppercase whitespace-normal md:whitespace-nowrap ${interest.color} cursor-default transition-transform duration-500 hover:scale-[1.02]`}>
              {interest.text}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
}
