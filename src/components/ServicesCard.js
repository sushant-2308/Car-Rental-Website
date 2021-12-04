import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import image1 from './../Images/Scard1.gif';
import image2 from './../Images/Scard2.gif';
import image3 from './../Images/Scard3.gif';
import image4 from './../Images/Scard4.gif';
import './ServicesCardStyle.css';


const ServicesCard = () => {
    return(
      <>
      <div className="services">
        <h1 className="h1-three">Our Sevices</h1>
        <CardGroup>
  <Card>
    <Card.Img height="350px" variant="top" src={image1} />
    <Card.Body>
      <Card.Title className="cardTitle">Well Clean Car.</Card.Title> <hr />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src={image2} />
    <Card.Body>
      <Card.Title className="cardTitle">Best Price Guarantee.</Card.Title> <hr />
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src={image3} />
    <Card.Body>
      <Card.Title className="cardTitle">Customers Ratings.</Card.Title> <hr />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src={image4} />
    <Card.Body>
      <Card.Title className="cardTitle">24/7 Customer Services.</Card.Title> <hr />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
</>
    );
}

export default ServicesCard;