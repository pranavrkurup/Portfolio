import { useTheme } from '../ThemeContext';

export default function VerticalLabels() {
  const { cycleTheme, theme } = useTheme();

  return (
    <>
      <div className="fixed left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-[90] pointer-events-none mix-blend-difference text-background">
        <p className="text-xs tracking-[0.3em] font-heading uppercase whitespace-nowrap">
          Portfolio — Pranav R Kurup
        </p>
      </div>
      
      <div className="fixed right-8 bottom-32 -rotate-90 origin-bottom-right z-[90] mix-blend-difference text-background">
        <button 
          onClick={cycleTheme}
          data-cursor="hover"
          className="text-xs tracking-[0.3em] font-heading uppercase whitespace-nowrap hover:text-accent transition-colors"
        >
          Theme: {theme}
        </button>
      </div>
    </>
  );
}
