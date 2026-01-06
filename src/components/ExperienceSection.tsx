import { Building2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Web Developer',
    company: 'LCS Solutions',
    location: 'Trichy',
    period: '05/2025 – Present',
    highlights: [
      'Created and maintained HTML and CSS-based web structures according to user and project requirements',
      'Translated functional and content requirements into well-structured, semantic frontend layouts',
      'Ensured layout consistency, proper alignment, and responsive behavior across different screen sizes',
      'Modified and optimized existing page structures based on feedback and updated requirements',
      'Identified and fixed frontend structure and layout issues to improve usability and presentation',
      'Collaborated with team members to deliver structured frontend components within defined timelines',
      'Followed standard coding practices to ensure clean, readable, and maintainable code',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Career Journey</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Experience Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cosmic-violet to-accent" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent" />
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${idx % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                <div className="glass-card rounded-3xl p-8 project-card-3d">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cosmic-violet flex items-center justify-center shrink-0">
                      <Building2 className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <h3 className="font-space text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.period} • {exp.location}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
