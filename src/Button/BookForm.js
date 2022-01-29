import { React, useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import Razorpay from "../Razorpay";
// import { Link } from 'react-router-dom';
import "./BookForm.css";

const BookForm = () => {
  const [firstname, setFirstname] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [adhar, setAdhar] = useState("");
  const [people, setPeople] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);

  const handleClick = () => setChecked(!checked);

  function SubmitButton() {
    if (firstname && phone && email && adhar && people && address) {
      if (adhar.length !== 12) {
        alert("Addhar length not equal to 12 digits");
        return (
          <Button variant="success mb-3" href="/invoice" type="button">
            Submit
          </Button>
        );
      }
      if (checked)
        return (
          <Button variant="success mb-3" href="/invoice" type="button">
            Submit
          </Button>
        );
      else
        return (
          <Button
            variant="success mb-3"
            type="button"
            onClick={() => Razorpay(phone)}
          >
            Submit
          </Button>
        );
    } else {
      return (
        <Button variant="danger mb-3" href="/" type="button" disabled>
          Submit
        </Button>
      );
    }
  }
  return (
    <>
      <h1>Book your Vehicle</h1>

      <Container className="book">
        <span>
          <h3>Enter your Details.</h3>
        </span>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={firstname}
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={phone}
                type="phoneNumber"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Adhar Card Number</Form.Label>
              <Form.Control
                value={adhar}
                type="adharCard"
                placeholder="Adhar Card Number"
                onChange={(e) => setAdhar(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Number of Peoples</Form.Label>
              <Form.Control
                value={people}
                type="number"
                placeholder="Peoples"
                onChange={(e) => setPeople(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                placeholder="1234 Main St"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Chhattisgarh</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>City</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Bhilai</option>
                <option>Bilaspur</option>
                <option>Dongargarh</option>
                <option>Durg</option>
                <option>Rajnandgaon</option>
                <option>Raigarh</option>
                <option>Raipur</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleClick}
            type="checkbox"
            label="Pay on COD"
            required
          />
        </Form.Group>
        <SubmitButton />
      </Container>
    </>
  );
};

export default BookForm;
