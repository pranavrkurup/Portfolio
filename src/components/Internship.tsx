import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Internship() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(textRef.current?.children || [], { y: 0, opacity: 1 });
      return;
    }

    gsap.fromTo(textRef.current?.children || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section id="internship" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-16 border-t border-border overflow-hidden">
      
      <div className="absolute top-8 md:top-12 left-6 md:left-16 z-10 w-full flex items-center gap-4">
        <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-secondary uppercase">06 — EXPERIENCE</div>
        <div className="flex-1 h-[1px] bg-border mr-6 md:mr-16" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 md:pt-16" ref={textRef}>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-primary pb-6 md:pb-8 mb-8 md:mb-16 gap-6 md:gap-0">
          <h2 className="font-heading text-[12vw] sm:text-6xl md:text-7xl xl:text-[7rem] leading-[0.85] tracking-tighter text-primary uppercase break-words w-full md:w-auto">
            IIIT Kottayam
          </h2>
          <div className="text-left md:text-right">
            <span className="inline-block text-xs md:text-sm font-mono tracking-widest text-primary uppercase">
              May 2026
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="col-span-1 lg:col-span-4">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-3 md:mb-4">Role</p>
            <h3 className="text-xl md:text-2xl font-medium text-primary uppercase tracking-wide leading-snug">
              Computer Vision & Object Detection Intern
            </h3>
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.1em] text-accent-red mt-4 md:mt-6">
              Skill Advancement cum Project Mentorship Program
            </p>
          </div>

          <div className="col-span-1 lg:col-span-8">
            <p className="text-base md:text-2xl font-light leading-relaxed text-primary max-w-3xl mb-12">
              Developed an Image-Based Stop Line Violation Detection System using YOLOv8 and OpenCV, gaining hands-on experience in Computer Vision, Image Processing, and AI-powered Object Detection through a one-month internship.
            </p>

            <div>
              <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-4 md:mb-6">Tech Stack</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Python', 'YOLOv8', 'OpenCV', 'NumPy', 'Computer Vision'].map(tech => (
                  <span key={tech} className="px-3 md:px-4 py-2 border border-border text-[10px] md:text-xs font-mono tracking-widest text-primary hover:bg-primary hover:text-background transition-colors duration-300 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
