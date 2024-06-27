import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Importing Home.css 
import RentButton from './RentButton'; // Importing RentButton component
import HomeBanner from './HomeBanner'; // Importing HomeBanner component
import TheaterButton from './TheaterButton'; // Importing TheaterButton component

function Home() {
  return (
    <div>
      {/* Banner Section */}
      <Container className='Banner mb-5'>
        <HomeBanner />
      </Container>

      {/* Movie Rental and Theater Buttons Section */}
      <Row>
        <Col sm={6} className="mb-5">
          <Container className='moviebuttons'>
            <h2>RENT MOVIES FROM THE COMFORT OF YOUR OWN HOME</h2>
            <RentButton />
          </Container>
        </Col>

        <Col sm={6} className="mb-5">
          <Container className='theaterbuttons'>
            <h2>FIND A THEATRE AND WATCH A MOVIE ON THE BIG SCREEN</h2>
            <TheaterButton />
          </Container>
        </Col>
      </Row>

      {/* Featured Movie Cards Section */}
      <Container className="text-center mb-5">
        <Row>
          {/* Card 1 */}
          <Col sm={3} className="mb-4">
            <Card border="warning">
              <Card.Img
                variant="top"
                src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/MasterRepository/fandango/234522/BB4_OnLine_1400x2100_04.jpg"
                height="250px"
                alt="Movie Seats"
              />
              <Card.Body>
                <Card.Title>Bad Boys</Card.Title>
                <Card.Text>
                This summer, the world's favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy, but this time with a twist: Miami's finest are now on the run.  When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.
                <p></p>
                <h2>COMING SOON..</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col sm={3} className="mb-4">
            <Card border="warning">
              <Card.Img
                variant="top"
                src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/234178/insideout2-posterart.jpg"
                height="250px"
                alt="Movie Seats"
              />
              <Card.Body>
                <Card.Title>Inside Out</Card.Title>
                <Card.Text>
                Disney and Pixar’s “Inside Out 2” returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone. Maya Hawke lends her voice to Anxiety, alongside Amy Poehler as the voice of Joy. The voice cast also includes Lewis Black, Phyllis Smith, Tony Hale and Liza Lapira. Directed by Kelsey Mann and produced by Mark Nielsen, “Inside Out 2” releases only in theaters June 14, 2024.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col sm={3} className="mb-4">
            <Card border="warning">
              <Card.Img
                variant="top"
                src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/234517/FND_poster_DespicableMe4-Presale.jpg"
                height="250px"
                alt="Projector"
              />
              <Card.Body>
                <Card.Title>Despicable Me 4</Card.Title>
                <Card.Text>
                In the first Despicable Me movie in seven years, Gru, the world’s favorite supervillain-turned-Anti-Villain League-agent, returns for an exciting, bold new era of Minions mayhem. In this new chapter, Gru (Oscar® nominee Steve Carrell) and Lucy (Oscar® nominee Kristen Wiig) and their girls —Margo (Miranda Cosgrove), Edith (Dana Gaier) and Agnes (Madison Polan)—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal (Emmy winner Will Ferrell) and his femme fatale girlfriend Valentina (Emmy nominee Sofia Vergara), and the family is forced to go on the run.
                <p></p>
                <h2>COMING SOON..</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col sm={3} className="mb-4">
            <Card border="warning">
              <Card.Img
                variant="top"
                src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/235289/thesecretworldofarrietty-TicketingPoster_1000x1480_jpg.jpg"
                height="250px"
                alt="Junk food"
              />
              <Card.Body>
                <Card.Title>Arrietty</Card.Title>
                <Card.Text>
                From the legendary Studio Ghibli and Academy Award®-nominated director Hiromasa Yonebayashi comes a gorgeous adaptation of The Borrowers, one of the most beloved children’s books of all time. In a secret world hidden beneath the floorboards, little people called Borrowers live out of sight of humans. But when brave and tiny Arrietty is out gathering supplies, she is discovered by Shawn, a human boy, and they begin to form a friendship that blossoms into an extraordinary adventure. This sumptuously animated and heartwarming story features the voices of Bridgit Mendler, David Henrie, Amy Poehler, Will Arnett, Moises Arias, and Carol Burnett.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sources Section */}
      <Container fluid>
        <p>
          Sources: <a href="https://moviesipsum.com/">Movies Ipsum</a>, <a href="https://unsplash.com">Unsplash</a>, <a href="fandango.com">Fandango</a>
        </p>
      </Container>
    </div>
  );
}

export default Home;
