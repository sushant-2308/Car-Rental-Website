import React from "react";
import { Row, Col, Image, Card, ListGroup } from "react-bootstrap";

const CarDetails = (CarArray) => {
  return CarArray.map((car) => {
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{car.model_name}</h4>
      </div>

      <Row />
      <Col xs={6} md={4}>
        <Image width="300px" height="180" src={car.profilepicture} rounded />
      </Col>
      <div className="card-body">
        <p>
          Performance at its core, making every drive powerful and efficient.
        </p>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Car Details</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Mileage: {car.mileage}</ListGroup.Item>
            <ListGroup.Item>Transmission: {car.transmission}</ListGroup.Item>
            <ListGroup.Item>Seats: {car.seats}</ListGroup.Item>
            <ListGroup.Item>ABS: {car.abs ? "Yes" : "No"}</ListGroup.Item>
            <ListGroup.Item>Fuel: {car.fuel_type}</ListGroup.Item>
          </ListGroup>
        </Card>
        <button type="button" className="w-25 btn btn-lg btn-outline-primary">
          Book Now
        </button>
      </div>
    </div>;
  });
};

export default CarDetails;
