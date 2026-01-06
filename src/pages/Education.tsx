import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    course: "Master of Computer Science",
    institution: "Stanford University",
    year: "2020-2022",
    grade: "3.9 GPA"
  },
  {
    course: "Bachelor of Technology in Computer Science",
    institution: "MIT",
    year: "2016-2020",
    grade: "3.8 GPA"
  },
  {
    course: "High School Diploma",
    institution: "Central High School",
    year: "2014-2016",
    grade: "95%"
  }
];

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Education</h1>
        
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Academic Background</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-secondary/50">
                    <TableHead className="text-primary font-semibold">Course</TableHead>
                    <TableHead className="text-primary font-semibold">Institution</TableHead>
                    <TableHead className="text-primary font-semibold">Year</TableHead>
                    <TableHead className="text-primary font-semibold text-right">Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {educationData.map((edu, index) => (
                    <TableRow 
                      key={index} 
                      className="border-border hover:bg-secondary/30 transition-colors duration-200"
                    >
                      <TableCell className="font-medium">{edu.course}</TableCell>
                      <TableCell className="text-muted-foreground">{edu.institution}</TableCell>
                      <TableCell className="text-muted-foreground">{edu.year}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{edu.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
