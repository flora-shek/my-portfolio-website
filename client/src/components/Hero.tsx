import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Download } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/my-portfolio-website/shekinah_resume.pdf';
    link.download = 'shekinah_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-pattern pt-[5px] pb-[5px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="animate-fade-in"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-slate-900 dark:text-white pt-[5px] pb-[5px]">Hi, I'm</span>
            <span className="block gradient-text">Shekinah Florance</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium pt-[0px] pb-[0px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            MCA Graduate | Aspiring Software Developer
          </motion.p>
          
          
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-[5px] pb-[5px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <button onClick={() => scrollToSection('about')}>
          <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
        </button>
      </motion.div>
    </section>
  );
}
