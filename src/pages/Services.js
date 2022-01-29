import React from "react";
import { CardGroup, Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Services = () =>{
  return(
      <>
         <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Our Services</h1>
                <p className="lead text-muted">Here are some services provided by our Company.</p>
              </div>
            </div>
          </section>
<Container>
          <CardGroup>
  <Card>
    <Card.Img height="350px" variant="top" src="https://images.financialexpress.com/2020/08/car-rental.jpg" />
    <Card.Body>
      <Card.Title>Clean Car</Card.Title><hr />
      <Card.Text>
      Whether you're a salesman or you drive for a living, a car full of badges, dog hair and muddy footprints isn't going to get you far. Our provides you a well clean and sanitized car at your doorstep.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src="https://previews.123rf.com/images/arcady31/arcady311207/arcady31120700089/14643700-best-price-guarantee.jpg" />
    <Card.Body>
      <Card.Title>Best price</Card.Title><hr />
      <Card.Text>
      The best price guarantee reassures buyers that they are getting the best available offer. If the customers manage to find a better deal elsewhere, companies will often match the new price and refund the difference.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57206_51914_BMW-X5-40i-XLine-004.jpg" />
    <Card.Body>
      <Card.Title>Comfortness</Card.Title><hr />
      <Card.Text>
      The comfort of vehicle refers to the level of safety offered from different kinds of situations and factors like especially road safety. The most comfortable and luxury cars have high standard of ride quality. A car with very good ride quality is also a comfortable car to ride in. WheelzDrive provides comfortable cars to our clients.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
          <CardGroup>
  <Card>
    <Card.Img height="350px" variant="top" src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwYm9va2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80" />
    <Card.Body>
      <Card.Title>Easy to book</Card.Title><hr />
      <Card.Text>
      Pick your favourite car and let us know when and where you need it.The car will be delivered to your doorstep at the date and time promised. Start the engine and enjoy your road trip without worrying about the kilometres. You’ll receive an invoice in your email 48 hours after your trip is completed.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src="https://stylesatlife.com/wp-content/uploads/2019/08/different-types-of-cars.jpg" />
    <Card.Body>
      <Card.Title>Variety of Vehicles</Card.Title><hr />
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat sint voluptatum reiciendis ullam rem odit enim autem eveniet ducimus aliquid consequatur asperiores, corrupti magni cum? Nesciunt, corporis. Eaque quisquam asperiores consequuntur nesciunt animi veniam, incidunt repellendus molestias est, rerum enim ea minima maxime ut veritatis quidem labore molestiae cupiditate.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img height="350px" variant="top" src="https://thumbs.dreamstime.com/b/technical-support-center-customer-service-internet-business-technology-concept-technical-support-center-customer-service-internet-119668737.jpg" />
    <Card.Body>
      <Card.Title>24/7 Customer support</Card.Title><hr />
      <Card.Text>
      We are Standing here 24/7 at your service. If any problems or issues faces while booking or having an querry feel free to ask by filling the details <Link to="/contact">Click Here</Link> or else you can call us (1800-28xx-xx).
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
</Container>
      </>
  );
}
export default Services;
