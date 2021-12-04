import {React, useState} from "react";
import {Button, Modal, Form} from 'react-bootstrap';

const Registration = () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
      <>
      <Button variant="danger" onClick={handleShow}>
        Registration
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration!</Modal.Title>
        </Modal.Header>

        <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your First Name" />
  </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Last Name" />
  </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone_number" placeholder="Enter your phone number" />
  </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Gender</Form.Label><br/>
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
      <label class="form-check-label" for="inlineRadio1">Male</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
      <label class="form-check-label" for="inlineRadio2">Female</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
      <label class="form-check-label" for="inlineRadio2">Others</label>
    </div>
    </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="UserName" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Creat a password" />
  </Form.Group>

  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default Registration;