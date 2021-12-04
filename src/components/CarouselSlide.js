import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from './../Images/img-1.jpg';
import image2 from './../Images/img-2.jpg';
import image3 from './../Images/img-3.jpg';

const CarouselSlide = () => {
    return (
     
        <Carousel fade>
  <Carousel.Item>
    <img
      height = "800px"
      width = "400px"
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height = "800px"
      width = "400px"
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height = "800px"
      width = "500px"
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
}

export default CarouselSlide;



// https://i.pinimg.com/originals/5b/ea/31/5bea31f180866296289137bf9d2e9a8e.jpg
// https://www.teahub.io/photos/full/159-1595276_car-rental.jpg
// https://i.pinimg.com/originals/3c/39/86/3c398666d56221707e07c5e26da69bc9.jpg
