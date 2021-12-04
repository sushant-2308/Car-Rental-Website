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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor libero eligendi atque. Nam optio molestiae odio veritatis quibusdam accusamus neque repellat veniam illo expedita officia, sint doloremque corporis eveniet, beatae id necessitatibus possimus excepturi dicta. Voluptatibus labore, ipsam minima dolore accusamus, maxime assumenda mollitia iure ad illo, impedit facere? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quod!
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