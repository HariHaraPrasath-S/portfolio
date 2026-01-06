import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create varied stars for depth
    const stars: Star[] = [];
    const numStars = 350;

    for (let i = 0; i < numStars; i++) {
      // Create three layers of stars for depth
      const layer = Math.random();
      let size, speed, opacity;
      
      if (layer < 0.5) {
        // Distant small stars
        size = Math.random() * 0.8 + 0.3;
        speed = Math.random() * 0.08 + 0.02;
        opacity = Math.random() * 0.4 + 0.1;
      } else if (layer < 0.85) {
        // Mid-distance stars
        size = Math.random() * 1.5 + 0.5;
        speed = Math.random() * 0.15 + 0.05;
        opacity = Math.random() * 0.5 + 0.2;
      } else {
        // Closer bright stars
        size = Math.random() * 2.5 + 1;
        speed = Math.random() * 0.25 + 0.1;
        opacity = Math.random() * 0.6 + 0.3;
      }
      
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        opacity,
        speed,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      stars.forEach((star, index) => {
        // Twinkle effect
        const twinkle = Math.sin(time * star.speed * 2 + index) * 0.3 + 0.7;
        
        // Create gradient for star glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        
        const hue = 220 + Math.sin(index) * 40; // Vary between blue and violet
        gradient.addColorStop(0, `hsla(${hue}, 80%, 80%, ${star.opacity * twinkle})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 60%, 60%, ${star.opacity * twinkle * 0.3})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core of star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, 95%, ${star.opacity * twinkle})`;
        ctx.fill();

        // Slow parallax drift
        star.y += star.speed * 0.05;
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarField;
