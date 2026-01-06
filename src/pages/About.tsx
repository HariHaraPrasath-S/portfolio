import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h1>
        
        <div className="space-y-6 text-lg text-muted-foreground mb-12">
          <p>
            Hello! I'm a passionate full-stack developer with a keen eye for design and a love for creating 
            exceptional digital experiences. With years of experience in web development, I specialize in 
            building modern, responsive, and user-friendly applications.
          </p>
          
          <p>
            My journey in tech began with a curiosity about how things work, which quickly evolved into a 
            deep passion for coding and problem-solving. I believe in writing clean, maintainable code and 
            creating intuitive user interfaces that make a difference.
          </p>
          
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community. I'm always eager to learn and 
            take on new challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary transition-all duration-300 card-hover">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and efficient code is my priority in every project.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-all duration-300 card-hover animation-delay-200">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Design Focused</h3>
              <p className="text-muted-foreground">
                Creating beautiful, intuitive interfaces that users love to interact with.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-all duration-300 card-hover animation-delay-400">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Always exploring cutting-edge technologies to deliver the best solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
