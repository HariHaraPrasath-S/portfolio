import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const orbitItems = [
  { icon: Home, label: 'Home', href: '#hero', angle: 0 },
  { icon: User, label: 'About', href: '#about', angle: 72 },
  { icon: Code, label: 'Skills', href: '#skills', angle: 144 },
  { icon: Briefcase, label: 'Projects', href: '#projects', angle: 216 },
  { icon: Mail, label: 'Contact', href: '#contact', angle: 288 },
];

interface OrbitNavigationProps {
  onNavigate?: (href: string) => void;
}

const OrbitNavigation = ({ onNavigate }: OrbitNavigationProps) => {
  const [rotation, setRotation] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Slow continuous rotation
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.02) % 360);
    }, 50);

    // Track active section
    const handleScroll = () => {
      const sections = orbitItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const orbitRadius = 90;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <div className="relative w-[220px] h-[220px]">
        {/* Orbit Ring */}
        <div 
          className="absolute inset-[20px] rounded-full border border-primary/20"
          style={{
            boxShadow: '0 0 20px hsl(250 90% 65% / 0.1), inset 0 0 20px hsl(250 90% 65% / 0.05)',
          }}
        />
        
        {/* Secondary Orbit Ring - Fainter */}
        <div 
          className="absolute inset-[15px] rounded-full border border-primary/10"
          style={{
            boxShadow: '0 0 30px hsl(270 100% 65% / 0.05)',
          }}
        />

        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-cosmic-violet/30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Orbit Items */}
        {orbitItems.map((item) => {
          const currentAngle = item.angle + rotation;
          const radians = (currentAngle * Math.PI) / 180;
          const x = Math.cos(radians) * orbitRadius;
          const y = Math.sin(radians) * orbitRadius;
          const isActive = activeSection === item.href.slice(1);
          const isHovered = hoveredItem === item.label;

          return (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`absolute top-1/2 left-1/2 flex items-center justify-center transition-all duration-300 rounded-full
                ${isActive ? 'w-12 h-12' : 'w-10 h-10'}
                ${isHovered ? 'scale-125 z-10' : 'scale-100'}
              `}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                background: isActive 
                  ? 'linear-gradient(135deg, hsl(250 90% 65%), hsl(270 100% 65%))' 
                  : 'linear-gradient(135deg, hsl(240 20% 10%), hsl(240 20% 6%))',
                border: `1px solid ${isActive ? 'hsl(250 90% 65%)' : isHovered ? 'hsl(250 90% 65% / 0.5)' : 'hsl(250 90% 65% / 0.2)'}`,
                boxShadow: isActive 
                  ? '0 0 30px hsl(250 90% 65% / 0.6), 0 0 60px hsl(270 100% 65% / 0.3)' 
                  : isHovered 
                  ? '0 0 20px hsl(250 90% 65% / 0.4)' 
                  : '0 0 10px hsl(250 90% 65% / 0.1)',
              }}
              aria-label={item.label}
            >
              <item.icon 
                className={`transition-all duration-300 ${isActive ? 'w-5 h-5 text-primary-foreground' : 'w-4 h-4 text-muted-foreground'} ${isHovered && !isActive ? 'text-primary' : ''}`}
              />

              {/* Label Tooltip */}
              {isHovered && (
                <span 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full glass text-xs font-medium whitespace-nowrap animate-fade-in"
                  style={{
                    boxShadow: '0 0 20px hsl(250 90% 65% / 0.2)',
                  }}
                >
                  {item.label}
                </span>
              )}

              {/* Active Glow Ring */}
              {isActive && (
                <div 
                  className="absolute inset-[-4px] rounded-full animate-pulse"
                  style={{
                    background: 'linear-gradient(135deg, hsl(250 90% 65% / 0.3), hsl(270 100% 65% / 0.3))',
                    filter: 'blur(4px)',
                  }}
                />
              )}
            </button>
          );
        })}

        {/* Orbit Trail Effect */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: `rotate(${rotation}deg)` }}>
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(250 90% 65%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(270 100% 65%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(185 100% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="110"
            cy="110"
            r={orbitRadius}
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="2"
            strokeDasharray="30 150"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default OrbitNavigation;
