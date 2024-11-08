import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Matriculation",
    institution: "Vasant Vihar High School",
    duration: "2007 - 2020",
    description: "School Education",
    achievements: [
      "92.6% percent in X board examination",
    ]
  },
  {
    degree: "Junior College",
  institution: "Lakshya Prep Junior College",
  duration: "2020 - 2022",
  description: "Science stream - PCM subjects with elective subject CS",
  achievements: [
    "87% in XII board examination",
    "96 percentile in MHTCET Examination",
  ]
},
    {
      degree: "B.Tech - Computer Science",
      institution: "Symbiosis Institute of Technology",
      duration: "2022 - 2026",
      description: "Specialization in AIML",
      achievements: [
        "Participated in coding competitions",
        "Relevant Coursework - Operating Systems, Computer Networks, DSA, OOPS"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Education</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400/20"></div>

          {/* Education Cards */}
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>

              {/* Education Card */}
              <div className="w-5/12 px-6 py-4 bg-gray-900/50 border border-yellow-400/20 rounded-lg hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{edu.degree}</h3>
                <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-3">{edu.duration}</p>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-400">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pixel Art Decorations */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
          <div className="w-8 h-8 bg-yellow-400"></div>
          <div className="w-4 h-4 bg-yellow-400 ml-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;