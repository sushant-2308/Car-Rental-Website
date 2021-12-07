import React from "react";
import { Card, Container } from "react-bootstrap";

function About() {
  return (
    <>
      <h1>Benefits of Renting car with us.</h1>
      <Container>
        <Card>
          <h2 bg="Danger">Affordable Price</h2>
          <Card.Img
            variant="top"
            src="https://wallpaperaccess.com/full/4933284.jpg"
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              perferendis aliquid, rerum tempore maiores placeat velit quis
              numquam, provident dolores voluptatibus esse non quam! Doloremque
              eos provident dicta neque unde? Nobis nam ad optio?
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <h2>Comfortable Cars</h2>
          <Card.Img
            variant="top"
            src="https://wallpaperaccess.com/full/4933367.jpg"
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              perferendis aliquid, rerum tempore maiores placeat velit quis
              numquam, provident dolores voluptatibus esse non quam! Doloremque
              eos provident dicta neque unde? Nobis nam ad optio?
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <h2>Fulfill your needs</h2>
          <Card.Img
            variant="top"
            src="https://wallpaperaccess.com/full/4933357.jpg"
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              perferendis aliquid, rerum tempore maiores placeat velit quis
              numquam, provident dolores voluptatibus esse non quam! Doloremque
              eos provident dicta neque unde? Nobis nam ad optio?
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <h2>Easy Booking</h2>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              perferendis aliquid, rerum tempore maiores placeat velit quis
              numquam, provident dolores voluptatibus esse non quam! Doloremque
              eos provident dicta neque unde? Nobis nam ad optio?
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </>
  );
}

export default About;
