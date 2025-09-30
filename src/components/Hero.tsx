import './Hero.css';
import heroImage from "../assets/hero-image-1.jpg";

const Hero = () => {
    return (
        <div
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <div className="hero__container">
                    <h1 className="hero__title">Create The Best</h1>
                    <p className="hero__lead">
                        We craft exceptional digital experiences that bring your
                        vision to life with innovative design and cutting-edge
                        technology.
                    </p>
                    <div className="hero__actions">
                        <a href="#portfolio" className="btn btn--primary">
                            Contact Us
                        </a>
                        <a href="#contact" className="btn btn--outline">
                            Watch Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero
