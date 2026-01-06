import { useEffect, useState, useCallback } from 'react';

// Create a custom event for navigation clicks
export const triggerRocketNavigation = (targetId: string) => {
  const event = new CustomEvent('rocketNavigate', { detail: { targetId } });
  window.dispatchEvent(event);
};

const RocketScroll = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const [rocketPosition, setRocketPosition] = useState(15);
  const [showExhaust, setShowExhaust] = useState(false);

  const handleNavigation = useCallback((e: CustomEvent<{ targetId: string }>) => {
    const targetId = e.detail.targetId;
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) return;

    const currentScrollY = window.scrollY;
    const targetScrollY = targetElement.offsetTop - 80; // Account for nav height
    const scrollDirection = targetScrollY > currentScrollY ? 'down' : 'up';
    
    setDirection(scrollDirection);
    setIsNavigating(true);
    setShowExhaust(true);

    // Calculate positions
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const startPercent = maxScroll > 0 ? (currentScrollY / maxScroll) * 70 + 15 : 15;
    const endPercent = maxScroll > 0 ? (targetScrollY / maxScroll) * 70 + 15 : 15;
    
    setRocketPosition(startPercent);

    // Animate rocket position smoothly synced with scroll
    const startTime = performance.now();
    const duration = 800; // Match scroll duration
    
    const animateRocket = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPos = startPercent + (endPercent - startPercent) * easeOut;
      
      setRocketPosition(Math.min(Math.max(currentPos, 10), 85));
      
      if (progress < 1) {
        requestAnimationFrame(animateRocket);
      } else {
        setIsNavigating(false);
        setShowExhaust(false);
      }
    };
    
    requestAnimationFrame(animateRocket);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => handleNavigation(e as CustomEvent<{ targetId: string }>);
    window.addEventListener('rocketNavigate', handler);
    return () => window.removeEventListener('rocketNavigate', handler);
  }, [handleNavigation]);

  return (
    <div 
      className={`fixed right-6 z-40 pointer-events-none transition-opacity duration-300 ${
        isNavigating ? 'opacity-100' : 'opacity-40'
      }`}
      style={{ 
        top: `${rocketPosition}%`,
        transform: `translateY(-50%)`,
        transition: isNavigating ? 'none' : 'top 0.3s ease-out, opacity 0.3s ease-out',
      }}
    >
      {/* Rocket Container - always vertical, no rotation */}
      <div className="relative">
        {/* Subtle ambient glow when idle */}
        {!isNavigating && (
          <div 
            className="absolute inset-[-6px] rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, hsl(210 30% 70% / 0.2) 0%, transparent 70%)',
              filter: 'blur(6px)',
            }}
          />
        )}
        
        {/* Realistic Rocket Body - Always straight vertical */}
        <div 
          className={`relative transition-all duration-200 ${
            isNavigating ? 'scale-110' : 'scale-100'
          }`}
          style={{
            width: '18px',
            height: '42px',
            // Flip the rocket 180deg when going down so nose points down
            transform: direction === 'down' ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-out',
          }}
        >
          {/* Rocket Nose Cone (TOP when going up) */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '14px solid hsl(0 0% 85%)',
              filter: 'drop-shadow(0 -2px 4px hsl(0 0% 100% / 0.3))',
            }}
          />
          {/* Nose cone highlight */}
          <div 
            style={{
              position: 'absolute',
              top: '4px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '3px solid transparent',
              borderRight: '3px solid transparent',
              borderBottom: '8px solid hsl(0 0% 95%)',
            }}
          />
          
          {/* Main Body */}
          <div 
            style={{
              position: 'absolute',
              top: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '12px',
              height: '22px',
              background: `linear-gradient(90deg, 
                hsl(210 10% 60%) 0%, 
                hsl(210 15% 80%) 30%,
                hsl(210 10% 90%) 50%,
                hsl(210 15% 80%) 70%,
                hsl(210 10% 60%) 100%)`,
              borderRadius: '2px',
              boxShadow: isNavigating 
                ? '0 0 12px hsl(40 100% 60% / 0.4), inset 0 0 8px hsl(0 0% 100% / 0.2)'
                : 'inset 0 0 6px hsl(0 0% 100% / 0.15)',
            }}
          />
          {/* Body window/detail */}
          <div 
            style={{
              position: 'absolute',
              top: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '5px',
              height: '5px',
              background: `radial-gradient(circle, hsl(200 80% 70%) 0%, hsl(210 70% 45%) 100%)`,
              borderRadius: '50%',
              boxShadow: '0 0 4px hsl(200 80% 60% / 0.6)',
            }}
          />
          
          {/* Left Fin */}
          <div 
            style={{
              position: 'absolute',
              bottom: '2px',
              left: '-3px',
              width: '6px',
              height: '10px',
              background: `linear-gradient(135deg, hsl(0 70% 50%) 0%, hsl(0 60% 40%) 100%)`,
              clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
              borderRadius: '0 0 2px 2px',
            }}
          />
          
          {/* Right Fin */}
          <div 
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '-3px',
              width: '6px',
              height: '10px',
              background: `linear-gradient(225deg, hsl(0 70% 50%) 0%, hsl(0 60% 40%) 100%)`,
              clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
              borderRadius: '0 0 2px 2px',
            }}
          />
          
          {/* Engine Nozzle (BOTTOM - where fire comes from) */}
          <div 
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '8px',
              height: '6px',
              background: `linear-gradient(180deg, hsl(210 10% 45%) 0%, hsl(210 10% 30%) 100%)`,
              borderRadius: '0 0 3px 3px',
            }}
          />

          {/* Exhaust/Fire - comes from the BOTTOM/back of rocket */}
          {showExhaust && (
            <>
              {/* Main flame - positioned at the bottom (engine nozzle) */}
              <div 
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: '100%',
                  marginTop: '2px',
                  width: '8px',
                  height: '35px',
                  background: `linear-gradient(to bottom, 
                    hsl(45 100% 70% / 0.95) 0%, 
                    hsl(35 100% 60% / 0.8) 20%, 
                    hsl(25 100% 55% / 0.5) 45%, 
                    hsl(15 100% 50% / 0.25) 70%,
                    transparent 100%)`,
                  filter: 'blur(2px)',
                  borderRadius: '50% 50% 50% 50%',
                  animation: 'exhaustFlicker 0.08s ease-in-out infinite alternate',
                }}
              />
              {/* Outer flame glow */}
              <div 
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: '100%',
                  marginTop: '4px',
                  width: '16px',
                  height: '25px',
                  background: `radial-gradient(ellipse at center top, 
                    hsl(40 100% 65% / 0.5) 0%, 
                    hsl(30 100% 55% / 0.2) 50%,
                    transparent 80%)`,
                  filter: 'blur(4px)',
                }}
              />
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes exhaustFlicker {
          0% { opacity: 0.8; transform: translateX(-50%) scaleY(0.95) scaleX(0.9); }
          100% { opacity: 1; transform: translateX(-50%) scaleY(1.05) scaleX(1.1); }
        }
      `}</style>
    </div>
  );
};

export default RocketScroll;
