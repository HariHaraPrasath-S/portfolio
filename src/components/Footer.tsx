import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6 text-center">
        
        <p className="text-muted-foreground/50 text-sm mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
