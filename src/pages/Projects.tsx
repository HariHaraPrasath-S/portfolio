import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    details: "Built a comprehensive online shopping platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Implemented responsive design and optimized performance for seamless user experience.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management app with AI-based priority suggestions",
    details: "Developed an intelligent task management application that uses machine learning to suggest task priorities and optimal scheduling. Features include natural language processing for task input, smart notifications, team collaboration, and analytics dashboard.",
    tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Real-Time Chat Application",
    description: "WebSocket-based messaging platform with end-to-end encryption",
    details: "Created a secure messaging platform with real-time communication, group chats, file sharing, and end-to-end encryption. Implemented using WebSocket for instant messaging, Redis for caching, and AWS S3 for media storage.",
    tech: ["Vue.js", "Socket.io", "Express", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for creative professionals",
    details: "Built a headless CMS tailored for portfolio websites with drag-and-drop interface, custom templates, SEO optimization, and analytics integration. Supports multiple media types and responsive layouts.",
    tech: ["Next.js", "GraphQL", "Prisma", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 card-hover flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col justify-between">
                {expandedIndex === index && (
                  <p className="text-muted-foreground mb-4 animate-fade-in">
                    {project.details}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {expandedIndex === index ? "Show Less" : "View More"}
                  </Button>
                  
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="rounded-full hover:bg-secondary"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="rounded-full hover:bg-secondary"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
