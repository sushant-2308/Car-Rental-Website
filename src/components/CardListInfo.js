import React from "react";
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import image1 from './../Images/info.jpg';
import './CardListInfoStyle.css';

const CardListInfo = () => {
    return(
      <div className="info">
      <Container>
      <h1 className="h1-secondary">Welcome To WheelzDrive</h1>
        <Card className= 'mt-5'>
    <Card.Img width='900px' height='800px' variant="top" src={image1} />
    <Card.Body>
      <Card.Text>
      <hr />
      Whether you’re planning a road trip outside the city or looking for a convenient way to cruise around when you’re out of town, WheelzDrive is here to ease your travel woes. You can pick one of WheelzDrive convenient car rental options to drive down to the nearby beach or to manoeuvre through traffic as you head from one important business meeting to the next. With a driver, car rental from WheelzDrive, you have the freedom to move around and explore places at your own pace.
      </Card.Text>
    </Card.Body>
    <div className="btn">
    <Button  variant="primary" ><Link className="btn1" to="/cars">Search for a Vehicle</Link></Button>
    </div>
  </Card>
  </Container>
  </div>
    );
}

export default CardListInfo;