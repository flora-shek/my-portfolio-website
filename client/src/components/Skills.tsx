import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Server, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      gradient: "from-blue-500 to-purple-600",
      skills: [
        { name: "HTML", color: "bg-orange-500", abbr: "H" },
        { name: "CSS", color: "bg-blue-500", abbr: "C" },
        { name: "JavaScript", color: "bg-yellow-500", abbr: "JS" },
        { name: "React", color: "bg-cyan-500", abbr: "R" },
        { name: "Bootstrap", color: "bg-purple-500", abbr: "B" },
        { name: "Tailwind", color: "bg-teal-500", abbr: "T" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: "Python", color: "bg-blue-600", abbr: "P" },
        { name: "Django", color: "bg-green-600", abbr: "D" },
        { name: "Flask", color: "bg-gray-600", abbr: "F" },
        { name: "MongoDB", color: "bg-green-500", abbr: "M" },
        { name: "MySQL", color: "bg-blue-500", abbr: "M" },
        { name: "Firebase", color: "bg-orange-500", abbr: "F" }
      ]
    },
    {
      title: "Tools",
      icon: Settings,
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git", color: "bg-orange-600", abbr: "G" },
        { name: "GitHub", color: "bg-gray-800", abbr: "GH" },
        { name: "VS Code", color: "bg-blue-600", abbr: "VS" },
        { name: "Postman", color: "bg-orange-500", abbr: "P" },
        { name: "Figma", color: "bg-pink-600", abbr: "F" },
        { name: "Docker", color: "bg-blue-400", abbr: "D" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-8 h-8 ${skill.color} rounded flex items-center justify-center mr-3`}>
                          <span className="text-white text-xs font-bold">{skill.abbr}</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      </motion.div>
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
