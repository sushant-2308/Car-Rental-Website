import {React, useState} from 'react';
import { Container, Button } from 'react-bootstrap';  
import './ContactStyle.css';

const Contact = () =>{
    const [firstname, setFirstname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
      
    function SubmitButton(){
      if (firstname && phone && email){
        return <Button variant="success mb-3" href="/" type="button">Submit</Button>
      } else {
        return <Button variant="danger mb-3" href="/" type="button" disabled>Submit</Button>
      };
    };
    return(
      
        <Container>
            <h1 className="contact-h1">Feel Free to Contact Us.</h1>
            <form className="form-group">
            <label for="name">Name</label> 
                <div>
                    <input value={firstname} onChange={ e => setFirstname(e.target.value)} className="form-input" type="text" name="myName" id="name" placeholder="Enter your Name." />
                </div>
            <label for="phone">Phone Number</label> 
                <div>
                    <input value={phone} onChange={ e => setPhone(e.target.value)} className="form-input" type="phone" name="myphone" id="phone" placeholder="Enter your Phone number." />
                </div>
            <label for="email">Email-Id</label> 
                <div>
                    <input value={email} onChange={ e => setEmail(e.target.value)} className="form-input" type="email" name="myEmail" id="email" placeholder="Enter your Email." />
                </div>
                <div>
                Write your descripion: <br /> <textarea value={description} onChange={ e => setDescription(e.target.value)} className="form-input" name="myText" cols="30" rows="10" placeholder="Description."></textarea>
                </div>
            </form>
            <SubmitButton />
        </Container>
      
    );
}

export default Contact;