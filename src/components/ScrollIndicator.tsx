import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-8 bottom-8 z-[90] mix-blend-difference text-background flex items-center gap-4">
      <span className="text-xs font-heading tracking-widest w-8 text-right">
        {Math.round(progress).toString().padStart(2, '0')}
      </span>
      <div className="w-32 h-[1px] bg-background/30 relative">
        <div 
          className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-accent -translate-y-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(244,67,54,0.5)]"
          style={{ left: `${progress}%`, transition: 'left 0.1s linear' }}
        />
      </div>
    </div>
  );
}
