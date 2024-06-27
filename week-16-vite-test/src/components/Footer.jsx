import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactUsForm from './ContactUsForm';

function Footer() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2024 MovieApp. All rights reserved.</p>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end align-items-center">
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
