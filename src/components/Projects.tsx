
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI SEO Dashboard",
      description: "A full-stack AI marketing companion built with Next.js, React, and Tailwind CSS. Integrates the Google Gemini API to dynamically generate structured SEO metadata and targeted promotional copy from user inputs, with optimized API routes, client-side validation, and structured JSON parsing for clean UI rendering.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Next.js", "React", "Tailwind CSS", "Gemini API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Luxury Fragrance E-Commerce Platform",
      description: "Full-stack MERN e-commerce platform with a seamless, dynamic UX. Implemented global state management for real-time cart updates and persistent user sessions, with secure REST APIs and a responsive product catalog.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=300&fit=crop",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Student Performance Analysis System",
      description: "End-to-end analytics solution using SQL and Power BI. Built advanced SQL queries for data extraction and cleaning, paired with Power BI DAX formulas to surface real-time performance percentages and grade distributions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["SQL", "Power BI", "DAX", "Data Analytics", "Excel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mewar University Result Management System",
      description: "A responsive web application for managing university results, providing an efficient interface for students and administrators to access and manage academic records.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["Python", "HTML5", "CSS3", "SQL", "Web Development"],
      liveUrl: "http://65.108.229.11:5000/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in web development, cybersecurity, and programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden group hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
