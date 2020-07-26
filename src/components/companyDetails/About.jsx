import React from "react";
import { Container, Card } from "react-bootstrap";
//assets
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import Profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <Container className="col-12">
      <Card className="col-12 col-sm-6 mt-5 profileCard">
        <Card.Img variant="top" src={Profile} />
      </Card>

      <Card className="col-12 col-sm-6 mt-5">
        <Card.Body>
          <Card.Title> 
      O Nas
     </Card.Title>
          <Card.Text>
            Latami pozyskiwana i szlifowana wiedza z dziedziny, jaką jest
            fotografia komercyjna oraz bieżąca analiza występujących obecnie na
            rynku trendów pozwola nam na perfekcyjnie przeprowadzonie sesji
            zdjęciowych.
          </Card.Text>
          <Card.Text>email: info@k2nstudio.com</Card.Text>
          <Card.Text>tel.: +48 530 003 833</Card.Text>
          <Card.Text>     <a href="https://www.facebook.com/k2nstudio/" className="mr-1">
            <img src={facebook} alt="img" height="30px" width="30px"></img>
          </a>
          <a href="https://www.instagram.com/k2nstudio/" className="ml-1">
            <img src={instagram} alt="img" height="30px" width="30px"></img>
          </a></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
