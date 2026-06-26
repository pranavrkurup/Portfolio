import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    { title: "AI-Assisted Development", desc: "Leveraging intelligent tooling to accelerate code generation." },
    { title: "Rapid Prototyping", desc: "Iterating quickly from concept to functional interfaces." },
    { title: "Modern Development Workflows", desc: "Utilizing standard CI/CD and modern architectural patterns." },
    { title: "Continuous Learning", desc: "Constantly expanding knowledge in emerging tech fields." }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    stepsRef.current.forEach((el) => {
      if (!el) return;
      
      const line = el.querySelector('.step-line');
      const content = el.querySelector('.step-content');
      
      gsap.fromTo(line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo(content,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 p-8 md:p-16 border-t border-border overflow-hidden">
      
      <div className="absolute top-12 left-8 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-xs font-mono tracking-[0.2em] text-secondary uppercase">05 — PROCESS</div>
        <div className="flex-1 h-[1px] bg-border mr-16" />
      </div>
      
      <div className="max-w-[1400px] mx-auto w-full pt-16 flex flex-col lg:flex-row justify-between gap-24">
        
        <div className="lg:w-1/3">
          <h2 className="text-vertical font-heading text-6xl md:text-[6rem] leading-[0.8] tracking-tighter text-primary uppercase h-[50vh]">
            DEVELOPMENT <br /> <span className="text-accent-red">WORKFLOW</span>
          </h2>
        </div>

        <div className="lg:w-2/3 flex flex-col pt-8 lg:pt-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={el => { stepsRef.current[index] = el; }}
              className="relative pl-12 md:pl-24 pb-16 last:pb-0"
            >
              {/* Connecting vertical line */}
              <div className="step-line absolute left-0 top-2 bottom-[-2rem] w-[1px] bg-border origin-top" />
              {/* Node dot */}
              <div className="absolute left-[-4px] top-4 w-[9px] h-[9px] rounded-full bg-background border-2 border-primary z-10" />
              
              <div className="step-content">
                <span className="text-xs font-mono tracking-[0.2em] text-accent-red uppercase mb-4 block">
                  Phase 0{index + 1}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-tighter text-primary mb-4">
                  {step.title}
                </h3>
                <p className="font-mono text-sm tracking-wide text-secondary uppercase max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
