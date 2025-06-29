import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      bgColor: "bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:john.doe@email.com",
      bgColor: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm currently looking for new opportunities in software development. Whether you have a question, 
                want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-16 h-16 ${link.bgColor} text-white rounded-lg transition-colors duration-200`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
