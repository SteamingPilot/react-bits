import heroImage from "../assets/hero-image-1.jpg";

const Hero = () => {
    return (
        <div
            className="position-relative min-vh-100 d-flex align-items-center justify-content-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

            <div className="position-relative z-1 text-center text-white px-4 w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h1 className="display-4 fw-bolder mb-3">Create The Best</h1>
                            <p className="lead mb-4 text-white-50">
                                We craft exceptional digital experiences that bring your
                                vision to life with innovative design and cutting-edge
                                technology.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                <a href="#portfolio" className="btn btn-danger btn-lg px-4">
                                    Contact Us
                                </a>
                                <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                                    Watch Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
