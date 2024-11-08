import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Programmer', 'Software Engineer', 'Full Stack Developer'];
  const typingSpeed = 100; // Speed for typing
  const deletingSpeed = 50; // Speed for deleting
  const pauseTime = 1500; // Time to pause after word is complete

  useEffect(() => {
    let timer;
    
    const animateText = () => {
      const currentWord = words[wordIndex];
      
      if (!isDeleting) {
        // Typing
        if (displayText !== currentWord) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timer = setTimeout(animateText, typingSpeed);
        } else {
          // Pause before starting to delete
          timer = setTimeout(() => {
            setIsDeleting(true);
            animateText();
          }, pauseTime);
        }
      } else {
        // Deleting
        if (displayText !== '') {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          timer = setTimeout(animateText, deletingSpeed);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timer = setTimeout(animateText, typingSpeed);
        }
      }
    };

    timer = setTimeout(animateText, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="min-h-screen bg-black pt-20 flex items-center">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-yellow-400 text-xl">
                Hello, I'm
              </h2>
              <h1 className="text-white text-6xl font-bold">
                Atharv Raje
              </h1>
              <p className="text-yellow-400 text-2xl h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              A 20 year old CSE student who likes solving problems and coding
              creative designs to life. Transforming ideas into experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-8 pt-4">
              <a href="https://github.com/AtharvRaje33" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/atharvraje" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:atharvraje@gmail.com" 
                className="text-white hover:text-yellow-400 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Placeholder for your image/gif */}
          <div className="flex justify-center items-center h-[600px]">
            {/* <div className="w-215 h-215 rounded-full border-2 border-yellow-400">
              <img 
                src={heroimage} 
                alt="Atharv Raje"
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}
             <Spline scene="https://prod.spline.design/7sZGqGGzUKqNQxYr/scene.splinecode" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;