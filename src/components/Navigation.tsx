import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { triggerRocketNavigation } from './RocketScroll';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const planets = [
  { 
    label: 'Home', 
    href: '#hero', 
    type: 'sun',
    size: 'w-8 h-8 sm:w-10 sm:h-10',
  },
  { 
    label: 'About', 
    href: '#about', 
    type: 'mars',
    size: 'w-6 h-6 sm:w-7 sm:h-7',
  },
  { 
    label: 'Skills', 
    href: '#skills', 
    type: 'earth',
    size: 'w-7 h-7 sm:w-8 sm:h-8',
  },
  { 
    label: 'Experience', 
    href: '#experience', 
    type: 'venus',
    size: 'w-6 h-6 sm:w-7 sm:h-7',
  },
  { 
    label: 'Projects', 
    href: '#projects', 
    type: 'jupiter',
    size: 'w-8 h-8 sm:w-9 sm:h-9',
    ring: true,
  },
  { 
    label: 'Certifications', 
    href: '#certifications', 
    type: 'neptune',
    size: 'w-5 h-5 sm:w-6 sm:h-6',
  },
  { 
    label: 'Contact', 
    href: '#contact', 
    type: 'uranus',
    size: 'w-6 h-6 sm:w-7 sm:h-7',
  },
];

