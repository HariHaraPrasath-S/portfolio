import { useEffect, useRef } from 'react';

const CosmicNebula = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const parallaxAmount = scrollY * 0.05;
        containerRef.current.style.transform = `translateY(${parallaxAmount}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, 
            hsl(250 35% 8%) 0%, 
            hsl(240 30% 5%) 35%, 
            hsl(220 25% 3%) 70%,
            hsl(0 0% 1%) 100%)`,
        }}
      />

      {/* Main Nebula Container with Parallax */}
      <div 
        ref={containerRef}
        className="absolute inset-0"
        style={{ willChange: 'transform' }}
      >
        {/* Primary Nebula Cloud - Deep Purple */}
        <div 
          className="absolute top-[-10%] left-[-5%] w-[70vw] h-[60vh]"
          style={{
            background: `radial-gradient(ellipse at 40% 50%, 
              hsl(270 50% 20% / 0.25) 0%, 
              hsl(260 45% 15% / 0.15) 30%,
              hsl(250 40% 10% / 0.08) 50%,
              transparent 70%)`,
            filter: 'blur(80px)',
            animation: 'nebulaDrift1 120s ease-in-out infinite',
          }}
        />

        {/* Secondary Nebula - Blue Tones */}
        <div 
          className="absolute top-[20%] right-[-10%] w-[60vw] h-[70vh]"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, 
              hsl(220 55% 18% / 0.22) 0%, 
              hsl(230 50% 12% / 0.12) 35%,
              hsl(240 45% 8% / 0.06) 55%,
              transparent 75%)`,
            filter: 'blur(100px)',
            animation: 'nebulaDrift2 150s ease-in-out infinite',
          }}
        />

        {/* Left side is intentionally clean dark space - no glows */}

        {/* Deep Core Gradient */}
        <div 
          className="absolute top-[15%] right-[20%] w-[35vw] h-[40vh]"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, 
              hsl(255 50% 22% / 0.2) 0%, 
              hsl(260 45% 15% / 0.1) 40%,
              transparent 65%)`,
            filter: 'blur(60px)',
            animation: 'nebulaCore 90s ease-in-out infinite',
          }}
        />

        {/* Atmospheric Haze Layer - top only, no bottom glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              hsl(250 30% 8% / 0.25) 0%, 
              transparent 15%,
              transparent 100%)`,
          }}
        />
      </div>

      {/* Star Dust Layer - Scattered Fine Particles */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => {
          const size = 0.5 + Math.random() * 2;
          const brightness = 40 + Math.random() * 45;
          const opacity = 0.15 + Math.random() * 0.35;
          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `hsl(${210 + Math.random() * 40} 20% ${brightness}%)`,
                opacity: opacity,
                animation: `starTwinkle ${5 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          );
        })}
      </div>

      {/* Brighter Accent Stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`bright-star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${200 + Math.random() * 60} 30% ${70 + Math.random() * 25}%)`,
              boxShadow: `0 0 ${4 + Math.random() * 6}px hsl(${210 + Math.random() * 50} 40% 60% / 0.5)`,
              animation: `starPulse ${4 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>


      <style>{`
        @keyframes nebulaDrift1 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.25;
          }
          25% { 
            transform: translate(30px, 20px) scale(1.02); 
            opacity: 0.28;
          }
          50% { 
            transform: translate(15px, -15px) scale(1.04); 
            opacity: 0.22;
          }
          75% { 
            transform: translate(-20px, 10px) scale(1.01); 
            opacity: 0.26;
          }
        }
        @keyframes nebulaDrift2 {
          0%, 100% { 
            transform: translate(0, 0) scale(1) rotate(0deg); 
            opacity: 0.22;
          }
          33% { 
            transform: translate(-40px, 25px) scale(1.03) rotate(1deg); 
            opacity: 0.25;
          }
          66% { 
            transform: translate(25px, -20px) scale(0.98) rotate(-1deg); 
            opacity: 0.2;
          }
        }
        @keyframes nebulaDrift3 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.18;
          }
          50% { 
            transform: translate(35px, -30px) scale(1.05); 
            opacity: 0.22;
          }
        }
        @keyframes nebulaDrift4 {
          0%, 100% { 
            transform: translate(0, 0); 
            opacity: 0.12;
          }
          40% { 
            transform: translate(-25px, 15px); 
            opacity: 0.16;
          }
          80% { 
            transform: translate(20px, -10px); 
            opacity: 0.1;
          }
        }
        @keyframes nebulaCore {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.2;
          }
          50% { 
            transform: scale(1.08); 
            opacity: 0.25;
          }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes starPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default CosmicNebula;