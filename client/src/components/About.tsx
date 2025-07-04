import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, BookOpen, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing new technologies",
      gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      iconBg: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with diverse teams",
      gradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      iconBg: "bg-purple-600"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous improvement",
      gradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      iconBg: "bg-green-600"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions",
      gradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      iconBg: "bg-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Career Summary - Full Width */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center text-lg">I'm a passionate individual with a strong foundation in computer science and a keen interest in software development. </p>
          </div>
        </motion.div>

        {/* Education Timeline and Values & Interests - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Education </h3>
              <div className="space-y-4">
                {/* MCA - Completed */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="absolute left-1.5 top-4 w-0.5 h-8 bg-blue-200 dark:bg-blue-800"></div>
                  <Card className="bg-slate-50 dark:bg-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Master of Computer Applications</h4>
                        <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">Completed</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-1">Bishop Heber College</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">2023 - 2025 | CGPA : 8.46 </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Bachelor's Degree */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-slate-400 rounded-full"></div>
                  <Card className="bg-slate-50 dark:bg-slate-700">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Bachelor of Computer Applications</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-1">Bishop Heber College</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">2020 - 2023 | CGPA : 8.49</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Values & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className={`bg-gradient-to-br ${value.gradient} p-4 rounded-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-8 h-8 ${value.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                      <value.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{value.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
