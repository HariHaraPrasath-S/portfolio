import { Download, Briefcase, Sparkles, Instagram, Linkedin, Phone } from 'lucide-react';
import hariReal1 from '@/assets/hari-real-1.jpg';
import CosmicOrb from './CosmicOrb';

// GitHub icon component (Lucide doesn't have exact GitHub icon)
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const socialLinks = [
  { 
    icon: GitHubIcon, 
    href: 'https://github.com/HariHaraPrasath-S', 
    label: 'GitHub',
    hoverBg: 'hover:bg-[#24292F] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)]',
    isCustomIcon: true
  },
  { 
    icon: Instagram, 
    href: 'http://instagram.com/mr.h_h_p04', 
    label: 'Instagram',
    hoverBg: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/hari-hara-prasath-s/', 
    label: 'LinkedIn',
    hoverBg: 'hover:bg-[#0077B5]',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
  },
  { 
    icon: Phone, 
    href: 'tel:+918072163059', 
    label: 'Phone',
    hoverBg: 'hover:bg-green-500',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
  },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Effects - top-right only, left side is clean dark space */}
      <CosmicOrb className="-top-[200px] -right-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Circular Portrait with Premium Glow */}
          <div className="relative mb-10 group">
            {/* Outer glow ring */}
            <div className="absolute inset-[-30px] rounded-full bg-gradient-to-r from-primary/30 via-cosmic-violet/40 to-accent/30 blur-2xl animate-pulse-slow" />
            
            {/* Animated border ring */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-primary via-cosmic-violet to-accent p-[2px] animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            
            {/* Secondary glow */}
            <div className="absolute inset-[-20px] rounded-full opacity-50">
              <div className="absolute inset-0 rounded-full bg-gradient-conic from-primary via-cosmic-violet via-accent to-primary animate-spin-slow" style={{ animationDuration: '12s' }} />
            </div>

            {/* Image container - Circular */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden float-slow border-4 border-background shadow-2xl">
              <img
                src={hariReal1}
                alt="Hari Hara Prasath S"
                className="w-full h-full object-cover object-top scale-110"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 blur-sm animate-float" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-accent/30 blur-sm animate-float animation-delay-300" />
          </div>

          {/* Name & Title */}
          <div className="mt-6 animate-fade-in animation-delay-200">
            <h1 className="font-space text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Hari Hara Prasath S</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium tracking-wide max-w-2xl mx-auto">
              ECE Graduate → Frontend Developer → Data Enthusiast
            </p>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in animation-delay-300 italic opacity-80">
            "Exploring the intersection of creativity, code and cosmic curiosity."
          </p>

          {/* Social Links - Full Background Color on Hover */}
          <div className="flex gap-4 mt-8 animate-fade-in animation-delay-400">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-all duration-300 group hover:border-transparent ${social.hoverBg}`}
                aria-label={social.label}
              >
                {social.isCustomIcon ? (
                  <div className={`text-muted-foreground transition-all duration-300 ${social.hoverIcon}`}>
                    <social.icon />
                  </div>
                ) : (
                  <social.icon className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${social.hoverIcon}`} />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in animation-delay-500">
            <a
              href="#contact"
              className="cosmic-button flex items-center gap-2 text-primary-foreground group"
            >
              <Briefcase className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all" />
              Hire Me
            </a>
            <a
              href="/Hari_Hara_Prasath_S_Resume.pdf"
              download="Hari_Hara_Prasath_S_Resume.pdf"
              className="px-6 py-3 rounded-full glass font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300 group hover:border-accent/50"
            >
              <Download className="w-5 h-5 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,220,220,0.6)] transition-all" />
              <span className="group-hover:text-accent transition-colors">Download Resume</span>
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full glass font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300 group hover:border-primary/50"
            >
              <Sparkles className="w-5 h-5 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all" />
              <span className="group-hover:text-primary transition-colors">See My Universe</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-slow">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;