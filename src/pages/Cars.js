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

export default class Cars extends Component {
    render() {
        return (
            <>
            <h1><b><i><u>Book One of your Favourite Car.</u></i></b></h1>

            
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
           

            </>
        )
    }
}
