import './Welcome.css'

const Welcome = () => {
  return (
    <section id='services' className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-header">
          <h1 className="welcome-title">Welcome</h1>
          <div className="welcome-divider"></div>
        </div>

        <div className="welcome-grid">
          <div className="welcome-text">
            <p>
              Hello and welcome to inverner. In here, we provide all sorts of materials you need for full-stack web development. With an experience of more than 5 years, our team members have worked with a huge number of clients all across the globe. We always value our clients' preferences. If you like WordPress, we work with WordPress. If you prefer Bootstrap, we're on it too.
            </p>
            <a href="#contact" className="welcome-button">Contact Us</a>
          </div>

          <div className="welcome-image-card">
            <img
              src="https://images.unsplash.com/photo-1521791136064-798650632fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Team working in office"
              className="welcome-image"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Welcome
