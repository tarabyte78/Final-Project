import React from 'react';
import { Button } from 'react-bootstrap';
import './RentButton.css'

function TheaterButton() {
  return (
    <>
      <Button variant="primary" onClick={() => window.open("https://www.fandango.com/20132_movietimes", "_blank")}>
        Fandango
      </Button>
      <Button variant="primary" onClick={() => window.open("https://www.amctheatres.com/", "_blank")}>
        AMC
      </Button>
      <Button variant="primary" onClick={() => window.open("https://drafthouse.com/", "_blank")}>
        Alamo Drafthouse
      </Button>
      <Button variant="primary" onClick={() => window.open("https://www.regmovies.com/", "_blank")}>
        Regal
      </Button>
    </>
  );
}

export default TheaterButton;
