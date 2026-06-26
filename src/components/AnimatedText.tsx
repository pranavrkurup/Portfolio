import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'chars' | 'words' | 'lines';
  delay?: number;
}

export default function AnimatedText({ text, className = '', type = 'words', delay = 0 }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;
    
    gsap.fromTo(
      elements,
      {
        y: 100,
        opacity: 0,
        rotate: 5,
      },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, [delay, text]);

  const renderContent = () => {
    if (type === 'chars') {
      return text.split('').map((char, index) => (
        <span key={index} className="inline-block relative">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    
    if (type === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="inline-block relative mr-[0.25em]">
          {word}
        </span>
      ));
    }

    return <span className="inline-block relative">{text}</span>;
  };

  return (
    <div ref={containerRef} className={`overflow-hidden inline-flex flex-wrap ${className}`}>
      {renderContent()}
    </div>
  );
}
