
import { Code, Database, Globe, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Programming & Development",
      description: "Python, HTML5, CSS3, JavaScript, and GitHub"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Ethical Hacking, Security Analysis, and AI Security"
    },
    {
      icon: Database,
      title: "Machine Learning",
      description: "Introduction to ML, Generative AI, and Data Science"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Front-end development, responsive design, and modern frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Mohammad Umair Ganie, a passionate Computer Science graduate from Mewar University 
              with a strong foundation in programming and cybersecurity. Currently pursuing my B.Tech 
              with a CGPA of 7.26, I'm dedicated to building secure and innovative digital solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans from Python programming and web development to ethical hacking and 
              generative AI. I believe in continuous learning and staying updated with the latest 
              technological advancements to create impactful applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a quick learner with strong problem-solving skills, I'm always excited to take on 
              new challenges and contribute to meaningful projects. My goal is to work in a 
              professional environment where I can apply my knowledge while growing personally and professionally.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Web Development</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Cybersecurity</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Ethical Hacking</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Generative AI</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Machine Learning</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <item.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
