
import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express.js, REST APIs, Python, Gemini API"
    },
    {
      icon: Database,
      title: "Databases & Data",
      description: "MongoDB, SQL, MySQL, Power BI, DBMS fundamentals"
    },
    {
      icon: Globe,
      title: "Tools & Practices",
      description: "Git, GitHub, OOP, Computer Networks, Software Engineering"
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
              I'm Mohammad Umair Ganie, a Full Stack Developer and Computer Science Engineering student
              at Mewar University (B.Tech, CGPA 7.5). I build responsive web applications, RESTful systems,
              and data-driven solutions end-to-end.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              During my Full Stack Developer internship at NIT Srinagar, I cut page load times by 35%
              with React lazy loading, code-splitting, and MongoDB/SQL indexing, and improved user
              retention by 15% with a seamless React/Next.js UI backed by Redux state management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy turning ideas into production-ready products — from AI-powered SEO dashboards
              built on the Gemini API to full-stack e-commerce platforms on the MERN stack.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">React.js</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Express.js</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">MongoDB</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">SQL</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">Power BI</span>
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
