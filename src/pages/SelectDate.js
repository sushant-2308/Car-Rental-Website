import {React, useState} from 'react';
import { Container, Form, Row, Col, Button, Modal, Alert } from 'react-bootstrap';
import './DateStyle.css';

const SelectDate = () =>{
    const [show, setShow] = useState(false);
    // const [firstname, setFirstname] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [pickDate, setPickDate] = useState('');
  const [checked, setChecked] = useState(false)
//   const [stateCheck, setStateCheck] = useState(false)
//   const [cityCheck, setCityCheck] = useState(false)
  const handleClick = () => setChecked(!checked)
//   const stateTrue = () => setStateCheck(true)
//   const stateFalse = () => setStateCheck(false)
//   const cityClick = () => setCityCheck(!cityCheck)

  

  function SubmitButton(){
    if(dropDate && pickDate && pickDate>dropDate){
        alert('Drop Date is before Pick up Date')
    }
    if (dropDate && pickDate && checked && pickDate<=dropDate){
      return <Button variant="success mb-3" type="button" href="/cars/carsList">Submit</Button>
    } else {
      return <Button variant="danger mb-3" type="button" href="/cars/carsList" disabled >Submit</Button>
    };
  };

    return(
        <>
        <Container>
            <h1>Please Select Your Dates</h1>
            <div className="Dates">
            <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Pick-Up Date</Form.Label>
                    <div>
                        <input value={pickDate} type="date" name="myDate" onChange={ e => {setPickDate(e.target.value)
                        console.log(e.target.value);
                        }} />
                    </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Drop-Off Date</Form.Label>
                    <div>
                        <input value={dropDate} type="date" name="myDate" onChange={ e => setDropDate(e.target.value)} />
                    </div>
                    </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select>
                            <option >Chhattisgarh</option>
                            
                        </Form.Select>
                        </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Select>
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

                    <div className="tems-condition">
                <h3>Terms & Conditions</h3>
                <Button variant="primary mt-1 mb-1" onClick={() => setShow(true)}>
                        View
                    </Button>

                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Terms & Conditions
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <p>
                        <Alert variant="success">
                        <p>Charges of Per car will be 1000/- rupees per Day.</p></Alert>
                        <Alert variant="success">
                        <p>In the start of the journey minimum 4 liters of fuel will be provided by the company.</p></Alert>
                        <Alert variant="success">
                        <p>If a Female client books a car then a female driver will be assinged to the client for the woman safety.</p></Alert>
                        <Alert variant="success">
                        <p>For ID proof please provide your ADHAR CARD Number.</p>

                        </Alert>
                        </p>
                        </Modal.Body>
                    </Modal>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleClick} type="checkbox" label="I accept terms & conditions" required />
                </Form.Group>

                <SubmitButton/>
                
            </div>

                    {/* <SubmitButton/> */}
            </div>
        </Container>    
        </>
    );
}

export default SelectDate;