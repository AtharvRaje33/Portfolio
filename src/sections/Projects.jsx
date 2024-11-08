import React from 'react';
import expensetracker from '../assets/expensetracker.jpeg';
import diabetespred from '../assets/diabetespred.jpg';
import sudoku from '../assets/sudoku.jpeg';
import reportgenx from '../assets/reportgenx.png';

const Projects = () => {
  const projects = [
    {
      title: "Flutter Expense Tracker",
      description: "A mobile application for tracking personal expenses and budgeting with categorization for better organization.",
      technologies: ["Flutter"],
      githubLink: "https://github.com/AtharvRaje33/Expense_Tracker",
      image: expensetracker
    },
    {
      title: "Diabetes Predictor",
      description: "A web application made using Django for predicting diabetes using Support Vector Machine (SVM) classification model.",
      technologies: ["Python", "Django", "ScikitLearn"],
      githubLink: "https://github.com/AtharvRaje33/Diabetes_Prediction",
      image: diabetespred
    },
    {
      title: "Sudoku Solver",
      description: "A web-based Sudoku solver using HTML, CSS, and JavaScript, enabling users to generate and solve Sudoku puzzles. Implemented backtracking algorithm to solve puzzles.",
      technologies: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/AtharvRaje33/Sudoku-Solver",
      image: sudoku
    },
    {
      title: "Report Genx",
      description: "An innovative solution that demonstrates your problem-solving abilities.",
      technologies: ["React", "Node.js", "Tailwind", "PostgreSQL", "Express.js","Supabase"],
      githubLink: "https://github.com/AtharvRaje33/Report-Generation-AP-S1",
      image: reportgenx
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-blue-400/20 rounded-lg overflow-hidden 
                        hover:border-blue-400/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 
                              flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-black transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-400 text-black px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
