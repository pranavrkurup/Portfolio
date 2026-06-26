import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    const tl = gsap.timeline();

    // Initial character reveal for "portfolio"
    if (textRef.current) {
      const chars = textRef.current.children;
      gsap.set(chars, { y: 100, opacity: 0 });
      tl.to(chars, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out',
      });
    }

    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Split reveal animation
        const exitTl = gsap.timeline({ onComplete });
        exitTl
          .to(lineRef.current, { scaleX: 1, duration: 0.8, ease: 'power3.inOut' })
          .to(textRef.current ? textRef.current.children : [], { y: -100, opacity: 0, duration: 0.8, stagger: 0.02, ease: 'power3.in' }, '+=0.2')
          .to(percentRef.current, { opacity: 0, duration: 0.4 }, '<')
          .to(lineRef.current, { scaleY: 0, opacity: 0, duration: 0.5, ease: 'power3.inOut' })
          .to(containerRef.current, { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, '-=0.3');
      }
      setProgress(Math.floor(currentProgress));
    }, 100);

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background text-primary"
    >
      <div className="relative overflow-hidden mb-12">
        <h1 
          ref={textRef} 
          className="font-heading text-6xl md:text-[10rem] lowercase tracking-tighter flex"
        >
          {"portfolio".split('').map((char, i) => (
            <span key={i} className="inline-block relative">{char}</span>
          ))}
        </h1>
      </div>
      
      <div className="flex items-center gap-6 w-full max-w-md px-8">
        <span ref={percentRef} className="text-sm font-sans w-8 text-right font-medium">{progress}%</span>
        <div className="flex-1 h-[1px] bg-border relative origin-left">
          <div 
            ref={lineRef}
            className="absolute top-0 left-0 h-full bg-accent origin-left transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}
