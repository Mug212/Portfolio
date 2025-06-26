
import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, and modern UI frameworks"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Python, Express, FastAPI, and RESTful APIs"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis, and database optimization"
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, and scalable infrastructure"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 3+ years of experience building 
              robust web applications. I excel at creating seamless user experiences while 
              architecting scalable backend systems that can handle millions of users.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans the entire development lifecycle - from crafting responsive 
              frontends with React and TypeScript to building high-performance APIs with 
              Node.js and Python. I'm passionate about clean code, testing, and delivering 
              products that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I love staying up-to-date with the latest technologies and best practices. 
              When I'm not coding, you'll find me contributing to open source projects, 
              writing technical blogs, or mentoring aspiring developers.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Full Stack</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">AWS</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Docker</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
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
