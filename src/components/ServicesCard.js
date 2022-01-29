import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      Whether you're a salesman or you drive for a living, a car full of badges, dog hair and muddy footprints isn't going to get you far. Our provides you a well clean and sanitized car at your doorstep.
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
      The best price guarantee reassures buyers that they are getting the best available offer. If the customers manage to find a better deal elsewhere, companies will often match the new price and refund the difference.
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
      Our customer is our God!. So we expect a good rating and feedback from our customers.
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
      We are Standing here 24/7 at your service. If any problems or issues faces while booking or having an querry feel free to ask by filling the details <Link to="/contact">Click Here</Link> or else you can call us (1800-28xx-xx).
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