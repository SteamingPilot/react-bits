import React from 'react'
import heroImage from '../assets/hero-image-1.jpg'

const Hero = () => {
  return (
    <div 
    id='home'
      className="flex items-center justify-center relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Our Creative Studio
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            We craft exceptional digital experiences that bring your vision to life with innovative design and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Watch Portfolio
            </a>
            <a 
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
