<<<<<<< HEAD
import React, { Component } from 'react'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CarsStyle.css';
=======
import React, { Component } from 'react';
import { Card, Button, ListGroup} from 'react-bootstrap';
import image1 from './../Images/Cars_img/img1.jpg';
import image2 from './../Images/Cars_img/img2.jpg';
import image3 from './../Images/Cars_img/img3.jpg';
import image4 from './../Images/Cars_img/img4.jpeg';
import image5 from './../Images/Cars_img/img5.jpg';
import image6 from './../Images/Cars_img/img6.jpg';
import image7 from './../Images/Cars_img/img7.png';
import image8 from './../Images/Cars_img/img8.jpg';
import image9 from './../Images/Cars_img/img9.jpg';
>>>>>>> 10b4d92a948d4545f3cee500659e4a8f4fcd8707

export default class Cars extends Component {
    render() {
        return (
            <>
            <h1><b><i><u>Book One of your Favourite Car.</u></i></b></h1>
<<<<<<< HEAD
               <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Dzire</h4>
            </div>
                <Row />
                    <Col xs={6} md={4}>
                        <Image width="300px" height="180" src="https://imgd.aeplcdn.com/0x0/n/369uusa_1483116.jpg" rounded />
                    </Col>
            <div className="card-body">
            <p>Performance at its core, making every drive powerful and efficient.</p>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Car Details</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mileage: 23-24kmpl</ListGroup.Item>
                    <ListGroup.Item>Transmission: Auto/Manual</ListGroup.Item>
                    <ListGroup.Item>Seats: 5 Adults</ListGroup.Item>
                    <ListGroup.Item>Luggage: 4 Bags</ListGroup.Item>
                    <ListGroup.Item>Fuel: Petrol</ListGroup.Item>
                </ListGroup>
                </Card>
            <button type="button"  className="w-10 btn btn-lg btn-outline-primary "><Link className="btn-1" to="/cars/book">Book Now</Link></button>
            </div>
            </div>
              
               <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Grand I10</h4>
            </div>
                <Row />
                    <Col xs={6} md={4}>
                        <Image width="300px" height="180" src="https://www.drivespark.com/images/2019-08/hyundai-grand-i10-nios-exterior-36.jpg" rounded />
                    </Col>
            <div className="card-body">
            <p>Fun-sized, but big on personality, perfectly ready for anything you throw at it. Advanced technologies. Comfort and convenience.</p>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Car Details</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mileage: 20-28kmpl</ListGroup.Item>
                    <ListGroup.Item>Transmission: Auto/Manual</ListGroup.Item>
                    <ListGroup.Item>Seats: 5 Adults</ListGroup.Item>
                    <ListGroup.Item>Luggage: 4 Bags</ListGroup.Item>
                    <ListGroup.Item>Fuel: Petrol</ListGroup.Item>
                </ListGroup>
                </Card>
            <button type="button" className="w-10 btn btn-lg btn-outline-primary "><Link className="btn-1" to="/cars/book">Book Now</Link></button>
            </div>
            </div>
              
               <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Baleno</h4>
            </div>
                <Row />
                    <Col xs={6} md={4}>
                        <Image width="300px" height="180" src="https://imgd.aeplcdn.com/0x0/cw/ec/37710/Maruti-Suzuki-Baleno-Left-Front-Three-Quarter-147416.jpg?wm=0" rounded />
                    </Col>
            <div className="card-body">
            <p>Baleno is a very good car and very comfortable. Fuel efficiency is very nice. Only in safety, there is a little compromise. Otherwise, the best India car was Baleno.</p>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Car Details</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mileage: 20-24kmpl</ListGroup.Item>
                    <ListGroup.Item>Transmission: Auto/Manual</ListGroup.Item>
                    <ListGroup.Item>Seats: 5 Adults</ListGroup.Item>
                    <ListGroup.Item>Luggage: 6 Bags</ListGroup.Item>
                    <ListGroup.Item>Fuel: Petrol/Diesel</ListGroup.Item>
                </ListGroup>
                </Card>
            <button type="button" className="w-10 btn btn-lg btn-outline-primary "><Link className="btn-1" to="/cars/book">Book Now</Link></button>
            </div>
            </div>
              
               <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
            <h4 className="my-0 fw-normal">XUV500</h4>
            </div>
                <Row />
                    <Col xs={6} md={4}>
                        <Image width="300px" height="180" src="https://imgctcf.aeplcdn.com/thumbs/p-nc-b-ver201911141250/images/car-data/big/2021Ct/mahindra-xuv500-14145.png" rounded />
                    </Col>
            <div className="card-body">
            <p>The overall experience is good.The car has a good fuel efficiency and it's very reliable. It's a good everyday car and you can rely on it for the off-road.</p>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Car Details</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mileage: 13-15kmpl</ListGroup.Item>
                    <ListGroup.Item>Transmission: Manual</ListGroup.Item>
                    <ListGroup.Item>Seats: 7 Adults</ListGroup.Item>
                    <ListGroup.Item>Luggage: 2 Bags</ListGroup.Item>
                    <ListGroup.Item>Fuel: Petrol/Diesel</ListGroup.Item>
                </ListGroup>
                </Card>
            <button type="button" className="w-10 btn btn-lg btn-outline-primary "><Link className="btn-1" to="/cars/book">Book Now</Link></button>
            </div>
            </div>
              
               <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Harrier</h4>
            </div>
                <Row />
                    <Col xs={6} md={4}>
                        <Image width="300px" height="180" src="https://www.drivespark.com/car-image/680x480x100/contents/170509235092353127453611-tata_harrier_design_and_style.jpg" rounded />
                    </Col>
            <div className="card-body">
            <p>The bold and aggressive front looks, className-leading safety, strong build quality, powerful engine and massive road presence make the Tata Harrier a perfect choice.</p>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Car Details</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mileage: 15-16kmpl</ListGroup.Item>
                    <ListGroup.Item>Transmission: Auto</ListGroup.Item>
                    <ListGroup.Item>Seats: 5 Adults</ListGroup.Item>
                    <ListGroup.Item>Luggage: 6 Bags</ListGroup.Item>
                    <ListGroup.Item>Fuel: Diesel</ListGroup.Item>
                </ListGroup>
                </Card>
            <button type="button" className="w-10 btn btn-lg btn-outline-primary "><Link className="btn-1" to="/cars/book">Book Now</Link></button>
            </div>
            </div>
              
               <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Alcazar</h4>
            </div>
                <Row />
                    <Col xs={6} md={4}>
                        <Image width="300px" height="180" src="https://imgd.aeplcdn.com/0X0/n/cw/ec/96497/left-front-three-quarter1.jpeg?wm=1&q=85" rounded />
                    </Col>
            <div className="card-body">
            <p>Performance at its core, making every drive powerful and efficient.</p>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Car Details</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mileage: 14-20kmpl</ListGroup.Item>
                    <ListGroup.Item>Transmission: Auto/Manual</ListGroup.Item>
                    <ListGroup.Item>Seats: 7 Adults</ListGroup.Item>
                    <ListGroup.Item>Luggage: 2 Bags</ListGroup.Item>
                    <ListGroup.Item>Fuel: Petrol</ListGroup.Item>
                </ListGroup>
                </Card>
            <button type="button" className="w-10 btn btn-lg btn-outline-primary  "><Link className="btn-1" to="/cars/book">Book Now</Link></button>
            </div>
            </div>
              
            
=======

            
            <div class="row g-2">
                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image1} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Dzire</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-5</ListGroup.Item>
                            <ListGroup.Item>Luggage: 5 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: *** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light"><div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image2} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Grand I10</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-5</ListGroup.Item>
                            <ListGroup.Item>Luggage: 4 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: *** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image3} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Venue</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-6</ListGroup.Item>
                            <ListGroup.Item>Luggage: 6 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: ***** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image4} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Ciaz</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-6</ListGroup.Item>
                            <ListGroup.Item>Luggage: 6 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: ***** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image5} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Creata</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-6</ListGroup.Item>
                            <ListGroup.Item>Luggage: 6 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: ***** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image6} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Innova</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-7</ListGroup.Item>
                            <ListGroup.Item>Luggage: 2 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: **** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image7} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Bolero</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-7</ListGroup.Item>
                            <ListGroup.Item>Luggage: 2 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: ** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light">
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image8} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Scorpio</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-7</ListGroup.Item>
                            <ListGroup.Item>Luggage: 2 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: *** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                <div class="col-4">
                <div class="p-3 border bg-light"><div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image9} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Safari Strome</h5>
                        <Card style={{ width: '18rem' }}>
                        <Card.Header>Description</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Seating: Adults-7</ListGroup.Item>
                            <ListGroup.Item>Luggage: 2 Bags</ListGroup.Item>
                            <ListGroup.Item>Comfortable: *** ratings</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Button variant="info mt-2" href="/cars/carsList/book">Book Now</Button>
                    </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>
           

>>>>>>> 10b4d92a948d4545f3cee500659e4a8f4fcd8707
            </>
        )
    }
}
