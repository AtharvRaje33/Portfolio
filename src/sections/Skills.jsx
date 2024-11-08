import React from 'react';
import { Code2, Database, BookOpen, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C++", "Java", "Python", "SQL", "Dart", "Javascript"]
    },
    {
      category: "Development and Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["Flutter", "Django", "HTML", "CSS", "MYSQL", "SciKitLearn","React","Node","Express","MongoDB","PostgreSQL"]
    },
    {
      category: "Relevant Coursework",
      icon: <BookOpen className="w-6 h-6" />,
      skills: [
        "Data Structures and Algorithms",
        "Operating System",
        "DBMS",
        "OOP",
        "Computer Networks"
      ]
    },
    {
      category: "Developer Tools and Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["VS Code", "Eclipse", "Git", "GitHub", "Agile"]
    }
  ];

  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-yellow-400">
                  {category.icon}
                </span>
                <h3 className="text-yellow-400 text-xl font-semibold">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-zinc-800 text-white px-3 py-1.5 rounded-md hover:bg-yellow-400 hover:text-black transition-colors text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;