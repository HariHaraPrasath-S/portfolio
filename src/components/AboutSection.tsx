import { Zap, BookOpen, Star } from 'lucide-react';

const stats = [
  { icon: Zap, value: '3+', label: 'Internships' },
  { icon: BookOpen, value: '6+', label: 'Tech Certificates' },
  { icon: Star, value: '1', label: 'Universe-Sized Curiosity' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">About Me</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Story Mode
          </h2>
        </div>

        {/* Content - Clean Text Focus */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Story Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12 section-glow animate-fade-in">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Hello! I'm <span className="text-foreground font-bold gradient-text">Hari Hara Prasath S</span> — an Electronics and Communication Engineering graduate who blends design, technology, and imagination to create meaningful digital experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
              I love creating interfaces that feel alive, analyzing data to find meaning, and infusing every project with a touch of cosmic personality. My journey spans frontend development, data analytics, and creative design tools.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
              With experience leading teams and a passion for continuous learning, I aim to grow in dynamic environments while expanding my technical and creative horizons. Every line of code I write is a step toward building something extraordinary.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 animate-fade-in animation-delay-300">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform section-glow"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold font-space gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;