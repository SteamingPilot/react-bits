import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../assets/hero-image-1.jpg";

const Hero = () => {
    return (
        <div
            className="hero-section d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                position: "relative",
            }}
        >
            {/* Overlay for better text readability */}
            <div
                className="position-absolute w-100 h-100"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    top: 0,
                    left: 0,
                }}
            ></div>

            <Container className="position-relative z-1 text-center text-white">
                <Row className="justify-content-center">
                    <Col lg={8} xl={6}>
                        <h1 className="display-1 mb-4">
                            Create The Best
                        </h1>
                        <p className="mb-5 fs-4">
                            We craft exceptional digital experiences that bring
                            your vision to life with innovative design and
                            cutting-edge technology.
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <Button
                                variant="danger"
                                size="lg"
                                href="#portfolio"
                            >
                                Contact Us
                            </Button>
                            <Button
                                variant="outline-dark"
                                href="#contact"
                                size="lg"
                            >
                                Watch Portfolio
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
