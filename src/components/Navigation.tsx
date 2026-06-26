import { useEffect, useState, useRef } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('cover');
  const navRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const navItems = [
    { id: 'cover', label: 'Index' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const { top } = section.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 bg-background/80 backdrop-blur-md border border-border flex items-center gap-8 shadow-sm"
    >
      {navItems.map((item, index) => (
        <a
          key={item.id}
          ref={el => { itemsRef.current[index] = el; }}
          href={`#${item.id}`}
          data-cursor="hover"
          className={`relative z-10 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300
            ${activeSection === item.id ? 'text-[#C24A35] font-medium' : 'text-secondary hover:text-primary'}
          `}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(item.id);
            if (el) {
              window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth'
              });
            }
          }}
        >
          {item.label}
          {activeSection === item.id && (
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C24A35] rounded-full" />
          )}
        </a>
      ))}
    </nav>
  );
}