const getPlanetStyle = (type: string) => {
  switch (type) {
    case 'sun':
      return {
        background: `radial-gradient(circle at 30% 30%, 
          hsl(55 100% 85%) 0%, 
          hsl(45 100% 65%) 25%, 
          hsl(35 95% 55%) 50%, 
          hsl(25 90% 45%) 75%, 
          hsl(15 85% 35%) 100%)`,
        boxShadow: '0 0 40px hsl(45 100% 60% / 0.6), 0 0 80px hsl(40 100% 50% / 0.3), inset -8px -8px 20px hsl(30 100% 30% / 0.4)',
      };
    case 'mars':
      return {
        background: `radial-gradient(circle at 35% 25%, 
          hsl(15 70% 55%) 0%, 
          hsl(8 65% 45%) 40%, 
          hsl(5 60% 35%) 70%, 
          hsl(0 55% 25%) 100%)`,
        boxShadow: 'inset -6px -6px 15px hsl(0 40% 15% / 0.6), inset 3px 3px 8px hsl(15 80% 70% / 0.2)',
      };
    case 'earth':
      return {
        background: `radial-gradient(circle at 30% 30%, 
          hsl(210 60% 70%) 0%, 
          hsl(200 55% 55%) 20%, 
          hsl(140 45% 45%) 40%, 
          hsl(195 50% 40%) 60%, 
          hsl(210 45% 30%) 100%)`,
        boxShadow: 'inset -6px -6px 15px hsl(210 50% 15% / 0.5), inset 3px 3px 8px hsl(200 70% 80% / 0.3), 0 0 20px hsl(200 60% 50% / 0.2)',
      };
    case 'venus':
      return {
        background: `radial-gradient(circle at 35% 30%, 
          hsl(45 50% 75%) 0%, 
          hsl(40 45% 60%) 40%, 
          hsl(35 40% 50%) 70%, 
          hsl(30 35% 40%) 100%)`,
        boxShadow: 'inset -5px -5px 12px hsl(35 30% 25% / 0.5), inset 2px 2px 6px hsl(50 60% 85% / 0.3)',
      };
    case 'jupiter':
      return {
        background: `linear-gradient(180deg, 
          hsl(35 55% 70%) 0%, 
          hsl(25 50% 55%) 15%, 
          hsl(15 60% 50%) 30%, 
          hsl(30 55% 60%) 45%, 
          hsl(20 50% 45%) 60%, 
          hsl(35 45% 55%) 75%, 
          hsl(25 40% 40%) 100%)`,
        boxShadow: 'inset -8px -8px 20px hsl(25 40% 20% / 0.5), inset 4px 4px 10px hsl(40 70% 80% / 0.2)',
      };
    case 'neptune':
      return {
        background: `radial-gradient(circle at 30% 25%, 
          hsl(220 70% 70%) 0%, 
          hsl(215 65% 55%) 40%, 
          hsl(210 60% 45%) 70%, 
          hsl(205 55% 35%) 100%)`,
        boxShadow: 'inset -5px -5px 12px hsl(210 50% 20% / 0.5), inset 2px 2px 6px hsl(220 80% 85% / 0.3)',
      };
    case 'uranus':
      return {
        background: `radial-gradient(circle at 30% 30%, 
          hsl(180 60% 75%) 0%, 
          hsl(185 55% 60%) 40%, 
          hsl(190 50% 50%) 70%, 
          hsl(195 45% 40%) 100%)`,
        boxShadow: 'inset -5px -5px 12px hsl(190 40% 25% / 0.5), inset 2px 2px 6px hsl(175 70% 85% / 0.3)',
      };
    default:
      return {
        background: 'hsl(var(--muted))',
        boxShadow: 'none',
      };
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.slice(1); // Remove # from href
    
    // Trigger rocket animation
    triggerRocketNavigation(targetId);
    
    // Smooth scroll to target
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header with Logo, Planet Nav, and Hamburger */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-lg shadow-background/50' : 'py-3'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main header row */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                <Rocket className="w-5 h-5 text-background" />
              </div>
              <span className="font-space font-bold text-lg hidden sm:block">HHP</span>
            </a>

            {/* Planet Navigation - Center */}
            <div className="flex-1 flex justify-center px-2 sm:px-4">
              <div className="flex items-end gap-1.5 sm:gap-3 md:gap-4">
                {planets.map((planet) => {
                  const isActive = activeSection === planet.href.slice(1);
                  const isHovered = hoveredPlanet === planet.label;
                  const planetStyle = getPlanetStyle(planet.type);

                  return (
                    <button
                      key={planet.label}
                      onClick={() => handleNavClick(planet.href)}
                      onMouseEnter={() => setHoveredPlanet(planet.label)}
                      onMouseLeave={() => setHoveredPlanet(null)}
                      className="flex flex-col items-center gap-0.5 sm:gap-1 group relative"
                      aria-label={planet.label}
                    >
                      {/* Planet */}
                      <div 
                        className={`relative ${planet.size} rounded-full transition-all duration-300 ease-out`}
                        style={{
                          ...planetStyle,
                          animation: 'planetSpin 20s linear infinite',
                          transform: `scale(${isActive ? 1.1 : isHovered ? 1.15 : 1})`,
                          filter: isHovered ? 'brightness(1.25) saturate(1.1)' : 'brightness(1)',
                          boxShadow: isHovered 
                            ? `${planetStyle.boxShadow}, 0 0 20px hsl(var(--primary) / 0.3)`
                            : planetStyle.boxShadow,
                        }}
                      >
                        {/* Sun corona */}
                        {planet.type === 'sun' && (
                          <div 
                            className="absolute -inset-2 rounded-full opacity-50"
                            style={{
                              background: 'radial-gradient(circle, hsl(45 100% 70% / 0.5) 0%, transparent 70%)',
                              filter: 'blur(4px)',
                              animation: 'sunPulse 4s ease-in-out infinite',
                            }}
                          />
                        )}

                        {/* Atmospheric rim light */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, transparent 40%, hsl(0 0% 100% / 0.15) 60%, hsl(0 0% 100% / 0.25) 75%, transparent 85%)',
                          }}
                        />

                        {/* Ring for Jupiter/Saturn */}
                        {planet.ring && (
                          <div 
                            className="absolute top-1/2 left-1/2 w-[160%] h-[30%] rounded-full pointer-events-none"
                            style={{
                              transform: 'translate(-50%, -50%) rotateX(75deg)',
                              background: 'linear-gradient(90deg, transparent 5%, hsl(35 40% 60% / 0.4) 20%, hsl(40 50% 70% / 0.5) 50%, hsl(35 40% 60% / 0.4) 80%, transparent 95%)',
                              boxShadow: '0 0 8px hsl(40 50% 60% / 0.3)',
                            }}
                          />
                        )}

                        {/* Light reflection */}
                        <div 
                          className="absolute top-[15%] left-[20%] w-[25%] h-[25%] rounded-full"
                          style={{
                            background: 'radial-gradient(circle, hsl(0 0% 100% / 0.4) 0%, transparent 70%)',
                            filter: 'blur(1px)',
                          }}
                        />
                      </div>

                      {/* Label */}
                      <span 
                        className={`text-[8px] sm:text-[10px] font-medium transition-all duration-300 whitespace-nowrap
                          ${isActive ? 'text-primary' : 'text-muted-foreground/70'}
                          ${isHovered ? 'text-foreground' : ''}
                        `}
                      >
                        {planet.label}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <div 
                          className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary"
                          style={{
                            boxShadow: '0 0 6px hsl(var(--primary))',
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl glass hover:bg-secondary/50 transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
                <span className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-5 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Slide-in Menu */}
        <div 
          className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-72 glass border-l border-border/50 transition-all duration-500 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div className="p-6 flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-4 py-3 rounded-xl transition-all duration-300 ${activeSection === item.href.slice(1) ? 'bg-primary/10 text-primary' : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground'}`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} 
              className="cosmic-button text-center py-3 mt-4 text-primary-foreground"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div 
            className="fixed inset-0 top-[60px] bg-background/50 backdrop-blur-sm z-[-1]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* CSS for animations */}
      <style>{`
        @keyframes planetSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </>
  );
};

export default Navigation;