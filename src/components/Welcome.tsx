import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Welcome = () => {
  return (
    <section className="py-5">
      <Container>
        {/* Welcome Title */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3">Welcome</h1>
          <div 
            className="mx-auto"
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#333'
            }}
          ></div>
        </div>

        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <p className="fs-5 text-muted">
              Hello and welcome to inverner. In here, we provide all sorts of materials you need for full-stack web development. With an experience of more than 5 years, our team members have worked with a huge number of clients all across the globe. We always value our clients' preferences. If you like WordPress, we work with WordPress. If you prefer Bootstrap, we're on it too.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="mt-4 px-4 py-3 fw-semibold"
              style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}
              href="#contact"
            >
              Contact Us
            </Button>
          </Col>

          {/* Right Column - Image */}
          <Col lg={6}>
            <div 
              className="position-relative"
              style={{
                padding: '8px',
                backgroundColor: '#fff',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-798650632fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team working in office"
                className="img-fluid rounded"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Welcome
