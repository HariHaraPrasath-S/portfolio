import { Award, Shield, Cloud, BarChart3, Settings, Cog } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analytics MasterClass',
    issuer: 'NoviTech R&D Pvt. Ltd.',
    year: '2025',
    icon: BarChart3,
  },
  {
    title: 'CyberSecurity Virtual Internship',
    issuer: 'Palo Alto Networks',
    year: '2024',
    icon: Shield,
  },
  {
    title: 'Salesforce Developer Internship',
    issuer: 'SmartInternz',
    year: '2024',
    icon: Cloud,
  },
  {
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL',
    year: '2024',
    icon: Cloud,
  },
  {
    title: 'CCTV Installation Technician',
    issuer: 'ESSCI',
    year: '2024',
    icon: Settings,
  },
  {
    title: 'NPTEL Cloud Computing',
    issuer: 'IIT',
    year: '2023',
    icon: Cloud,
  },
  {
    title: 'Advanced Power BI',
    issuer: 'I-BACUS-TECH',
    year: '2023',
    icon: BarChart3,
  },
  {  title: 'Digi-Trick Solving on Automation',
    issuer: 'K.S.R College Of Engineering',
    year: '2022',
    icon: BarChart3,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Achievements</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Certifications
          </h2>
        </div>

        {/* Stamp Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cert-stamp group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cosmic-violet/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h4 className="font-space font-semibold text-sm mb-1 leading-tight">{cert.title}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Section */}
        <div className="mt-20 text-center">
          <div className="inline-block glass-card rounded-3xl p-8 glow-primary">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-space text-xl font-bold mb-2">Download My Resume</h3>
            <p className="text-muted-foreground text-sm mb-6">Get the full picture of my journey</p>
            <a
              href="#"
              className="cosmic-button inline-flex items-center gap-2 text-primary-foreground"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
