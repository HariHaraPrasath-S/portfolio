import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Users } from "lucide-react";

const technicalSkills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "Python / Django",
  "PostgreSQL / MongoDB",
  "AWS / Docker",
  "GraphQL / REST APIs",
  "Git / CI/CD",
  "Tailwind CSS",
  "Jest / Testing"
];

const interpersonalSkills = [
  "Team Leadership",
  "Problem Solving",
  "Communication",
  "Project Management",
  "Agile/Scrum",
  "Mentoring",
  "Critical Thinking",
  "Time Management",
  "Adaptability",
  "Collaboration"
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Skills</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Interpersonal Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interpersonalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
