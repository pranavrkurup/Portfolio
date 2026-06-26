import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function EditorialQuote({ quote, author }: { quote: string, author?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="py-32 flex flex-col items-center justify-center text-center px-8 border-t border-border">
      <h3 className="font-heading text-5xl md:text-7xl lowercase tracking-tighter text-primary/20 max-w-5xl leading-tight">
        "{quote}"
      </h3>
      {author && (
        <p className="mt-8 text-sm uppercase tracking-widest text-secondary">
          — {author}
        </p>
      )}
    </div>
  );
}
