
import { Code, Server, Database, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React.js", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend & Data",
      icon: Server,
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "SQL / MySQL", level: 85 },
        { name: "Gemini API", level: 78 }
      ]
    },
    {
      title: "Tools & Foundations",
      icon: Database,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Power BI", level: 78 },
        { name: "Excel", level: 80 },
        { name: "OOP", level: 85 },
        { name: "DBMS", level: 85 },
        { name: "Computer Networks", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set across programming, cybersecurity, and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 opacity-0 animate-fade-in transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${0.4 + categoryIndex * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center justify-center mb-6">
                <category.icon className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white text-center">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${1 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
