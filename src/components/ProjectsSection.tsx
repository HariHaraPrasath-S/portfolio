import { Cpu, Globe, FileText } from 'lucide-react';

const projects = [
  {
    title: 'AI-Based Wireless EV Charging System',
    description: 'Smart wireless charging system for electric vehicles to enhance charging speed and energy efficiency.',
    icon: Cpu,
    tags: ['AI Logic', 'Proteus Simulation', 'Optimized Charging'],
    color: 'from-primary to-cosmic-violet',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Animated space-themed portfolio with smooth UI and modern tools.',
    icon: Globe,
    tags: ['HTML5', 'CSS', 'JavaScript', 'Vite', 'React'],
    color: 'from-cosmic-violet to-cosmic-pink',
  },
  {
    title: 'PDF Cropper Pro',
    description: 'Python-based automation tool for batch PDF cropping designed for eBook/ePub creators.',
    icon: FileText,
    tags: ['Python', 'Smart Edge Detection', 'Batch Processing', 'Auto-Export'],
    color: 'from-accent to-cosmic-cyan',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Soft glow edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cosmic-violet/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-violet/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">My Work</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-3xl p-8 project-card-3d animate-fade-in section-glow"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-background" />
              </div>

              {/* Content */}
              <h3 className="font-space text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom soft glow edge */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default ProjectsSection;
