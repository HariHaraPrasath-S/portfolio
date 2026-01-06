import { Code, Database, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Skills',
    icon: Code,
    color: 'from-primary to-cosmic-violet',
    skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX Basics', 'React (Learning)'],
  },
  {
    title: 'Data & Tools',
    icon: Database,
    color: 'from-cosmic-violet to-cosmic-pink',
    skills: ['Power BI', 'Python Basics', 'NPTEL Cloud & IIoT', 'Excel', 'Salesforce'],
  },
  {
    title: 'Creative Tools',
    icon: Palette,
    color: 'from-accent to-cosmic-cyan',
    skills: ['Photoshop', 'Figma', 'Canva', 'ePub Tools', 'Document Validation'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">My Arsenal</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A cosmic collection of tools and technologies that fuel my creative journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="font-space text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="skill-badge cosmic-ring"
                  >
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
