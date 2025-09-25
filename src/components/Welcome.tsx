import React from 'react'

const Welcome = () => {
  return (
    <section className="py-20" id='services'>
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-medium mb-4">Welcome</h1>
          <div className='max-w-52 h-1 bg-black mx-auto'></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className='flex-1 max-w-2xl'>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Hello and welcome to inverner. In here, we provide all sorts of materials you need for full-stack web development. With an experience of more than 5 years, our team members have worked with a huge number of clients all across the globe. We always value our clients' preferences. If you like WordPress, we work with WordPress. If you prefer Bootstrap, we're on it too.
            </p>
            <a
              href="#contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1">
            <div 
              className="relative p-2 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-798650632fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team working in office"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
