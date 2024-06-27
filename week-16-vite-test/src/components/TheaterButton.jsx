import React from 'react';
import { Button } from 'react-bootstrap';
import './RentButton.css'

function TheaterButton() {
  return (
    <>
      <Button variant="primary" onClick={() => window.open("https://www.fandango.com/20132_movietimes", "_blank")}>
        Fandango
      </Button>
      <Button variant="primary" onClick={() => window.open("https://en.wikipedia.org/wiki/AMC_Theatres", "_blank")}>
        AMC
      </Button>
      <Button variant="primary" onClick={() => window.open("https://en.wikipedia.org/wiki/Alamo_Drafthouse_Cinema", "_blank")}>
        Alamo Drafthouse
      </Button>
      <Button variant="primary" onClick={() => window.open("https://en.wikipedia.org/wiki/Regal_Cinemas", "_blank")}>
        Regal
      </Button>
    </>
  );
}

export default TheaterButton;
