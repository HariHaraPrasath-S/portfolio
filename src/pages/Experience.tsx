import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored team of 5 junior developers",
      "Reduced application load time by 40% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: [
      "Built and maintained 10+ client web applications",
      "Collaborated with design team to create responsive UIs",
      "Integrated third-party APIs and payment gateways",
      "Participated in code reviews and agile ceremonies"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description: [
      "Developed responsive web applications using React",
      "Improved website accessibility compliance to WCAG 2.1",
      "Created reusable component library",
      "Collaborated with backend team on API integration"
    ]
  },
  {
    title: "Junior Developer",
    company: "WebDev Agency",
    period: "2016 - 2018",
    description: [
      "Assisted in development of client websites",
      "Fixed bugs and implemented new features",
      "Learned modern web development practices",
      "Participated in team meetings and sprint planning"
    ]
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Experience</h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary ring-4 ring-background z-10" />
                
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <Card className="bg-card border-border hover:border-primary transition-all duration-300 card-hover">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 text-left">
                          <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                          <p className="text-sm text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">{exp.period}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-left">
                        {exp.description.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
