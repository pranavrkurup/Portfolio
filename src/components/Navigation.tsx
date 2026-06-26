import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('cover');
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, backdropFilter: 'blur(0px)' },
        { opacity: 1, backdropFilter: 'blur(20px)', duration: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo(mobileItemsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        backdropFilter: 'blur(0px)',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-[110] w-12 h-12 flex flex-col items-center justify-center gap-1.5 mix-blend-difference"
        aria-label="Toggle Menu"
      >
        <span className={`w-6 h-[1.5px] bg-bg transition-transform duration-500 ease-out ${isOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
        <span className={`w-6 h-[1.5px] bg-bg transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`w-6 h-[1.5px] bg-bg transition-transform duration-500 ease-out ${isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
      </button>

      {/* Mobile Full-Screen Overlay */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 z-[100] bg-bg/95 flex flex-col items-center justify-center pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              ref={el => { mobileItemsRef.current[index] = el; }}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`font-heading text-4xl uppercase tracking-widest transition-colors duration-300
                ${activeSection === item.id ? 'text-accent-red' : 'text-primary hover:text-secondary'}
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav 
        ref={navRef}
        className="hidden md:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 bg-background/80 backdrop-blur-md border border-border items-center gap-8 shadow-sm"
      >
        {navItems.map((item, index) => (
          <a
            key={item.id}
            ref={el => { itemsRef.current[index] = el; }}
            href={`#${item.id}`}
            data-cursor="hover"
            className={`relative z-10 text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300
              ${activeSection === item.id ? 'text-[#C24A35] font-medium' : 'text-secondary hover:text-primary'}
            `}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C24A35] rounded-full" />
            )}
          </a>
        ))}
      </nav>
    </>
  );
}
