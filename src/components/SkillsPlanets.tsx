import { 
  Crown, 
  Users, 
  MessageCircle, 
  Clock, 
  Brain, 
  FolderCheck,
  Code,
  Palette,
  Database
} from 'lucide-react';

// Technical skills organized by category with icons
const technicalSkillGroups = [
  {
    category: 'Frontend',
    icon: Code,
    color: 'from-primary to-cosmic-violet',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    category: 'Design / UI',
    icon: Palette,
    color: 'from-cosmic-violet to-cosmic-pink',
    skills: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Photoshop', icon: 'ps' },
    ],
  },
  {
    category: 'Data / Tools',
    icon: Database,
    color: 'from-accent to-cosmic-cyan',
    skills: [
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Python', icon: 'python' },
    ],
  },
];

const interpersonalSkills = [
  { name: 'Leadership', icon: Crown },
  { name: 'Teamwork', icon: Users },
  { name: 'Communication', icon: MessageCircle },
  { name: 'Time Management', icon: Clock },
  { name: 'Problem Solving', icon: Brain },
  { name: 'Planning', icon: FolderCheck },
];

// SVG icons for technical skills with brand colors
const TechIcon = ({ type }: { type: string }) => {
  const iconClass = "w-5 h-5";
  
  switch (type) {
    case 'html5':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      );
    case 'css3':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      );
    case 'js':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#F7DF1E">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      );
    case 'react':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#61DAFB">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      );
    case 'powerbi':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#F2C811">
          <path d="M10.09 0c-.485 0-.878.393-.878.878v22.244c0 .485.393.878.878.878h3.218c.486 0 .879-.393.879-.878V.878A.878.878 0 0 0 13.308 0h-3.22zm6.315 4.4c-.486 0-.879.393-.879.877v17.845c0 .485.393.878.879.878h3.218c.485 0 .878-.393.878-.878V5.277a.878.878 0 0 0-.878-.878h-3.218zM3.775 8.8c-.486 0-.879.392-.879.877v13.445c0 .485.393.878.879.878h3.218c.485 0 .878-.393.878-.878V9.677a.878.878 0 0 0-.878-.878H3.775z"/>
        </svg>
      );
    case 'python':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <defs>
            <linearGradient id="pythonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#306998"/>
              <stop offset="100%" stopColor="#FFD43B"/>
            </linearGradient>
          </defs>
          <path fill="url(#pythonGrad)" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      );
    case 'figma':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path fill="#F24E1E" d="M8.148 24c2.489 0 4.515-2.014 4.515-4.49v-4.49H8.148c-2.489 0-4.515 2.014-4.515 4.49S5.659 24 8.148 24z"/>
          <path fill="#A259FF" d="M3.633 9.51c0-2.476 2.026-4.49 4.515-4.49h4.515v8.98H8.148c-2.489 0-4.515-2.014-4.515-4.49z"/>
          <path fill="#1ABCFE" d="M12.663 0v8.98h4.515c2.489 0 4.515-2.014 4.515-4.49S19.667 0 17.178 0h-4.515z"/>
          <path fill="#FF7262" d="M3.633 4.49c0-2.476 2.026-4.49 4.515-4.49h4.515v8.98H8.148c-2.489 0-4.515-2.014-4.515-4.49z"/>
          <path fill="#0ACF83" d="M12.663 9.51v4.49c0 2.476 2.026 4.49 4.515 4.49s4.515-2.014 4.515-4.49-2.026-4.49-4.515-4.49h-4.515z"/>
        </svg>
      );
    case 'ps':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#31A8FF">
          <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.6-.23-.85-.17-.25-.4-.45-.7-.61zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.39 11.65c-.3.42-.73.75-1.22.97-.48.22-1.05.35-1.7.4-.29.02-.56.02-.81.01-.25-.01-.44-.01-.58-.02v3.5c.01.08-.05.14-.12.15H6.05c-.08.01-.14-.04-.15-.11 0-.01 0-.02 0-.03V7.37c-.01-.07.04-.13.11-.14.01 0 .02 0 .03 0 .31-.02.71-.05 1.19-.08.49-.03.99-.05 1.5-.05.65 0 1.23.09 1.74.27.46.16.88.41 1.23.74.29.28.52.62.67 1.01.14.36.21.74.2 1.13.02.59-.12 1.17-.36 1.7zm7.49 1.47c-.2.42-.54.77-.96.99-.46.26-1.04.39-1.73.42-.41.02-.82 0-1.23-.06-.35-.05-.7-.12-1.04-.22-.07-.02-.12-.08-.12-.15v-1.69c0-.05.02-.1.06-.13.04-.03.09-.04.13-.03.4.15.81.26 1.23.32.38.06.76.1 1.14.1.18 0 .37-.02.54-.1.12-.05.21-.15.24-.28.03-.1.02-.21-.02-.31-.07-.13-.18-.23-.32-.28-.25-.11-.5-.2-.75-.27-.52-.16-.99-.4-1.4-.73-.31-.26-.55-.59-.69-.98-.12-.33-.18-.68-.17-1.04-.01-.43.09-.86.3-1.25.21-.37.51-.68.88-.9.39-.24.86-.4 1.39-.48.47-.07.94-.09 1.41-.06.38.02.76.07 1.13.15.05.01.1.04.13.08.03.04.05.1.05.15v1.6c0 .05-.02.1-.06.13-.04.04-.1.05-.15.03-.34-.11-.68-.19-1.04-.23-.34-.05-.68-.07-1.02-.07-.16 0-.33.02-.49.07-.11.03-.21.1-.28.19-.05.07-.08.15-.08.24 0 .1.04.19.1.26.1.11.22.19.35.26.23.11.47.2.71.29.49.17.94.41 1.34.73.29.24.53.55.68.9.13.33.2.69.18 1.05.01.46-.1.91-.32 1.31z"/>
        </svg>
      );
    default:
      return <Code className={iconClass} />;
  }
};

