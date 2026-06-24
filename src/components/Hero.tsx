
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import resumePdf from "@/assets/Mohammad_Umair_Ganie_Resume.pdf.asset.json";

const Hero = () => {
  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = resumePdf.url;
    a.download = 'Mohammad_Umair_Ganie_Resume.pdf';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Mohammad Umair Ganie</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Computer Science Engineering student with hands-on experience building responsive web
            applications, RESTful systems, and data-driven solutions. Proficient in Python, JavaScript,
            React.js, Node.js, Express.js, SQL, and MongoDB.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/umairganie" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/mohammad-umair-ganie" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:my953547@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
