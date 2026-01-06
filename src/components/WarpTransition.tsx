import { useEffect, useState } from 'react';

interface WarpTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
}

const WarpTransition = ({ isActive, onComplete }: WarpTransitionProps) => {
  const [phase, setPhase] = useState<'idle' | 'entering' | 'peak' | 'exiting'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('entering');
      
      const peakTimer = setTimeout(() => {
        setPhase('peak');
      }, 200);

      const exitTimer = setTimeout(() => {
        setPhase('exiting');
      }, 450);

      const completeTimer = setTimeout(() => {
        setPhase('idle');
        onComplete?.();
      }, 750);

      return () => {
        clearTimeout(peakTimer);
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isActive, onComplete]);

  if (phase === 'idle') return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Central Warp Core */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: phase === 'peak' ? '300vmax' : phase === 'entering' ? '0px' : '400vmax',
          height: phase === 'peak' ? '300vmax' : phase === 'entering' ? '0px' : '400vmax',
          transition: phase === 'entering' 
            ? 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)' 
            : phase === 'peak'
            ? 'all 250ms ease-out'
            : 'all 300ms cubic-bezier(0.4, 0, 1, 1)',
          background: `radial-gradient(circle, 
            hsl(0 0% 0%) 0%,
            hsl(250 80% 10%) 20%,
            hsl(270 60% 15%) 40%,
            hsl(220 50% 8%) 60%,
            transparent 80%
          )`,
          borderRadius: '50%',
          opacity: phase === 'exiting' ? 0 : 1,
        }}
      />

      {/* Light Streaks */}
      {(phase === 'entering' || phase === 'peak' || phase === 'exiting') && (
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            const angle = (i / 40) * 360;
            const length = 50 + Math.random() * 100;
            const delay = Math.random() * 100;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 origin-center"
                style={{
                  width: `${length}vw`,
                  height: '2px',
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    hsl(${180 + Math.random() * 60} 100% 70% / 0.8) 50%, 
                    hsl(${200 + Math.random() * 40} 100% 80%) 100%
                  )`,
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: 'left center',
                  opacity: phase === 'peak' ? 1 : phase === 'entering' ? 0.5 : 0,
                  transition: `all ${250 + delay}ms ease-out`,
                  filter: 'blur(1px)',
                }}
              />
            );
          })}
        </div>
      )}

      {/* Radial Blur Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            hsl(250 90% 65% / ${phase === 'peak' ? 0.3 : 0}) 50%, 
            hsl(270 80% 20% / ${phase === 'peak' ? 0.5 : 0}) 100%
          )`,
          transition: 'all 300ms ease-out',
        }}
      />
    </div>
  );
};

export default WarpTransition;
