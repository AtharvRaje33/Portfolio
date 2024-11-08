import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import testgif from '../assets/heroimage.gif';

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_5f5vx0p', 'template_22zeyxp', form.current, {
        publicKey: 'mitFZrEIoKfAigtCo',
      })
      .then(
        () => {
          setSubmitStatus('success');
          form.current.reset();
        },
        (error) => {
          setSubmitStatus('error');
          console.log('FAILED...', error.text);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 3000);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-6xl mx-auto flex gap-8">
        {/* Contact Form Section */}
        <div className="w-1/2">
          <div className="bg-black border-2 border-blue-400 p-8 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Pixel art decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400 opacity-10 transform rotate-45 -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400 opacity-10 transform rotate-45 translate-y-8 -translate-x-8"></div>
            
            <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center relative">
              Contact Me
              <div className="h-1 w-20 bg-blue-400 mx-auto mt-2"></div>
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-blue-400 text-lg">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full p-3 rounded bg-black border-2 border-blue-400 text-white focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-blue-400 text-lg">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full p-3 rounded bg-black border-2 border-blue-400 text-white focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-blue-400 text-lg">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full p-3 rounded bg-black border-2 border-blue-400 text-white focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3 rounded font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] 
                  ${isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-blue-400 hover:bg-blue-500 text-black'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus && (
                <div className={`text-center p-3 rounded border ${
                  submitStatus === 'success' 
                    ? 'border-green-500 text-green-400' 
                    : 'border-red-500 text-red-400'
                }`}>
                  {submitStatus === 'success' 
                    ? 'Message sent successfully!' 
                    : 'Failed to send message. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Image/GIF Section */}
        <div className="w-1/2 flex items-center justify-center">
          {/* Replace the src with your actual image/gif URL */}
          <img 
            src={testgif}
            alt="Contact visual"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;