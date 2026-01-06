const CosmicOrb = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Main orb */}
      <div className="relative w-[600px] h-[600px]">
        {/* Outer glow */}
        <div 
          className="absolute inset-0 rounded-full animate-nebula-drift"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(270 100% 65% / 0.15) 0%, hsl(250 90% 65% / 0.1) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Inner glow */}
        <div 
          className="absolute inset-[100px] rounded-full animate-nebula-drift"
          style={{
            background: 'radial-gradient(circle at 60% 40%, hsl(185 100% 60% / 0.2) 0%, hsl(250 90% 65% / 0.1) 50%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '-10s',
          }}
        />
        
        {/* Core */}
        <div 
          className="absolute inset-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 40%, hsl(250 90% 65% / 0.3) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </div>
  );
};

export default CosmicOrb;
