import './Welcome.css'
import WelcomeImage from "../assets/welcome.jpg"

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
            src={WelcomeImage}
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
