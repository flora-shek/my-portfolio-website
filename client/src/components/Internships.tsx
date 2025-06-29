import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Monitor } from "lucide-react";

export default function Internships() {
  const internships = [
    {
      company: "ILIFE Technologies",
      role: "Web Developer Intern",
      duration: "May 2024 – July 2024",
      description: "Developed responsive landing pages using HTML5, CSS3, and Bootstrap.",
      technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "GSAP"],
      icon: Code,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      company: "Digital Innovations Ltd",
      role: "Frontend Developer Intern",
      duration: "August 2024 – October 2024",
      description: "Built interactive React components for a customer dashboard application. Implemented state management using Redux and integrated RESTful APIs. Participated in code reviews and agile development processes.",
      technologies: ["React", "Redux", "JavaScript", "REST APIs"],
      icon: Monitor,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Internships</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {internship.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {internship.role}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {internship.duration}
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${internship.gradient} rounded-lg flex items-center justify-center`}>
                      <internship.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
