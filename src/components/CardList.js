import React from 'react';
import { Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import image1 from './../Images/card1.jpg';
import image2 from './../Images/card2.png';
import image3 from './../Images/card3.png';
import './CardListStyle.css';

const CardList = () => {
    return(
      <div className="Information">
      <h1 className="h1-four">About Us.</h1>
        <Container className="mt-5">
        <Row>
        <Col md={50}>
        <CardGroup>
  <Card className = "mt-5" width = "80px">
    <Card.Img width='351' height='300' variant="top" src={image1} />
    <Card.Body>
      <Card.Title>Our Customers Always 100% Satisfied
  </Card.Title>
  <hr />
      <Card.Text>
      Offering our customers a full refund if they aren’t satisfied with our cars is an indication of driving.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className = "mt-5" width = "80px">
    <Card.Img width='351' height='300' variant="top" src={image2} />
    <Card.Body>
      <Card.Title>We provide easier and faster bookings</Card.Title>
      <hr />
      <Card.Text>
      The best booking engine will keep the guest onsite and allow them to complete their booking in a few clicks or touches. 
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className = "mt-5" width = "80px">
    <Card.Img width='351' height='300' variant="top" src={image3} />
    <Card.Body>
      <Card.Title>Your Choice of Any Pickup Location</Card.Title>
      <hr />
      <Card.Text>
      Provide us your address so that the driver can reach to you for the pick-up. While giving the location to us it makes us easy to reach you fast.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
</Col>
</Row>
</Container>
</div>
    );
}

export default CardList;