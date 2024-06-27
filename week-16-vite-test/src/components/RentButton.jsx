import React from 'react';
import { Button } from 'react-bootstrap';
import './RentButton.css'

function RentButton() {
  return (
    <>
      <Button variant="primary" onClick={() => window.open("https://www.redbox.com/movies", "_blank")}>
        Redbox
      </Button>
      <Button variant="primary" onClick={() => window.open("https://www.primevideo.com/storefront/ref=nav_shopall_aiv_vid?merchId=RentBuy&ie=UTF8", "_blank")}>
        Amazon Prime
      </Button>
      <Button variant="primary" onClick={() => window.open("https://www.netflix.com/", "_blank")}>
        Netflix
      </Button>
      <Button variant="primary" onClick={() => window.open("https://www.vudu.com/", "_blank")}>
        Vudu
      </Button>
    </>
  );
}

export default RentButton;
