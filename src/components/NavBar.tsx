import React from 'react'

// Type definition for navigation links
interface NavLink {
  label: string
  href: string
}

// Navigation links configuration
const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' }
]

const NavBar = () => {

// Function to handle smooth scrolling
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="bg-zinc-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo*/}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
              Paul Palok
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-lg font-medium text-zinc-300 hover:text-white px-3 py-2 transition-colors duration-200"
                onClick={(e)=>handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
