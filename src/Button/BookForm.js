import {React} from 'react';
import { Card, Alert, Form, Row, Col, Button, Container } from 'react-bootstrap';

const BookForm = () =>{
    return(
        <>
            <h1>Book your Vehicle</h1>
            <Card>
            <Card.Header>Terms and Conditions</Card.Header>
            <Card.Body>
            <Alert variant="success">
                Charges of Per Car will be 2000/- rupees per day.
            </Alert>
            <Alert variant="success">
                Minimum 4 Litre Petrol/Diesel will be provided by the Company.
            </Alert>
            <Alert variant="success">
                While Returning the vehicle it must contain 2 Litres of Petrol/Diesel.
            </Alert>
            <Alert variant="success">
                Incase of anything happen to the vehicle it will be the responsibility of client.
            </Alert>
            <Alert variant="success">
                For ID Proof please provide your Adhar Card Number
            </Alert>
            </Card.Body>
            </Card>
            <hr />
            <span><h3>Enter your Details.</h3></span>
        <Container>
            <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="Email" />
                        </Form.Group>

                        
                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="password" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Adhar Card Number</Form.Label>
                        <Form.Control type="password" placeholder="Adhar Card Number" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Pick-Up Date</Form.Label>
                    <div>
                        <input type="date" name="myDate" />
                    </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Drop-Off Date</Form.Label>
                    <div>
                        <input type="date" name="myDate" />
                    </div>
                    </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Chhattisgarh</option>
                            
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>
                     <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
            </Container>
</>
    );
}

export default BookForm;