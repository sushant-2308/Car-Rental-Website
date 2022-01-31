import React from "react";
import { Card, Container } from 'react-bootstrap';
import image1 from './../Images/Cars_img-3/img-1.jpg';
import image2 from './../Images/Cars_img-3/img-2.jpg';
import image3 from './../Images/Cars_img-3/img-3.jpg';
import image4 from './../Images/Cars_img-3/img-4.jpg';

function About(){
    
    return(
        <>
            
            <h1>
                Benefits of Renting car with us.
            </h1>
            <Container>
            
            <Card>
            <h2 bg="Danger">Affordable Price</h2>
    <Card.Img variant="top" width="122px" height="500px" src={image1} />
    <Card.Body>
      <Card.Text>
      With WheelzDrive, you can rent a car at a time that is convenient to you and get it right to your doorstep.WheelzDrive also offers flexible car rental services. You can choose monthly car rental packages, unlimited kilometre packages. For monthly packages call us @ (1800-00xx-xx).
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
            <Card>
            <h2>Sanitized Cars</h2>
    <Card.Img variant="top" height="500px" src={image2} />
    <Card.Body>
      <Card.Text>
      Car subscription from WheelzDrive provides the flexibility of having a car anytime you want, as well as the assurance of a sanitized and virus free vehicle for your own drive. The car sanitization process encompasses all the preventive hygiene best practices directed by the World Health Organization (WHO) and is diligently conducted for each vehicle delivered to the car subscribers.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
            <Card>
            <h2>Fulfill your needs</h2>
    <Card.Img variant="top" height="550px" src={image3} />
    <Card.Body>
      <Card.Text>
      WheelzDrive has an amazing fleet of rental cars ranging from compact hatchbacks to roomy sedans and powerful SUVs. You can choose to hire a Hyundai Grand i10, Hyundai Creta, Maruti Suzuki Swift, Mahindra Scorpio, Toyota Innova Crysta, Mahindra XUV and many other car models that suit your requirement.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
            <Card>
            <h2>Easy Booking</h2>
    <Card.Img variant="top" height="550px" src={image4} />
    <Card.Body>
      <Card.Text>
      Pick your favourite car and let us know when and where you need it.The car will be delivered to your doorstep at the date and time promised. Start the engine and enjoy your road trip without worrying about the kilometres. You’ll receive an invoice in your email 48 hours after your trip is completed.

      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  </Container>
        </>
    );

}

export default About;
