import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedText from './AnimatedText';

export default function Goal() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="goal" ref={sectionRef} className="relative min-h-screen p-8 md:p-16 flex items-center justify-center bg-background border-t border-border">
      <div className="absolute top-32 left-16 w-16 h-16 rounded-full bg-accent/20 mix-blend-multiply blur-sm" />
      
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-3">
          <h2 className="font-heading text-4xl md:text-6xl lowercase tracking-tighter text-accent sticky top-32">
            <AnimatedText text="goal" type="chars" />
          </h2>
        </div>
        
        <div className="col-span-1 md:col-span-9 pt-8 md:pt-0" ref={contentRef}>
          <p className="text-2xl md:text-4xl leading-relaxed font-light text-primary/90">
            My goal is to grow into a proficient software engineer with expertise in Full-Stack Development, Artificial Intelligence, and Computer Vision. I am currently focused on strengthening my understanding of Data Structures & Algorithms (DSA), System Design, and scalable software development. Through the SB Tech Team, I look forward to collaborating on innovative projects, contributing to open-source initiatives, and gaining real-world engineering experience.
          </p>
        </div>
      </div>
    </section>
  );
}
