import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from 'react-bootstrap';

function HomeBanner() {
  return (
    <Container className="text-center my-5">
      <Image
        src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Movie"
        fluid
      />
    </Container>
  );
}

export default HomeBanner;