const TechSkillPill = ({ skill }: { skill: { name: string; icon: string } }) => (
  <div 
    className="px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-default group flex items-center gap-3"
    style={{
      background: 'linear-gradient(135deg, hsl(var(--card) / 0.5) 0%, hsl(var(--card) / 0.25) 100%)',
      backdropFilter: 'blur(12px)',
      border: '1px solid hsl(var(--primary) / 0.12)',
      boxShadow: '0 2px 12px hsl(var(--background) / 0.4), inset 0 1px 0 hsl(var(--foreground) / 0.04)',
    }}
  >
    <div className="text-primary/70 group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
      <TechIcon type={skill.icon} />
    </div>
    <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-300">{skill.name}</span>
  </div>
);

// Interpersonal skill colors for visual differentiation
const interpersonalColors: Record<string, { iconColor: string; hoverColor: string }> = {
  'Leadership': { iconColor: 'text-purple-400', hoverColor: 'group-hover:text-purple-300' },
  'Teamwork': { iconColor: 'text-cyan-400', hoverColor: 'group-hover:text-cyan-300' },
  'Communication': { iconColor: 'text-blue-400', hoverColor: 'group-hover:text-blue-300' },
  'Time Management': { iconColor: 'text-indigo-400', hoverColor: 'group-hover:text-indigo-300' },
  'Problem Solving': { iconColor: 'text-violet-400', hoverColor: 'group-hover:text-violet-300' },
  'Planning': { iconColor: 'text-sky-400', hoverColor: 'group-hover:text-sky-300' },
};

const InterpersonalSkillPill = ({ skill }: { skill: { name: string; icon: React.ComponentType<{ className?: string }> } }) => {
  const IconComponent = skill.icon;
  const colors = interpersonalColors[skill.name] || { iconColor: 'text-cosmic-violet', hoverColor: 'group-hover:text-cosmic-violet' };
  
  return (
    <div 
      className="px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-default group flex items-center gap-3"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--card) / 0.5) 0%, hsl(var(--card) / 0.25) 100%)',
        backdropFilter: 'blur(12px)',
        border: '1px solid hsl(var(--cosmic-violet) / 0.12)',
        boxShadow: '0 2px 12px hsl(var(--background) / 0.4), inset 0 1px 0 hsl(var(--foreground) / 0.04)',
      }}
    >
      <IconComponent className={`w-5 h-5 ${colors.iconColor} ${colors.hoverColor} transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]`} />
      <span className="font-medium text-foreground text-sm group-hover:text-foreground/90 transition-colors duration-300">{skill.name}</span>
    </div>
  );
};

const SkillsPlanets = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">My Arsenal</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Technical Skills - Grouped */}
          <div 
            className="p-6 md:p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--card) / 0.35) 0%, hsl(var(--card) / 0.15) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid hsl(var(--primary) / 0.08)',
              boxShadow: '0 8px 40px hsl(var(--background) / 0.5)',
            }}
          >
            <h3 className="font-space text-xl font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkillGroups.map((group) => (
                <div key={group.category}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                      <group.icon className="w-4 h-4 text-background" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{group.category}</span>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5 ml-11">
                    {group.skills.map((skill) => (
                      <TechSkillPill key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interpersonal Skills */}
          <div 
            className="p-6 md:p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--card) / 0.35) 0%, hsl(var(--card) / 0.15) 100%)',
              backdropFilter: 'blur(16px)',
              border: '1px solid hsl(var(--cosmic-violet) / 0.08)',
              boxShadow: '0 8px 40px hsl(var(--background) / 0.5)',
            }}
          >
            <h3 className="font-space text-xl font-semibold text-foreground mb-6">
              Interpersonal Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {interpersonalSkills.map((skill) => (
                <InterpersonalSkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPlanets;
