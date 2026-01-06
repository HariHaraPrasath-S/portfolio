import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Award } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS."
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    description: "Validates ability to build scalable and highly available applications using Google Cloud technologies."
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "2022",
    description: "Comprehensive program covering React, JavaScript, HTML, CSS, and modern front-end development practices."
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
    description: "Demonstrates proficiency in MongoDB database design, development, and administration."
  }
];

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Certifications</h1>
        
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{cert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-primary p-2 hover:bg-primary/10 rounded-full transition-colors">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </CardHeader>
              
              {expandedIndex === index && (
                <CardContent className="pt-0 animate-fade-in">
                  <p className="text-muted-foreground pl-16">
                    {cert.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
