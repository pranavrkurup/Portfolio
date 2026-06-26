import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3.out' });

    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      
      if (!isHovering) {
        gsap.to(cursor, { opacity: 1, duration: 0.2 });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverTarget = target.closest('[data-cursor]');
      
      if (hoverTarget) {
        isHovering = true;
        const cursorType = hoverTarget.getAttribute('data-cursor');
        
        if (cursorType !== 'hover') {
          setCursorText(cursorType || '');
          gsap.to(cursor, {
            scale: 4,
            backgroundColor: 'var(--color-accent-red)',
            mixBlendMode: 'normal',
            duration: 0.3,
            ease: 'power2.out'
          });
        } else {
          setCursorText('');
          gsap.to(cursor, {
            scale: 0.5,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      } else if (isHovering) {
        isHovering = false;
        setCursorText('');
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          backgroundColor: 'var(--color-primary)',
          mixBlendMode: 'difference',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] bg-primary mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-colors"
      style={{ opacity: 0 }}
    >
      <span ref={textRef} className="text-[3px] font-mono font-bold tracking-widest text-background uppercase absolute whitespace-nowrap">
        {cursorText}
      </span>
    </div>
  );
}
