import React from "react";
import { Container, Button } from "react-bootstrap";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <Container>
      <h1 className="contact-h1">Feel Free to Contact Us.</h1>
      <form className="form-group">
        <label for="name">Name</label>
        <div>
          <input
            className="form-input"
            type="text"
            name="myName"
            id="name"
            placeholder="Enter your Name."
          />
        </div>
        <label for="phone">Phone Number</label>
        <div>
          <input
            className="form-input"
            type="phone"
            name="myphone"
            id="phone"
            placeholder="Enter your Phone number."
          />
        </div>
        <label for="email">Email-Id</label>
        <div>
          <input
            className="form-input"
            type="email"
            name="myEmail"
            id="email"
            placeholder="Enter your Email."
          />
        </div>
        <div>
          Write your descripion: <br />{" "}
          <textarea
            className="form-input"
            name="myText"
            cols="30"
            rows="10"
            placeholder="Description."
          ></textarea>
        </div>
      </form>
      <Button className="contact-btn" variant="success">
        Submit
      </Button>
    </Container>
  );
};

export default Contact;
