import React from 'react';
import me from '../assets/awsme3face.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-8 text-blue-400 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <img 
              src={me} // Replace with your actual image path
              alt="Atharv Raje"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          {/* Content Column */}
          <div className="order-1 md:order-2">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                I'm <span className="text-blue-400 font-bold">Atharv Raje</span>, 
                a passionate developer with expertise in <span className="text-blue-400">web development</span> and 
                <span className="text-blue-400"> data structures</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                I've worked on various projects while honing my skills in 
                <span className="text-blue-400"> MERN stack</span> and algorithmic problem-solving.
              </p>
              
              <p className="text-lg leading-relaxed">
                Beyond coding, I enjoy playing the <span className="text-blue-400">guitar</span>, 
                composing music, and staying active with football and movies. Known for being 
                <span className="text-blue-400"> kind, ambitious, and helpful</span>, I bring creativity 
                and dedication to both my work and personal pursuits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
