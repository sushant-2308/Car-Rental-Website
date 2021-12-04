import React from "react";
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import image1 from './../Images/info.jpg';
import './CardListInfoStyle.css';

const CardListInfo = () => {
    return(
      <Container>
      <h1 className="h1-secondary">Welcome To WheelzDrive</h1>
        <Card className= 'mt-5'>
    <Card.Img width='1054' height='800' variant="top" src={image1} />
    <Card.Body>
      <Card.Text>
      A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      </Card.Text>
    </Card.Body>
    <div className="btn">
    <Button  variant="primary" ><Link className="btn1" to="/cars">Search for a Vehicle</Link></Button>
    </div>
  </Card>
  </Container>
    );
}

export default CardListInfo;