
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const downloadResume = () => {
    // Create a simple PDF-like content for now
    const resumeContent = `
MOHAMMAD UMAIR GANIE
Full Stack Developer

Contact:
Phone: +91 9682316060
Email: my953547@gmail.com
Location: Binner Baramulla Jammu and Kashmir

Education:
B.Tech, Computer Science & Engineering
Mewar University Chittorgarh Rajasthan
2025 | CGPA: 7.26/10

Skills:
- Python Programming
- Front End Development  
- HTML5, CSS3
- GitHub
- Cyber Security
- Ethical Hacking
- Generative AI

Projects:
- Mewar University Result Management System
- Calculator Application
- Web Development Course

Certifications:
- Certified in Python Programming
- Introduction to Front-End Development
- Career Essentials in Generative AI by Microsoft and LinkedIn
- Introduction to Machine Learning
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mohammad_Umair_Ganie_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
            Full Stack Developer & Cyber Security Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Fresh Computer Science graduate specializing in Python programming, web development, and cybersecurity. 
            Passionate about building secure, scalable applications and exploring the latest in AI and ethical hacking.
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
