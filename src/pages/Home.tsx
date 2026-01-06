import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-6 animate-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-5xl font-bold gradient-text">
              JD
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          John Doe
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          Full Stack Developer & Designer
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Crafting beautiful digital experiences with modern web technologies.
          Passionate about clean code, elegant design, and solving complex problems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link to="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Get In Touch
            </Button>
          </Link>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/70 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/70 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:john@example.com"
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/70 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
